import { createAction } from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from './types';
import { waitOneSecond } from '../utils/time';
import { USER_TOKEN } from '../utils/constant';

export const loginStart = createAction(LOGIN_START);
export const loginSuccess = createAction(LOGIN_SUCCESS, data => data);
export const loginError = createAction(LOGIN_ERROR, error => error);

export function logIn() {
  return async (dispatch, getState) => {
    try {
      const fetchIsLoading = getState().auth.loginIsLoading;
      if (!fetchIsLoading) {
        dispatch(loginStart());
        await waitOneSecond(); // only for demo
        await AsyncStorage.setItem(USER_TOKEN, 'Logged user!');
        dispatch(loginSuccess('Logged user!'));
      }
    } catch (err) {
      dispatch(loginError(err));
    }
  };
}

export function logOut() {
  return async () => {
    await AsyncStorage.removeItem(USER_TOKEN);
  };
}
