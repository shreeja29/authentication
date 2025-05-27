// All required dependencies
const userModel = require('../../models/userModel');
const otpModel = require('../../models/optModel');
const { sendOtpEmail } = require('../../helpers/email');

// All pure logic functions (no requires inside them)
const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const verifyOtp = require('./verifyOtp');
const removeAccount = require('./removeAccount');
const getImageByEmail = require('./getImageByEmail');
const userDetails = require('./userDetails');

const authService = () => {
  return {
    registerUser: (data) => registerUser(data, userModel),
    loginUser: (email, password) => loginUser(email, password, userModel, otpModel, sendOtpEmail),
    verifyOtp: (email, otp) => verifyOtp(email, otp, otpModel),
    removeAccount: (email) => removeAccount(email, userModel),
    getImageByEmail: (email) => getImageByEmail(email, userModel),
    userDetails: (email) => userDetails(email, userModel)
  };
};

module.exports = authService;
