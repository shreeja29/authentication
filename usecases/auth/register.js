const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userModel = require('../models/userModel');
const otpModel = require('../models/optModel');
const {sendOtpEmail}=require('../helpers/email');
const saltRounds = 10;

const registerUser = async (userData) => {
  console.log("heyy");
  
  const { email, password } = userData;
  console.log({userData});
  
  const existingUser = await userModel.getUserByEmail(email);
  console.log({existingUser});
  
  if (existingUser) {
    throw new Error('User already exists');
  }
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  userData.password = hashedPassword;
  return await userModel.createUser(userData);
};
module.exports={registerUser}