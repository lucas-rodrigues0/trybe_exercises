// const connection = require('./connection');

module.exports = async (data) => {
  // const result = await connection()
  //   .then((db) => db.collection('helloJWT').findOne(username));
  const result = { username: data.username, admin: data.admin };
  return result;
};
