const techlist = (arr, name) => {
  let output = [];
  if (arr.length === 0) {
    return output = 'Vazio!';
  }

  arr.sort();

  arr.map(element => {
    return output.push({ 'tech': element, 'name': name } );
  });

  return output;
}

module.exports = techlist;
