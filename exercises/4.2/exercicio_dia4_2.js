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

for (let i=0; i<numbers.length; i++) {
  console.log(numbers[i]);
}

// exercicio 02 >

for (x in numbers) {
  sumNumbers += numbers[x];
}

console.log(sumNumbers);

// exercicio 03 >

medAritmetica = sumNumbers / numbers.length;

console.log(medAritmetica);

// exercicio 04 >

if (medAritmetica > 20) {
  console.log('Valor maior que 20');
}
else {
  console.log('Valor menor ou igual a 20');
}

// exercicio 05 >

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

// exercicio 06 >

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

// exercicio 07 >

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

// exercicio 08 >

for (let i=0; i<25; i++) {
  novaArray.push(i +1);
}

for (x in novaArray) {
  console.log(novaArray[x]);
}

// exercicio 09 >

for (let i=0; i<novaArray.length; i++) {
  console.log((novaArray[i] / 2));
}

// exercicio Bonus 01 >

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}

for (x in numbers) {
  console.log(numbers[x]);
}

// exercicio Bonus 02 >

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
for (x in numbers) {
  console.log(numbers[x]);
}

// exercicio Bonus 03 - usando o array numbersBonus(array inicial não ordenado) >

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

for (x in arrayBonus) {
  console.log(arrayBonus[x]);
}
