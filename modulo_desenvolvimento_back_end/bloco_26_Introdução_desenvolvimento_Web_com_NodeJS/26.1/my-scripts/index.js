const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');

const scripts = [imc, velocidade, sorteio];
const chooseScript = ['imc', 'velocidade', 'sorteio'];
const index = readline.keyInSelect(chooseScript, 'Qual script quer executar?');

scripts[index]();
