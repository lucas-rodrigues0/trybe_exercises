const connection = require('./connection');
const { ObjectId, ObjectID } = require('mongodb');

const isValidUser = (user) => {
  const { firstName, lastName, email, password } = user;

  if (!firstName || !lastName || !email || !password) return false;
  if (typeof password !== 'string' || password.length < 6) return false;

  return true;
};

const createUser = async (firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then((result) => {
      return { id: result.insertedId, firstName, lastName, email };
    });
};

const getUsers = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((response) => {
      return response.map(({ _id, firstName, lastName, email }) => {
        return { id: _id, firstName, lastName, email };
      });
    });
};

const getUserById = async (id) => {
  if (!ObjectID.isValid(id)) { return null; }

  const userById = await connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)));

  if (!userById) { return null; }

  const { _id, firstName, lastName, email } = userById;
  return { id: _id, firstName, lastName, email };
};

module.exports = {
  createUser,
  isValidUser,
  getUsers,
  getUserById,
};
