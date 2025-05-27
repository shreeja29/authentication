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

const loginUser = async (email, password) => {
  const user = await userModel.getUserByEmail(email);
  console.log({user});
  
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('Invalid credentials');
  }
  // generate OTP
  const otp_code = crypto.randomInt(100000, 999999).toString();
  const expires_at = new Date(Date.now() + 1 * 60 * 1000); 
  await otpModel.createOtp(user.email, otp_code, expires_at);
  await sendOtpEmail(user.email,otp_code);
  return { user, otp_code };
};

const verifyOtp = async (userId, otp_code) => {
  console.log("inside usecase");
  
  const otpRecord = await otpModel.getOtpByUserId(userId);
  console.log({otpRecord});
  
  if (!otpRecord) throw new Error('OTP not found');
  if (otpRecord.expires_at < new Date()) throw new Error('OTP expired');
  if (otpRecord.otp_code !== otp_code) throw new Error('Invalid OTP');
  await otpModel.deleteOtpByUserId(userId);
  return true;
};
const userDetails=async(email)=>{
  const user = await userModel.getUserByEmail(email);
  console.log({user});
  return user;
}
const getImageByEmail = async (email) => {
  const user = await userModel.getUserByEmail(email);

  if (!user || !user.image) {
    throw new Error('Image not found');
  }

  return user.image;
};

const removeAccount = async (userId) => {
  await userModel.deleteUserById(userId);
};

module.exports = {
  registerUser,
  loginUser,
  verifyOtp,
  userDetails,
  removeAccount,
  getImageByEmail
};
