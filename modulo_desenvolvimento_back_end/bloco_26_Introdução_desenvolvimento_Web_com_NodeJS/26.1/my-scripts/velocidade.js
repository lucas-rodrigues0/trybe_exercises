const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distancia percorrida (em metros)? ');
const tempo = readline.questionInt('Qual o tempo gasto (em segundos)? ');

const calculateVelocity = (distance, time) => {
  return `velocidade: ${distance / time} m/s`;
};

console.log(calculateVelocity(distancia, tempo));
