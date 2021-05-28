const connection = require('./connection');

const services = require('../services/cepServices');

const getAllCeps = async () => {
  const [cepData] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps;'
  );

  return cepData;
};

const getCepByNumber = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?'
  const [cepData] = await connection.execute(query, [cep]);

  if (!cepData[0]) return null;

  return cepData.map(services.formatCep)[0];
}

const createNewCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const response = await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)',
    [cep, logradouro, bairro, localidade, uf],
  );

  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  getAllCeps,
  getCepByNumber,
  createNewCep,
}
