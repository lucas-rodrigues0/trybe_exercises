const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Chico13*',
    database: 'cep_lookup'});

module.exports = connection;
