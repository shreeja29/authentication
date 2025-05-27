const authService = require('../usecases/authService');

const register = async (req, res) => {
  try {
    console.log('req.file:', req.file); // Check if image was uploaded
    console.log('req.body:', req.body);

    const { name, email, password, company_name, age, dob } = req.body;
    const imageBuffer = req.file ? req.file.buffer : null;

    // Construct user data object with imageBuffer included
    const userData = {
      name,
      email,
      password,
      company_name,
      age: age ? Number(age) : null, // convert if necessary
      dob,
      image: imageBuffer,
    };

    const createdUser = await authService.registerUser(userData);
    console.log({ createdUser });

    res.status(201).json({ message: 'User registered', user: createdUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log({email,password});
    
    const { user, otp_code } = await authService.loginUser(email, password);
    console.log({otp_code});
    
    res.status(200).json({ message: 'OTP generated', userId: user.id, otp_code }); 
    
  } catch (error) {
    res.status(401).json({ error: "Sorry, we can't log you in." });
  }
};

const verifyOtp = async (req, res) => {
  console.log("inside verify",req.body);
  
  try {
    const { email, otp } = req.body;
  
    const verified=await authService.verifyOtp(email, otp);
    console.log({verified});
    if(verified){
    const user = await authService.userDetails(email);
    
    res.status(200).json({ message: 'OTP verified', user });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeAccount = async (req, res) => {
  console.log("jdfdsfdna");
  
  try {
    console.log(req.params);
    
    const { email } = req.params;
  
    await authService.removeAccount(email);
    res.status(200).json({ message: 'Account removed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getImageByEmail = async (req, res) => {
  const { email } = req.params;
  console.log({email});
  
  try {
    const userImage = await authService.getImageByEmail(email);
    console.log({userImage});
    
    if (!userImage) {
      return res.status(404).json({ error: 'Image not found' });
    }
    const base64Image = userImage.toString('base64');
    console.log({base64Image});
    
    res.status(200).json({ image: base64Image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving image' });
  }
};


module.exports = {
  register,
  login,
  verifyOtp,
  removeAccount,
  getImageByEmail
};
