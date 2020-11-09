let n = 5;

for (let i=1; i<=n; i+=2) {
  let linhas = "";
  let espacos = (n -i) /2;
  for (let j=1; j<=espacos; j+=1) {
      linhas += " ";
  }
  for (let k=1; k<=i; k+=1) {
    linhas += "*";
  }
  console.log(linhas);
}



