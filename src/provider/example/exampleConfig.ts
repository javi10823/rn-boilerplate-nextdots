import { APIConnector } from '..';
import config from '../../config';

const apiConnector = new APIConnector({ timeout: 50000 });

export default class ExampleConfig {
  static get endpoint(): string {
    return `${config.API_URL}`;
  }

  static get endpointExample(): string {
    return `${ExampleConfig.endpoint}/lookup.php?i=11007`;
  }

  static get APIConnector(): APIConnector {
    return apiConnector;
  }
}
