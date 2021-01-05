const hydrate = str => {
  let output = '';
  let count = 0;

  str = str.split(' ');

  str.forEach(element => {
    if (isNaN(element) === false) {
      count += parseInt(element);
    }
  })

  if (count === 1) {
    output = `${count} copo de água`;
  }
  else if (count > 1) {
    output = `${count} copos de água`;
  }
  else {
    output = 'ainda não bebeu nada.';
  }
  return output;
}

module.exports = hydrate;