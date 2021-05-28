const validCep = (cep) => {
  const regexCep = /\d{5}-?\d{3}/;

  return regexCep.test(cep);
};

const formatCepNumber = (numCep) => {
  const formatedCepNumber = (numCep.includes('-')) ? numCep : `${numCep.slice(0, -3)}-${numCep.slice(-3)}`;
  return formatedCepNumber;
}

const formatCep = ({ cep, logradouro, bairro, localidade, uf }) => {
  const formatedCep = formatCepNumber(cep);
  return {
    cep: formatedCep,
    logradouro,
    bairro,
    localidade,
    uf
  }
}

module.exports = {
  validCep,
  formatCep,
  formatCepNumber,
};
