const readline = require('readline-sync');

const generateRandomNum = () => {
  return Math.floor(Math.random() * 10);
};

const checkNumberInput = () => {
  const randomNum = generateRandomNum();
  const inputNum = readline.questionInt('Adivinhe o numero (de 1 a 10)? ');
  const output = (randomNum === inputNum)
    ? "Parabéns, número correto!"
    : `Opa, não foi dessa vez. O número era ${randomNum}`;
  return output;
};

console.log(checkNumberInput());
