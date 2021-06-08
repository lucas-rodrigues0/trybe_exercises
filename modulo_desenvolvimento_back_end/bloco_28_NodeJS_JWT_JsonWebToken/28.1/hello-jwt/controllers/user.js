const jwt = require('jsonwebtoken');

const model = require('../models');

const secret = process.env.SECRET;

module.exports = async (req, res, _next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found!' } });
  }
  try {
    const decoded = jwt.verify(token, secret);

    const user = await model.getUser(decoded.data);

    res.status(200).json(user);
  } catch (err) {
    return res.status(401).json({ error: { message: err } });
  }
};
