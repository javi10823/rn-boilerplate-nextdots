import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';
import config from '../config';

function getMiddlewares() {
  const middlewares: any[] = [thunk];
  if (config.REDUX_LOGGER_ACTIVATED) middlewares.push(logger);
  return middlewares;
}

export const store = createStore(rootReducer, applyMiddleware(...getMiddlewares()));

export type Store = ReturnType<typeof rootReducer>;
