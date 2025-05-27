const loginController = require('./login');
const registerController = require('./register');
const verifyOtpController = require('./verify-otp');
const removeAccountController = require('./remove-account');
const getImageByEmailController = require('./get-image-by-email');

const authService = require('../../usecases/authService');

const { login } = loginController(authService);
const { register } = registerController(authService);
const { verifyOtp } = verifyOtpController(authService);
const { removeAccount } = removeAccountController(authService);
const { getImageByEmail } = getImageByEmailController(authService);

module.exports = {
  login,
  register,
  verifyOtp,
  removeAccount,
  getImageByEmail,
};
