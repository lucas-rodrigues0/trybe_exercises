//  Parte I - req 01

const testingScope = escopo => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

// testingScope(true);

//  Parte I - req 02

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemCrescente = array => array.sort(function (a, b) {
  return a - b;
});

ordemCrescente(oddsAndEvens);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Parte II - req 01

const fatorial = num => {
  let fat = num;
  if (fat >= 2) {
    for (let index = fat - 1; index > 0; index -= 1) {
      fat *= index;
    }
  } else if (fat <= 1) {
    fat = 1;
  }
  return fat;
}

console.log(fatorial(3));

// recursiva

const fatorial = num => {
  if (num <= 1) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(5));


// Parte II - req 02

const longestWord = frase => {
  let words = frase.split(' ');
  let longest = words[0];
  for (let index = 0; index < words.length; index += 1) {
    if (index != 0 && words[index].length > longest.length) {
      longest = words[index];
    }
  }
  return longest;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'


// Parte II - req 04

const lookForX = (str, par) => {
  let words = str.split(' ');
  let output;
  for (let index in words) {
    if (words[index] === 'x') {
      words[index] = par;
    }
    output += `${words[index]}`
  }
  return output;
}

console.log(lookForX('Tryber x aqui!', 'cheese'));

let skills = []