
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
 
  const output = names.reduce((acc, elem) => {
    let aux = elem.split('');
    let count = aux.filter(elem => elem === 'a' || elem === 'A');
    acc += count.length;
    return acc;
  }, 0);
  
  return output;
}

assert.deepEqual(containsA(), 20);
