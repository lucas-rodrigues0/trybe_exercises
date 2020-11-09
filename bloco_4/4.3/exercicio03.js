let n = 5;

for (let i=0; i<n; i+=1) {
  let ponto = "*";
  let espaço = " ";
  let linha = "";
  for (let esp=0; esp<n - (i+1); esp+=1) {
    linha = linha + espaço;
  }
  for (let pon=1; pon<=i + 1; pon+=1) {
    linha = linha + ponto;
  }
  console.log(linha);
}
