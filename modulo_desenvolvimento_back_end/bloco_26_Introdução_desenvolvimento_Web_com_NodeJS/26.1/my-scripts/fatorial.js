const readline = require('readline-sync');

const calculateFactorial = () => {
  const inputNum = readline.questionInt('Qual o numero para o cálculo de fatorial?: ');
  let output =  inputNum;
  if (inputNum === 0) {
    console.log('O numero precisa ser maior que 0 !')
    output = 1;
  }

  for (let i = inputNum - 1; i > 0; i -= 1) {
    output = output * i;
  }

  console.log(`O fatorial de ${inputNum} é ${output}`);
}

module.exports = calculateFactorial;
