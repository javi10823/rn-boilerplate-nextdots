import ExampleConfig from './exampleConfig';

export default class ExampleService {
  static fetchExample() {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = ExampleConfig.endpointExample;
        console.log(endpoint);
        const response: any = await ExampleConfig.APIConnector.get(endpoint);
        if (response.__ok) {
          resolve(response);
        } else reject();
      } catch (error) {
        console.log('error', error);
        reject(error);
      }
    });
  }
}
