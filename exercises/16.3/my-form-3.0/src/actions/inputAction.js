import { ADD_PERSONAL_INFO } from './index';

export default function addInput(name, value) {
  return {
    type: ADD_PERSONAL_INFO,
    payload: {
      [name]: value,
    }
  }
}
