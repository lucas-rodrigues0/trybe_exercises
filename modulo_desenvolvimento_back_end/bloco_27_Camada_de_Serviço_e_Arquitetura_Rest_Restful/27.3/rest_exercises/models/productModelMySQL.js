const connection = require('./connectionMySQL');

const add = async (name, brand) => {
  try {
    const [
      result,
    ] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return [{ id: result.insertId, name, brand }];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    if (!result.length) return null

    return [result[0]];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const results = await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [ name, brand, id ], (err, result) => {
    if (err) throw err;
    return result;
    })

    if (results[0].affectedRows === 0) return null;

    return true;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    console.log(product);
    if (!product) return false;

    await connection.query('DELETE FROM products WHERE id = ?', [id])
    return true;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
