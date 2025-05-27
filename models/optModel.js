const db = require('../db');

const createOtp = async (email, otp_code, expires_at) => {
  const result = await db.query(
    `INSERT INTO otps (email, otp_code, expires_at) VALUES ($1, $2, $3) RETURNING *`,
    [email, otp_code, expires_at]
  );
  return result.rows[0];
};

const getOtpByUserId = async (email) => {
  const result = await db.query(
    `SELECT * FROM otps WHERE email = $1 ORDER BY created_at DESC LIMIT 1`,
    [email]
  );
  return result.rows[0];
};

const deleteOtpByUserId = async (email) => {
  await db.query(`DELETE FROM otps WHERE email = $1`, [email]);
};

module.exports = {
  createOtp,
  getOtpByUserId,
  deleteOtpByUserId,
};
