const db = require('../db');

const createUser = async (user) => {
  const { name, email, password, company_name, age, dob, image } = user;
  const result = await db.query(
    `INSERT INTO users (name, email, password, company_name, age, dob, image)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [name, email, password, company_name, age, dob, image]
  );
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await db.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return result.rows[0];
};

const deleteUserById = async (email) => {
  await db.query(`DELETE FROM users WHERE email = $1`, [email]);
};

module.exports = {
  createUser,
  getUserByEmail,
  deleteUserById,
};
