import { handleActions } from 'redux-actions';
import { fetchExampleStart, fetchExampleSuccess, fetchExampleError } from '../../actions/example';

export interface ExampleInitialState {
  exampleData: object;
  fetchExampleIsLoading: boolean;
  fetchExampleError: string;
}

const ExampleInitialState = {
  exampleData: null,
  fetchExampleIsLoading: false,
  fetchExampleError: null,
};

export default handleActions(
  {
    [fetchExampleStart as any]: state => ({
      ...state,
      fetchExampleIsLoading: true,
      fetchExampleError: null,
    }),
    [fetchExampleSuccess as any]: (state, action: any) => ({
      ...state,
      exampleData: action.payload,
      fetchExampleIsLoading: false,
    }),
    [fetchExampleError as any]: (state, action: any) => ({
      ...state,
      fetchExampleError: action.error,
      fetchExampleIsLoading: false,
    }),
  },
  ExampleInitialState,
);
