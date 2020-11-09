let notaValor = -9;
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
    console.log("ERROR > Valor não correspondente");
}

console.log(notaConceito);

