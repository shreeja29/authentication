const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });
const {
    login,
    register,
    verifyOtp,
    removeAccount,
    getImageByEmail,
  } = require('../controllers/auth');
router.post('/register', upload.single('image'), register);
router.post('/login', login);
router.post('/verify-otp',verifyOtp);
router.delete('/remove-account/:email',removeAccount);
router.get('/user-image/:email',getImageByEmail);
module.exports = router;
