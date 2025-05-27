const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userModel = require('../models/userModel');
const otpModel = require('../models/optModel');
const {sendOtpEmail}=require('../helpers/email');
const saltRounds = 10;

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
   
    const otp_code = crypto.randomInt(100000, 999999).toString();
    console.log(otp_code);
    
    const expires_at = new Date(Date.now() + 1 * 60 * 1000); 
    await otpModel.createOtp(user.email, otp_code, expires_at);
    await sendOtpEmail(user.email,otp_code);
    return { user, otp_code };
  };
  module.exports={loginUser};