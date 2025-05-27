const removeAccountController = (authService) => {
    const removeAccount = async (req, res) => {
      try {
        console.log(req.params);
        const { email } = req.params;
        const authFunc=authService();
        await authFunc.removeAccount(email);
        res.status(200).json({ message: 'Account removed successfully' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };
  
    return { removeAccount };
  };
  
  module.exports = removeAccountController;
  