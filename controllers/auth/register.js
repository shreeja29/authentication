const registerController = (authService) => {
  const register = async (req, res) => {
    try {
      console.log('req.file:', req.file);
      console.log('req.body:', req.body);

      const { name, email, password, company_name, age, dob } = req.body;
      const imageBuffer = req.file ? req.file.buffer : null;

      const userData = {
        name,
        email,
        password,
        company_name,
        age: age ? Number(age) : null,
        dob,
        image: imageBuffer,
      };
       
      const authFunc=authService();

      const createdUser = await authFunc.registerUser(userData);
      console.log({ createdUser });

      res.status(201).json({ message: 'User registered', user: createdUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  return { register };
};

module.exports = registerController;
