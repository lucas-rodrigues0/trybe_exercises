const readline = require('readline-sync');

const calculateVelocity = () => {
  const distancia = readline.questionInt('Qual a distancia percorrida (em metros)? ');
  const tempo = readline.questionInt('Qual o tempo gasto (em segundos)? ');

  console.log(`velocidade: ${distancia / tempo} m/s`);
};

module.exports = calculateVelocity;
