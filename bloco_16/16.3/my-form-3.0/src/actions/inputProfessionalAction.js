import { ADD_PROFESSION_INFO } from './index';

export default function addProfessionalInfo(name, value) {
  return {
    type: ADD_PROFESSION_INFO,
    payload: {
      professionalInfo: {
        [ name ]: value,
      }
    }
  }
}
