const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userModel = require('../../models/userModel');
const otpModel = require('../../models/optModel');
const {sendOtpEmail}=require('../../helpers/email');
const saltRounds = 10;

const userDetails=async(email)=>{
  const user = await userModel.getUserByEmail(email);
  console.log({user});
  return user;
}
module.exports=userDetails;