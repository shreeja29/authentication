const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userModel = require('../../models/userModel');
const otpModel = require('../../models/optModel');
const {sendOtpEmail}=require('../../helpers/email');
const saltRounds = 10;

const removeAccountUsecase = async (userId) => {
  await userModel.deleteUserById(userId);
};
module.exports=removeAccountUsecase