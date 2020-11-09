// Solução atravez do entedimento do código de Daniel Rodrigues para o mesmo exercicio

let n = 15;
let linhas = " ";
let asterisco = "*";
let espaco = " ";

if (n > 1) {
    for (i=0; i < n; i +=2) {
        for (let j=0; j < n; j +=1) {
            if ( (j == ((n-i-1)/2)) || (j == ((n+i-1)/2)) )  {
                linhas += asterisco;
            } 
            else if ((n-1) == i) {   
                linhas += asterisco;
            } 
            else {
                linhas += espaco;                
            }          
        }   
        console.log(linhas);
        linhas = " ";
    }
}
else {
    console.log("Valor inválido!");
} 