const fs = require('fs/promises');

const simpsons = './simpsons.json';

function readAllData() {
  fs.readFile(simpsons)
    .then((data) => {
      output = JSON.parse(data);
      for (let i = 0; i < output.length; i++) {
        console.log('%s - %s', output[i].id, output[i].name);
      }
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

// readAllData();

async function readDataById(Id) {
  const dados = await fs.readFile(simpsons)
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

  const output = dados.find(e => e.id == Id);
  if (!output) throw new Error('Id não encontrado!')
  console.log(output);
}

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

  const newDados = dados.filter(e => !Ids.includes(Number(e.id)));

  fs.writeFile(simpsons, JSON.stringify(newDados))
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch((err) => console.error(err.message));

}

// writeNewData([10, 6]);

async function writeNewFile(Ids) {
  const dados = await fs.readFile(simpsons)
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });

  const newDados = dados.filter(e => Ids.includes(Number(e.id)));

  fs.writeFile('./simpsonFamily.json', JSON.stringify(newDados), { flag: 'w' })
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch((err) => console.error(err.message));
}

// const simpsonsFamilyIds = [1, 2, 3, 4];

writeNewFile(simpsonsFamilyIds);

async function updateFile(Name) {
  const dados = await fs.readFile(simpsons)
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });

  const toFile = await fs.readFile('./simpsonFamily.json')
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });

  const newDados = [...toFile, ...dados.filter(e => e.name === Name)];

  fs.writeFile('./simpsonFamily.json', JSON.stringify(newDados))
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch((err) => console.error(err.message));
}

const Nelson = "Nelson Muntz";

// updateFile(Nelson);

async function updateFile(NameOut, NameIn) {
  const dados = await fs.readFile(simpsons)
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });

  const toFile = await fs.readFile('./simpsonFamily.json')
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });

  const newDados = [...toFile.filter(e => e.name !== NameOut), ...dados.filter(e => e.name === NameIn)];

  fs.writeFile('./simpsonFamily.json', JSON.stringify(newDados))
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch((err) => console.error(err.message));
}

const Maggie = "Maggie Simpson";

// updateFile(Nelson, Maggie);
