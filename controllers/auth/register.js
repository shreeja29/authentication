const registerController = (authService) => {
  
const register = async (req, res) => {
  try {
    const { name, email, password, company, age, dob } = req.body;
    const imageFile = req.file;

    if (!name || !email || !password || !imageFile) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const userData = {
      name,
      email,
      password,
      company,
      age,
      dob,
      image: {
        data: imageFile.buffer,             // Store buffer for binary image
        contentType: imageFile.mimetype,    // Useful if storing in DB
        originalname: imageFile.originalname,
      },
    };
    const authFunc=authService();
    const result = await authFunc.registerUser(userData);

    res.status(201).json({ message: 'User registered successfully', user: result });
  } catch (err) {
    console.error('Register error:', err);
    res.status(400).json({ message: err.message || 'Registration failed' });
  }
};


  return { register };
};

module.exports = registerController;


