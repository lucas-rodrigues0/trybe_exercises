import { CLEAR_FORM, SUBMIT_FORM } from '../actions/index';

const INITIAL_STATE = {
  sendSubmition: false,
}

export default function submitReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        sendSubmition: action.payload.sendSubmition
      }
    case CLEAR_FORM:
      return state;
    default:
      return state;
  }
}
