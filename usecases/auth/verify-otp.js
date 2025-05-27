const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userModel = require('../models/userModel');
const otpModel = require('../models/optModel');
const {sendOtpEmail}=require('../helpers/email');
const saltRounds = 10;

const verifyOtpUsecase = async (userId, otp_code) => {
  console.log("inside usecase");
  
  const otpRecord = await otpModel.getOtpByUserId(userId);
  console.log({otpRecord});
  
  if (!otpRecord) throw new Error('OTP not found');
  if (otpRecord.expires_at < new Date()) throw new Error('OTP expired');
  if (otpRecord.otp_code !== otp_code) throw new Error('Invalid OTP');
  await otpModel.deleteOtpByUserId(userId);
  return true;
};
module.exports={verifyOtpUsecase};