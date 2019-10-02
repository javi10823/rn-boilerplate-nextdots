import { handleActions } from 'redux-actions';
import { loginStart, loginSuccess, loginError } from '../../actions/auth';

export interface AuthInitialState {
  loginData: object;
  loginIsLoading: boolean;
  loginError: string;
}

const AuthInitialState = {
  loginData: null,
  loginIsLoading: false,
  loginError: null,
};

export default handleActions(
  {
    [loginStart as any]: state => ({
      ...state,
      loginIsLoading: true,
      loginError: null,
    }),
    [loginSuccess as any]: (state, action: any) => ({
      ...state,
      loginData: action.payload,
      loginIsLoading: false,
    }),
    [loginError as any]: (state, action: any) => ({
      ...state,
      loginError: action.error,
      loginIsLoading: false,
    }),
  },
  AuthInitialState,
);
