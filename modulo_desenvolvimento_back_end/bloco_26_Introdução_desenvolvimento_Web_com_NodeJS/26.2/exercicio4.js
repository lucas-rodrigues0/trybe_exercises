const fs = require('fs/promises');

const simpsons = 'simpsons.json';

// function readAllData() {
//   fs.readFile(simpsons)
//     .then((data) => {
//       output = JSON.parse(data);
//       for (let i = 0; i < output.length; i++) {
//         console.log('%s - %s', output[i].id, output[i].name);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//     });
// }

// readAllData();

// async function readDataById(Id) {
//   const dados = await fs.readFile(simpsons)
//     .then((data) => {
//       return JSON.parse(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//     });

//   const output = dados.find(e => e.id == Id);
//   if (!output) throw new Error('Id não encontrado!')
//   console.log(output);
// }

// readDataById(6);

async function writeNewData(Ids) {
  const dados = await fs.readFile(simpsons)
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

  const newDados = dados.filter(e => !Ids.includes(e.id));

  // fs.writeFile(simpsons, newDados)
  //   .then(() => console.log('Arquivo escrito com sucesso!'))
  //   .catch((err) => console.error(err.message));

  console.log(newDados);
}

writeNewData([10, 6]);

// function test() {
//   const org = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ];
//   const out = [ 3, 5 ];

//   const newarr = org.filter(e => !out.includes(e.id));

//   console.log(newarr);
// }

// test();
