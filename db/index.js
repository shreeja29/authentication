const { Pool } = require('pg');

const pool = new Pool({
  user: "mydbi_user",        // e.g. 'shreeja.joshi'
  host: "dpg-d0r0jgu3jp1c739c9ck0-a",        // e.g. remote host like 'db.example.com'
  database: "mydbi",// e.g. 'mydbi'
  password: "Fsqc6JeAv6GUE4DCo3Y9Xqj5QHwhpdms",// your DB password
  port: 5432,
  ssl: false,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

