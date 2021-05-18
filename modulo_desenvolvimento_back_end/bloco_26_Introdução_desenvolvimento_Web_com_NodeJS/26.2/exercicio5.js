const fs = require('fs/promises');

const inputDados = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function manipulateMultiplesFiles() {
  Promise.all([
    fs.writeFile('file1.txt', JSON.stringify(inputDados[0])),
    fs.writeFile('file2.txt', JSON.stringify(inputDados[1])),
    fs.writeFile('file3.txt', JSON.stringify(inputDados[2])),
    fs.writeFile('file4.txt', JSON.stringify(inputDados[3])),
    fs.writeFile('file5.txt', JSON.stringify(inputDados[4])),
  ])
    .then(() => console.log('Arquivos escritos com sucesso!'))
    .catch((err) => console.error(err.message));

  Promise.all([
    fs.readFile('file1.txt'),
    fs.readFile('file2.txt'),
    fs.readFile('file3.txt'),
    fs.readFile('file4.txt'),
    fs.readFile('file5.txt'),
  ])
    .then(([file1, file2, file3, file4, file5]) => {
      const Allfiles = `${file1} ${file2} ${file3} ${file4} ${file5}`;
      fs.writeFile('fileAll.txt', Allfiles);
      console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => console.error(err.message));
}

manipulateMultiplesFiles();
