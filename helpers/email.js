const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shreejajoshi29@gmail.com',         // Your Gmail address
    pass: 'kizkrtsrzaldfaef',       // The 16-char app password you generated
  },
});

async function sendOtpEmail(toEmail, otpCode) {
  const mailOptions = {
    from: 'shreejajoshi29@gmail.com',
    to: toEmail,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otpCode}. It is valid for 10 minutes.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = { sendOtpEmail };

  //kizk rtsr zald faef