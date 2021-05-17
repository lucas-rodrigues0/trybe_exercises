const readline = require('readline-sync');

const showFibonacci = () => {
  const inputNum = readline.questionInt('Quantos elementos da sequecia fibonacci deseja?: ');

  const output = [];

  for (let i = 0; i < inputNum; i += 1) {
    let newElem = (output.length > 1) ? (output[ i - 1 ] + output[ i - 2 ]) : 1;
    output.push(newElem);
  }

  if (inputNum > 0) {
    console.log(output);
  } else {
    console.log('nenhum elemento exibido!');
  }
};

module.exports = showFibonacci;
