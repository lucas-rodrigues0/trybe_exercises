const fetch = require('node-fetch');
const API_URL = 'https://dog.ceo/api/breeds/image/random';

function checkResponseStatus(res) {
  if(res.ok){
      return res
  } else {
      throw new Error(`The HTTP status of the reponse is invalid`);
  }
}


const requestPicture = () => {
  return new Promise((resolve, reject) => {
    fetch(API_URL)
      .then(checkResponseStatus)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
};

module.exports = {
  requestPicture,
  fetch,
  API_URL
}
