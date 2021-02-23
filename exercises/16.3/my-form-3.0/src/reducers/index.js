import { combineReducers } from 'redux';

import formReducer from './formReducer';
import submitReducer from './submitReducer';

export default combineReducers({
  form: formReducer,
  submition: submitReducer,
});
