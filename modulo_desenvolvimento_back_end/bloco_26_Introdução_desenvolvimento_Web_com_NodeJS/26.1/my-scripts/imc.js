const readline = require('readline-sync');


const peso = readline.questionFloat('Qual o seu peso (em kilos)? ');
const altura = readline.questionFloat('Qual a sua altura (em metros)? ');

const calculateStatus = (imc) => {
  let status;

  if (imc < 18.5) {
    status = "Abaixo do peso (magreza)";
    return status;
  }
  if (imc >= 18.5 && imc <= 24.9) {
    status = "Peso normal";
    return status;
  }
  if (imc >= 25.0 && imc <= 29.9) {
    status = "Acima do peso (sobrepeso)";
    return status;
  }
  if (imc >= 30.0 && imc <= 34.9) {
    status = "Obesidade grau I";
    return status;
  }
  if (imc >= 35.0 && imc <= 39.9) {
    status = "Obesidade grau II";
    return status;
  }
  if (imc >= 40.0) {
    status = "Obesidade graus III e IV";
    return status;
  }
}

const calculateIMC = (weigth, height) => {
  const imc = weigth / (Math.pow(height, 2));

  statusIMC = calculateStatus(imc);

  return `Seu IMC é ${imc.toFixed(2)}. Seu status está ${statusIMC}!`;
};

console.log(calculateIMC(peso, altura));
