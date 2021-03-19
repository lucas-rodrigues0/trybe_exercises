import { createStore } from 'redux';

import { CLEAR_FORM } from '../actions/index';
import appReducer from '../reducers';

const rootReducer = (state, action) => {
  if (action.type === CLEAR_FORM) {
    state = undefined
  }

  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
