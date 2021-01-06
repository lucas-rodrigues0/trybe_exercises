const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.name === name);
      if (arrayAnimals.length === 0) {
        return reject('Nenhum animal com esse nome!');
      }
      resolve(arrayAnimals[0]);
    }, 100);
  })
};

const getAnimal = (name) => {
  return findAnimalByName(name)
    .then((list) => list);
};

module.exports = getAnimal;

