import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './reducer_auth.js';


const reducers = combineReducers({
  history: AuthReducer,
  form: formReducer,
});

export default reducers;
