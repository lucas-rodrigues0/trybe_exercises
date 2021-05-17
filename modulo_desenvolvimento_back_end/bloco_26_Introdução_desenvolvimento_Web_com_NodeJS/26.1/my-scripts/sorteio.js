const readline = require('readline-sync');

const generateRandomNum = () => {
  return Math.floor(Math.random() * 11);
};

const sorteio = () => {
  let play = true;
  while (play) {
    let randomNum = generateRandomNum();
    let inputNum = readline.questionInt('Adivinhe o numero (de 1 a 10)? ');
    let output = (randomNum === inputNum)
      ? "Parabéns, número correto!"
      : `Opa, não foi dessa vez. O número era ${randomNum}`;

    console.log(output);
    play = readline.keyInYN('Gostaria de tentar novamente? :');
  }
}

module.exports = sorteio;
