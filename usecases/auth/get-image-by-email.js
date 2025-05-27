const bcrypt = require('bcrypt');
const crypto = require('crypto');
const userModel = require('../../models/userModel');
const otpModel = require('../../models/optModel');
const {sendOtpEmail}=require('../../helpers/email');
const saltRounds = 10;
const getImageByEmailUsecase = async (email) => {
  const user = await userModel.getUserByEmail(email);

  if (!user || !user.image) {
    throw new Error('Image not found');
  }

  return user.image;
};
module.exports=getImageByEmailUsecase