const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,        // e.g. 'shreeja.joshi'
  host: process.env.PGHOST,        // e.g. remote host like 'db.example.com'
  database: process.env.PGDATABASE,// e.g. 'mydbi'
  password: process.env.PGPASSWORD,// your DB password
  port: process.env.PGPORT || 5432,
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
