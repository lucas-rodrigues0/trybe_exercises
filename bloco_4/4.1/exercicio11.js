let salBruto = 3500;
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