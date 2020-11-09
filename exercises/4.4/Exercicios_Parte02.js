// Exercicio 01

// Solução com a pesquisa em "https://medium.com/better-programming/algorithms-101-palindromes-8a06ea97af86"

function verificaPalindrome(str) {
  let l = str.length;
  for (let i = 0; i < l/2; i++) {
   if (str[i] !== str[l - 1 - i]) {
    return false;
   }
  }
  return true;
}

console.log(verificaPalindrome('reviver'));
 
console.log('--------------------------');
 // Exercicio 02
 
function indiceMaiorValor(arr) {
  let indice = 0
  let verifica = arr[0];
  for (let index=0; index<arr.length; index+=1) {
    if (arr[index] == arr[0] || arr[index] > verifica) {
      verifica = arr[index];
      indice = index;
    }
  }
  return indice;
}
let numbers = [2, 3, 6, 7, 10, 1];
console.log(indiceMaiorValor(numbers));

console.log('--------------------------');
 // Exercicio 03
 
 function indiceMenorValor(arr) {
  let indice = 0
  let verifica = arr[0];
  for (let index=0; index<arr.length; index+=1) {
    if (arr[index] == arr[0] || arr[index] < verifica) {
      verifica = arr[index];
      indice = index;
    }
  }
  return indice;
}

let numbers2 =  [2, 4, 6, 7, 10, 0, -3];
console.log(indiceMenorValor(numbers2));

console.log('--------------------------');
 // Exercicio 04

function maiorNome(arr) {
  let verifica = arr[0].length;
  let Nome = '';
  for (let index=0; index<arr.length; index+=1) {
    if (arr[index] == arr[0] || arr[index].length > verifica) {
      verifica = arr[index].length;
      Nome = arr[index];
    }
  }
  return Nome;
}

let names =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(names));

console.log('--------------------------');
 // Exercicio 05
//Solução com entendimento do código de José Bernardo para o mesmo exercicio


function verificaRepeticao(arr) {
  let valorMaisRepetido = 0;
  let contador = 0;
  
  for (let index=0; index<arr.length; index+=1) {
    let repeticoes = 0;

    for (let ind=0; ind<arr.length; ind+=1) {
      if (arr[index] == arr[ind]) {
        repeticoes+=1;
      }
    }
    if (repeticoes > contador) {
      valorMaisRepetido = arr[index];
      contador = repeticoes;
    }
  }

  return valorMaisRepetido;
}

let arrayRepetidos = [2, 3, 2, 5, 8, 2, 3];
console.log(verificaRepeticao(arrayRepetidos));

console.log('--------------------------');
 // Exercicio 06

 function somatorioNumAnteriores(num) {
  let sum = 0;
  
  for (let index=1; index<=num; index+=1) {
    sum+=index;
  }
  return sum;
 }

console.log(somatorioNumAnteriores(10));

console.log('--------------------------');
 // Exercicio 06

 function verificaFimPalavra(str1, str2) {
  let l1 = str1.length;
  let l2 = str2.length;
  let cheque = 0; 

  for (let i=l1 -1; i>=l1 - l2; i-=1) {
    if (str1[i] == str2[i - (l1 - l2)]) {
      cheque+=1;
    }
  }

  if (cheque == l2) {
    return true;
  }
  else {
    return false;
  }
 }

 console.log(verificaFimPalavra('trybe', 'be'));