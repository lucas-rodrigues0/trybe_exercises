const jwt = require('jsonwebtoken');

const service = require('../services/login');

const secret = process.env.SECRET;
const adminPassword = process.env.ADMIN_PASSWORD;

const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

module.exports = async (req, res, _next) => {
  try {
    const { username, password } = req.body;
    let admin = false;

    const validation = service.validateUserPassword(username, password);

    if (validation) {
      return res.status(401).json({ message: validation });
    }

    if (username === 'admin' && password === adminPassword) {
      admin = true;
    }

    const user = { username, admin };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};
