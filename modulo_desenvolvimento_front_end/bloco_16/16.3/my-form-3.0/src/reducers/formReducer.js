import { ADD_PERSONAL_INFO, ADD_PROFESSION_INFO } from '../actions/index';

export const INITIAL_STATE = {
  personalInfo: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    habitation: '',
  },
  professionalInfo: {
    resume: '',
    jobRole: '',
    roleDescriptions: '',
  },
}

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PERSONAL_INFO:

      return {
        ...state,
        personalInfo: Object.assign({}, state.personalInfo, action.payload.personalInfo)
      }
    case ADD_PROFESSION_INFO:
      return {
        ...state,
        professionalInfo: Object.assign({}, state.professionalInfo, action.payload.professionalInfo)
      }
    default:
      return state;
  }
}
