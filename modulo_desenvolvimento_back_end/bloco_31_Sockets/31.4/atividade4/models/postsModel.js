const connection = require('./connection');
const { ObjectId } = require('mongodb');

const add = async (user, post) => {
  try {
    const likes = 0;
    const stars = 0;
    const result = await connection()
      .then((db) => db.collection('posts').insertOne({ user, post, likes, stars }))
      .then((result) => ({ id: result.insertedId, user, post }));

    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  const result = await connection()
    .then((db) => db.collection('posts').find().toArray());
  return result;
}

module.exports = { add, getAll };
