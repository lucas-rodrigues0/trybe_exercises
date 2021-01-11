const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  return new Promise((resolve, reject) => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => resolve(document.getElementById('jokeContainer').innerHTML = data.joke));

  });

};

window.onload = () => fetchJoke();

