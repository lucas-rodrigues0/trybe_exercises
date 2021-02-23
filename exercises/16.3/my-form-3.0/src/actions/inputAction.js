import { ADD_PERSONAL_INFO } from './index';

export default function addPersonalInfo(name, value) {
  return {
    type: ADD_PERSONAL_INFO,
    payload: {
      personalInfo: {
        [ name ]: value,
      }
    }
  }
}
