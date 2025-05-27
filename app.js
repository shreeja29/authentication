const express = require('express');
const app = express();
const cors=require('cors');
const authRoutes = require('./routes/authRoutes');

app.use(cors({
  origin: 'https://authentication-frontend-f8zd.onrender.com',
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true,
}))
app.use(express.json());


app.use('/auth', authRoutes);




const PORT =  5000;
console.log({PORT});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
