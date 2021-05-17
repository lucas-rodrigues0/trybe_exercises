function NumericPromise(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    } else if (((a + b) * c) < 50) {
      return reject(new Error('Valor muito baixo'));
    }
    resolve((a + b) * c);
  });
}

const primeiro = Math.floor(Math.random() * 100);
const segundo = Math.floor(Math.random() * 100);
const terceiro = Math.floor(Math.random() * 100);

NumericPromise(primeiro, segundo, terceiro)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));
