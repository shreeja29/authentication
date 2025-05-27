const verifyOtpController = (authService) => {
  const verifyOtp = async (req, res) => {
    console.log("inside verify", req.body);

    try {
      const { email, otp } = req.body;

      const verified = await authService.verifyOtp(email, otp);
      console.log({ verified });

      if (verified) {
        const user = await authService.userDetails(email);
        res.status(200).json({ message: 'OTP verified', user });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  return { verifyOtp };
};

module.exports = verifyOtpController;
