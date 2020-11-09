// Variaveis usadas em todos os exercicios >

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let medAritmetica = 0;
let maiorValor = numbers[0];
let menorValor = numbers[0];
let numbersOdd = [];
let novaArray = [];
let numbersBonus = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayBonus = [];

// exercicio 01 >
console.log("Exercicio 01");

for (let i=0; i<numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("---------------------");
// exercicio 02 >
console.log("Exercicio 02");

for (x in numbers) {
  sumNumbers += numbers[x];
}

console.log(sumNumbers);

console.log("---------------------");
// exercicio 03 >
console.log("Exercicio 03");

medAritmetica = sumNumbers / numbers.length;

console.log(medAritmetica);

console.log("---------------------");
// exercicio 04 >
console.log("Exercicio 04");

if (medAritmetica > 20) {
  console.log('Valor maior que 20');
}
else {
  console.log('Valor menor ou igual a 20');
}

console.log("---------------------");
// exercicio 05 >
console.log("Exercicio 05");

for (let i=0; i < numbers.length; i++) {
  if (numbers[i] == maiorValor || numbers[i] < maiorValor) {
  }
  else if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
  else {
    console.log('ERROR!');
  }
}
console.log(maiorValor);

console.log("---------------------");
// exercicio 06 >
console.log("Exercicio 06");

for (let i=0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    numbersOdd.push(numbers[i]);
  }
  else {}
}

if (numbersOdd.length > 0) {
  for (let i=0; i<numbersOdd.length; i++) {
    console.log(numbersOdd[i]);
  }
}
else {
  console.log('Nenhum valor impar encontrado!');
}

console.log("---------------------");
// exercicio 07 >
console.log("Exercicio 07");

for (let i=0; i < numbers.length; i++) {
  if (numbers[i] == menorValor || numbers[i] > menorValor) {
  }
  else if (numbers[i] < menorValor) {
    menorValor = numbers[i]
  }
  else {
    console.log('ERROR!');
  }
}
console.log(menorValor);

console.log("---------------------");
// exercicio 08 >
console.log("Exercicio 08");

for (let i=0; i<25; i++) {
  novaArray.push(i +1);
}

console.log(novaArray);


console.log("---------------------");
// exercicio 09 >
console.log("Exercicio 09");

for (let i=0; i<novaArray.length; i++) {
  console.log((novaArray[i] / 2));
}

console.log("---------------------");
// exercicio Bonus 01 >
console.log("Exercicio Bônus 01");

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}

console.log(numbers);

console.log("---------------------");
// exercicio Bonus 02 >
console.log("Exercicio Bônus 02");

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}

console.log(numbers);


console.log("---------------------");
// exercicio Bonus 03 - usando o array numbersBonus(array inicial não ordenado) >
console.log("Exercicio Bônus 03");

for (let i=0; i<numbersBonus.length; i++) {
  let multiplicacao;
  if (i == numbersBonus.length - 1) {
    multiplicacao = numbersBonus[i] * 2;
    arrayBonus.push(multiplicacao);
  }
  else {
    multiplicacao = numbersBonus[i] * numbersBonus[i + 1];
    arrayBonus.push(multiplicacao);
  }
}

console.log(arrayBonus);

