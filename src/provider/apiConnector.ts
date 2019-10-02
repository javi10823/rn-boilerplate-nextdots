import Logger from './logger';
import config from '../config';

const logger = new Logger('api-connector');

const Methods = {
  HEAD: 'HEAD',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

let _defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const Errors = {
  NO_CONNECTION: '000',
  NO_CONNECTION_MSG: 'Network request failed',

  TIMEOUT: '001',
  TIMEOUT_MSG: 'Request Timeout',

  SERVERError: '503',
  SERVERError_MSG: 'Internal Server Error',

  NOT_FOUND: 404,
  NOT_FOUND_MSG: 'Not found',

  REQUEST_ENTITY_TOO_LARGE: 413,
  REQUEST_ENTITY_TOO_LARGE_MSG: 'Request entity too large',

  UNAUTHORIZEDError: '401',
  UNAUTHORIZEDError_MSG: 'Unauthorized',

  ID_DUPLICATED: 400,
  ID_DUPLICATED_MSG: 'Duplicate Name',
};

export default class APIConnector {
  _fetch: Function;
  _defaultHeaders;
  _timeout;
  _requestUpload: Function;

  static _requestUpload(uri: string, options: Record<string, any>, uploadFormData: FormData) {
    const formData = uploadFormData;
    const time = +new Date();

    return new Promise((resolve: Function, reject: Function) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, uri);

      if (options.headers['X-Session']) {
        xhr.setRequestHeader('X-Session', options.headers['X-Session']);
      }
      xhr.setRequestHeader('X-ApiKey', options.headers['X-ApiKey']);
      xhr.setRequestHeader('X-RequestId', options.headers['X-RequestId']);
      xhr.setRequestHeader('X-TrackingId', options.headers['X-TrackingId']);
      xhr.onload = () => {
        if (config.API_CONNECTOR_LOGS_ACTIVATED) {
          logger.info(`request ${options.method}: ${uri} completed, took: ${+new Date() - time}ms`);
        }
        if (xhr.status !== 200) {
          reject(new Error(JSON.stringify({ code: xhr.status, message: xhr.responseText })));
        }
        if (!xhr.responseText) {
          console.log('Upload failed No response payload.'); // eslint-disable-line no-console
          reject(new Error(JSON.stringify({ code: 500, message: xhr.responseText })));
        }
        const index = xhr.responseText.indexOf('arcor.com');
        if (index !== -1) {
          reject(new Error(JSON.stringify({ code: 500, message: xhr.responseText })));
        }
        resolve(xhr.responseText);
      };
      xhr.send(formData);
    });
  }

  constructor(options: any = {}) {
    const { timeout = 0 } = options;

    this._fetch = fetch;
    this._timeout = null;
    this._requestUpload = APIConnector._requestUpload;

    this._defaultHeaders = APIConnector.defaultHeaders;
    if (timeout) this._timeout = timeout;
  }

  static get defaultHeaders() {
    return _defaultHeaders;
  }

  static set defaultHeaders(value) {
    _defaultHeaders = value;
  }

  static get Methods() {
    return Methods;
  }

  static get Errors() {
    return Errors;
  }

  head(uri: string, args = {}): void {
    return this._request(uri, { ...args, method: Methods.HEAD });
  }

  get(uri: string, args = {}): void {
    return this._request(uri, { ...args, method: Methods.GET });
  }

  post(uri: string, args = {}): void {
    return this._request(uri, { ...args, method: Methods.POST });
  }

  put(uri: string, args = {}): void {
    return this._request(uri, { ...args, method: Methods.PUT });
  }

  patch(uri: string, args = {}): void {
    return this._request(uri, { ...args, method: Methods.PATCH });
  }

  delete(uri: string, args = {}): void {
    return this._request(uri, { ...args, method: Methods.DELETE });
  }

  _request = (uri, args: any = {}) => {
    const { method, headers = {}, body, emptyResponse, uploadFormData } = args;
    let { checkResponseCode } = args;

    if (!uri || uri instanceof String) {
      if (config.API_CONNECTOR_LOGS_ACTIVATED) {
        return logger.error(`No valid uri given for method ${method}`) && this;
      }
      return this;
    }

    const options = {
      method,
      headers: { ...this._defaultHeaders, ...headers },
      body,
    };
    if (!body) delete options.body;

    const time = +new Date();
    const bodyLog = options.body ? ` & body: ${JSON.stringify(options.body).substr(0, 80)}...` : '';
    if (config.API_CONNECTOR_LOGS_ACTIVATED) {
      logger.info(
        `request ${options.method}: ${uri} sent, headers: ${JSON.stringify(
          options.headers,
        )}${bodyLog}`,
      );
    }

    if (uploadFormData) {
      return this._requestUpload(uri, options, uploadFormData);
    }
    return new Promise<void>((resolve: Function, reject: Function) => {
      let timeoutReached = false;
      let requestDone = false;

      if (this._timeout) {
        setTimeout(() => {
          if (requestDone) return;
          timeoutReached = true;
          const err: any = new TypeError(Errors.TIMEOUT_MSG);
          err.code = Errors.TIMEOUT;
          if (config.API_CONNECTOR_LOGS_ACTIVATED) {
            logger.info(`request ${method}: ${uri} timeout after ${+new Date() - time}ms`);
          }
          reject(err);
        }, this._timeout);
      }

      fetch(uri, options)
        .then(async (response: any) => {
          const response2 = response.clone();
          if (config.API_CONNECTOR_LOGS_ACTIVATED) {
            console.log(`\n\n`);
            console.log('_request', `\n`);
            console.log('\t- uri', uri, `\n`);
            console.log('\t- options', options, `\n`);
            console.log('\t- response', await response2.json(), `\n\n\n`);
          }

          requestDone = true;
          if (timeoutReached) return;
          if (config.API_CONNECTOR_LOGS_ACTIVATED) {
            logger.info(`request ${method}: ${uri} completed, took: ${+new Date() - time}ms`);
          }

          if (!response.ok && response.status === 503) {
            reject(new Error(JSON.stringify({ code: 503, message: Errors.SERVERError_MSG })));
          }

          if (response && response.status === Errors.NOT_FOUND) {
            checkResponseCode = true;
            reject(new Error(JSON.stringify({ code: 404, message: Errors.NOT_FOUND_MSG })));
          }

          if (response && response.status === 500) {
            checkResponseCode = true;
            if (
              checkResponseCode &&
              response._bodyInit &&
              response._bodyInit.indexOf('"code":') !== -1
            ) {
              reject(response.json());
            } else {
              reject(
                new Error(
                  JSON.stringify({
                    code: 500,
                    message: Errors.SERVERError_MSG,
                  }),
                ),
              );
            }
          }

          if (response.status === 413) {
            reject(
              new Error(
                JSON.stringify({
                  code: Errors.REQUEST_ENTITY_TOO_LARGE,
                  message: Errors.REQUEST_ENTITY_TOO_LARGE_MSG,
                }),
              ),
            );
          }

          if (emptyResponse && response.status === 200) {
            resolve({});
          }

          if (response.status === 400) {
            reject(
              new Error(
                JSON.stringify({
                  code: Errors.ID_DUPLICATED,
                  message: Errors.ID_DUPLICATED_MSG,
                }),
              ),
            );
          }

          if (response.status === 401) {
            reject(
              new Error(
                JSON.stringify({
                  code: Errors.UNAUTHORIZEDError,
                  message: Errors.UNAUTHORIZEDError_MSG,
                }),
              ),
            );
          }
          if (response.status === 204) {
            resolve({});
          } else {
            const responseBody = await response.json();
            resolve({ ...responseBody, __ok: response.ok });
          }
        })

        .catch(err => {
          if (config.API_CONNECTOR_LOGS_ACTIVATED) {
            console.log(`\n\n`);
            console.log('_request', `\n`);
            console.log('\t- uri', uri, `\n`);
            console.log('\t- options', options, `\n`);
            console.log('\t- err', err, `\n\n\n`);
          }
          requestDone = true;
          if (timeoutReached) return;
          if (config.API_CONNECTOR_LOGS_ACTIVATED) {
            logger.error(
              `request ${method}: ${uri} raised error: ${err}, took ${+new Date() - time}ms`,
            );
          }
          if (err.message === Errors.NO_CONNECTION_MSG) {
            err.code = Errors.NO_CONNECTION;
          }
          reject(err);
        });
    });
  };
}
