let num = 421;
let divididoPor= 0;

for (let divisores=1; divisores<=num; divisores+=1) {
  if (num % divisores == 0) {
    divididoPor+=1;
  }
}

if (divididoPor == 2) {
  console.log(`O número ${num} é primo.`);
}
else {
  console.log(`O número ${num} não é primo`);
}


