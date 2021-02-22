import { ADD_PERSONAL_INFO, ADD_PROFESSION_INFO } from '../actions/index';

const INITIAL_STATE = {
  form: {
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
}

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PERSONAL_INFO:
      return {
        ...state,
        form: action.payload,
      }
    case ADD_PROFESSION_INFO:
      return {
        ...state,
        form: state.form.concat(action.payload.professionalInfo)
      }
    default:
      return state;
  }
}
