import { createAction } from 'redux-actions';

import { FETCH_EXAMPLE_START, FETCH_EXAMPLE_SUCCESS, FETCH_EXAMPLE_ERROR } from './types';

import ExampleService from '../provider/example/exampleService';

export const fetchExampleStart = createAction(FETCH_EXAMPLE_START);
export const fetchExampleSuccess = createAction(FETCH_EXAMPLE_SUCCESS, data => data);
export const fetchExampleError = createAction(FETCH_EXAMPLE_ERROR, error => error);

export function fetchExample() {
  return async (dispatch, getState) => {
    try {
      const fetchIsLoading = getState().example.fetchExampleDataIsLoading;
      if (!fetchIsLoading) {
        dispatch(fetchExampleStart());
        const response = await ExampleService.fetchExample();
        dispatch(fetchExampleSuccess(response));
      }
    } catch (err) {
      dispatch(fetchExampleError(err));
    }
  };
}
