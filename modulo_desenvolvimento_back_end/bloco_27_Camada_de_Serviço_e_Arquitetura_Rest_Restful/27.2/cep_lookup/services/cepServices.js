const validCep = (cep) => {
  const regexCep = /\d{5}-?\d{3}/;

  return regexCep.test(cep);
};

const formatCep = ({ cep, logradouro, bairro, localidade, uf }) => {
  const formatedCep = (cep.includes('-')) ? cep : `${cep.slice(0, -3)}-${cep.slice(-3)}`;
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
  formatCep
};


// {
//   "cep": "01001-000",
//   "logradouro": "Praça da Sé",
//   "bairro": "Sé",
//   "localidade": "São Paulo",
//   "uf": "SP",
// }
