//Exercicio 01

function sum(a, b) {
  return a + b;
}

console.log(sum(13, 7));

function sub(a, b) {
  return a - b;
}

console.log(sub(13, 7));

function mul(a, b) {
  return a * b;
}

console.log(mul(13, 7));

function div(a, b) {
  return a / b;
}

console.log(div(13, 7));

function mod(a, b) {
  return a % b;
}

console.log(mod(13, 7));

//Exercicio 02

function greaterThan(a, b) {
  if (a > b) {
    return a;
  }
  else if (a < b) {
    return b;
  }
  else {
    console.log("Valores iguais!");
  }
}

console.log(greaterThan(33.35, 33.42));

//Exercicio 03

function greatestThan(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  else if (b >= a && b >= c) {
      return b;
  }
  else {
      return c;
  }
}

console.log(greatestThan(50, 50, 40));

//Exercicio 04

function ItIsposNeg(a) {
  if (a > 0) {
    return 'positive';
  }
  else if (a < 0) {
      return 'negative';
  }
  else {
      return 'zero';
  }
}

console.log(ItIsposNeg(0));

//Exercicio 05

function ItIsTriagle(a, b, c) {
  let sumAng = a + b + c;

  if (sumAng == 180) {
      return true;
  }
  else {
      console.log('ERROR: angulos não pertencem a um triangulo!');
      return false;
  }
}

console.log(ItIsTriagle(30, 50, 120));

//Exercicio 06

function chessMoves(inputUser ) {

  inputUser = inputUser.toLowerCase();

  switch (inputUser) {
      case "peao":
          console.log("peao > a frente uma casa");
          break;

      case "torre":
          console.log("torre > ortogonal quantas casas puder/quiser");
          break;

      case "cavalo":
          console.log("cavalo > em L, duas casa em uma direção e mais uma na direção perpendicular");
          break;

      case "bispo":
          console.log("bispo > na diagonal quantas casas puder/quiser");
          break;

      case "rainha":
          console.log("rainha > todas as direções quantas casas puder/quiser");
          break;

      case "rei":
          console.log("rei > todas as direções apenas uma casa");
          break;

      default :
          console.log("ERROR > peça de xadrez inexistente!");
  };
}

chessMoves('Torre');

//Exercicio 07

function valorConceito(notaValor) {
  let notaConceito;

  if (notaValor >= 90 && notaValor <= 100) {
      notaConceito = "A";
  }
  else if (notaValor >= 80 && notaValor < 90) {
      notaConceito = "B";
  }
  else if (notaValor >= 70 && notaValor < 80) {
      notaConceito = "C";
  }
  else if (notaValor >= 60 && notaValor < 70) {
      notaConceito = "D";
  }
  else if (notaValor >= 50 && notaValor < 60) {
      notaConceito = "E";
  }
  else if (notaValor >= 0 && notaValor < 50) {
      notaConceito = "F";
  }
  else {
      notaConceito = "ERROR > Valor não correspondente";
  }

  return notaConceito;
}

console.log(valorConceito(-9));

//Exercicio 08

function ItHasAnEven(num1, num2, num3) {
  if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(ItHasAnEven(33, 13, 15));

//Exercicio 09

function ItHasAnOdd(num1, num2, num3) {
  if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(ItHasAnOdd(44, 46, 22));

//Exercicio 10

function mostraLucro(custo, valorVenda) {

  let imposto = custo * 0.2;

  let custoTotal = custo + imposto;
  
  let lucroUnit = valorVenda - custoTotal;

  let lucroMil = lucroUnit * 1000;

  if (custo < 0 || custoTotal < 0 || valorVenda < 0) {
      console.log("ERROR > valores negativos")
  }
  else {
      console.log("o custo total é de: " + custoTotal);
      console.log("o valor de venda é de: " + valorVenda);
      console.log("o lucro unitário é de: " + lucroUnit);
      console.log("o lucro de mil unidades é de: " + lucroMil);
  };
}

mostraLucro(32, 65);

//Exercicio 11

function calculoSalario(salBruto) {
  let salBase;
  let salLiquido
  let alqINSS;
  let IR;

  if (salBruto >= 0 && salBruto <= 1556.94) {
      alqINSS = salBruto * 0.08;
  }
  else if (salBruto > 1556.94 && salBruto <= 2594.92) {
      alqINSS = salBruto * 0.09;
  }
  else if (salBruto > 2594.92 && salBruto <= 5189.82) {
      alqINSS = salBruto * 0.11;
  }
  else if (salBruto > 5189.82) {
      alqINSS = 570.88;
  }
  else {
      console.log("ERROR > salario bruto negativo!");
  }

  salBase = salBruto - alqINSS;

  if (salBase >= 0 && salBase <= 1903.98) {
      IR = 0;
  }
  else if (salBase > 1903.98 && salBase <= 2826.65) {
      IR = (salBase * 0.075) - 142.80;
  }
  else if (salBase > 2826.65 && salBase <= 3751.05) {
      IR = (salBase * 0.15) - 354.80;
  }
  else if (salBase > 3751.05 && salBase <= 4664.68) {
      IR = (salBase * 0.225) - 636.13;
  }
  else if (salBase > 4664.68) {
      IR = (salBase * 0.275) - 869.36;
  }
  else {
      console.log("ERROR > salario base negativo!");
  }

  salLiquido = salBase - IR;

  console.log("Salario Bruto: " + salBruto);
  console.log("Aliquota INSS: " + alqINSS);
  console.log("Imposto de Renda: " + IR);
  console.log("Salario Liquido: " + salLiquido);
}

calculoSalario(3500);