const getImageByEmailController = (authService) => {
    const getImageByEmail = async (req, res) => {
      const { email } = req.params;
      console.log({ email });
  
      try {
        const userImage = await authService.getImageByEmail(email);
        console.log({ userImage });
  
        if (!userImage) {
          return res.status(404).json({ error: 'Image not found' });
        }
  
        const base64Image = userImage.toString('base64');
        console.log({ base64Image });
  
        res.status(200).json({ image: base64Image });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error retrieving image' });
      }
    };
  
    return { getImageByEmail };
  };
  
  module.exports = getImageByEmailController;
  