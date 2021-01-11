let custo = 32;
let imposto = custo * 0.2;
let custoTotal = custo + imposto;
let valorVenda = 65;

let lucroUnit = valorVenda - custoTotal;

let lucroMil = lucroUnit * 1000;

if (custo < 0 || custo < 0 || custoTotal < 0 || valorVenda < 0) {
    console.log("ERROR > valores negativos")
}
else {
    console.log("o custo total é de: " + custoTotal);
    console.log("o valor de venda é de: " + valorVenda);
    console.log("o lucro unitário é de: " + lucroUnit);
    console.log("o lucro de mil unidades é de: " + lucroMil);
};