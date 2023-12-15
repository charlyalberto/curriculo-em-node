const { Pool } = require('pg');

const pool = new Pool({
  user: 'charlyAlberto',
  password: '12345',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'curriculoNodeExpress'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};