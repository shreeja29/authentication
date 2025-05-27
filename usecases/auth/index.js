// All required dependencies
const userModel = require('../../models/userModel');
const otpModel = require('../../models/optModel');
const { sendOtpEmail } = require('../../helpers/email');

// All pure logic functions (no requires inside them)
const registerUser = require('./register');
const loginUser = require('./login');
const verifyOtp = require('./verify-otp');
const removeAccount = require('./remove-account');
const getImageByEmail = require('./get-image-by-email');
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
