const connection = require('./connectionMongoDB');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    const result = await connection()
      .then((db) => db.collection('products').insertOne({ name, brand }))
      .then((result) => ({ id: result.insertedId, name, brand }));

    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const rows = await connection().then((db) => db.collection('products').find().toArray());
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {

    const result = await connection().then((db) => db.collection('products').findOne(new ObjectId(id)));
    if (!result) return null

    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const verifyId = await getById(id);
    if (!verifyId) return null;

    await connection()
      .then((db) => db.collection('products')
        .updateOne({ _id: ObjectId(id) }, { $set: { name, brand } }, { upsert: true }));
    return true;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};

    await connection().then((db) => db.collection('products').deleteOne({ _id: ObjectId(id) }));
    return true;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
