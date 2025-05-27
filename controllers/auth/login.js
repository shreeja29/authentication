const loginController = (authService) => {
  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log({ email, password });
      const authFunc=authService();
      const { user, otp_code } = await authFunc.loginUser(email, password);
      console.log({ otp_code });

      res.status(200).json({ message: 'OTP generated', userId: user.id, otp_code });

    } catch (error) {
      res.status(401).json({ error: "Sorry, we can't log you in." });
    }
  };

  return { login };
};

module.exports = loginController;
