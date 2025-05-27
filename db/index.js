const { Pool } = require('pg');
const pool = new Pool({
  user: 'shreeja.joshi',
  host: 'localhost',
  database: 'mydbi',
  password: 'shreeja@29',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
