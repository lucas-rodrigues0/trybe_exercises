const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const fatorial = require('./fatorial');
const fibonacci = require('./fibonacci');

const scripts = [imc, velocidade, sorteio, fatorial, fibonacci];
const chooseScript = ['imc', 'velocidade', 'sorteio', 'fatorial', 'fibonacci'];
const index = readline.keyInSelect(chooseScript, 'Qual script quer executar?');

scripts[index]();
