import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import example, { ExampleInitialState } from './example/example';
import auth, { AuthInitialState } from './auth/auth';

interface State {
  example: ExampleInitialState;
  auth: AuthInitialState;
  form: object;
}

const State = combineReducers({
  example,
  auth,
  form: formReducer,
});

export default State;
