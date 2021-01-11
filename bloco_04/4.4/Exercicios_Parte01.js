let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}

// Exercicio 01
console.log('----------------------');

console.log(`Bem-vinda, ${info.personagem}!`);

// Exercicio 02
console.log('----------------------');

console.log(info);

// Exercicio 03
console.log('----------------------');

for(x in info) {
  console.log(x);
}

// Exercicio 04
console.log('----------------------');

for(x in info) {
  console.log(info[x]);
}

// Exercicio 05
console.log('----------------------');

console.log(info.personagem, 'e', info2.personagem);
console.log(info.origem, 'e', info2.origem);
console.log(info.nota, 'e', info2.nota);
if (info.recorrente === info2.recorrente) {
  console.log('Ambos recorrentes');
}
else {
  console.log(info.recorrente, 'e', info2.recorrente);
}
