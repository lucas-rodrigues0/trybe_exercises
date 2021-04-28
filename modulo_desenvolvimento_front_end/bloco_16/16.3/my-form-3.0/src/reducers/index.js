import { combineReducers } from 'redux';

import formReducer from './formReducer';
import submitReducer from './submitReducer';

const appReducer = combineReducers({
  form: formReducer,
  submition: submitReducer,
});

export default appReducer;
