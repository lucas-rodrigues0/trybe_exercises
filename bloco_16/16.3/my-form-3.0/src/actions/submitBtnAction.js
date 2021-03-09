import { SUBMIT_FORM } from './index'

export default function submitForm() {
  return {
    type: SUBMIT_FORM,
    payload: {
      sendSubmition: true,
    }
  }
}
