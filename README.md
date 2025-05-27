<<<<<<< HEAD
# authentication
for login and register and otp generation 
=======
# User Authentication API with OTP and Image Upload

This project is a Node.js backend API for user registration, login with OTP verification, account removal, and fetching user images and details stored in PostgreSQL.

## Project Setup

### Prerequisites

- Node.js (v14+ recommended)
- PostgreSQL
- npm or yarn

### Installation Steps

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <project-folder>

```bash
# example commands
git clone https://github.com/your-repo.git
cd your-repo
npm install

## POSTGRESSQL SETUP 

db/index.js
{
  user: 'your postgres username',
  host: 'localhost',
  database: 'your database name',
  password: 'your password for user',
  port: 5432,
}



##create table 
go on terminal  and connect to psql as your user to your database and then run 
\i migration.sql


#if you want to change port for backend go on app.js and change it there and also in app.js put your frontend port also or check it


#apis

register:
`http://localhost:${PORT}/auth/register`


login:
`http://localhost:${PORT}/auth/login`


verify-otp:
`http://localhost:${PORT}/auth/verify-otp`


remove-account:
`http://localhost:${PORT}/auth/remove-account`

user details and image
`http://localhost:${PORT}/auth/user-image/${email}`





#email setup


inside helpers/email.js
{
  service: 'gmail',
  auth: {
    user: "Your Gmail address",
    pass: "The 16-char app password you generated"
  }


   const mailOptions = {
    from: 'your mail id from which you sent otp mail',
    to: toEmail,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otpCode}. It is valid for 10 minutes.}

if  you will face any difficulty in gmail setup then you can also see otp in console i provided it you better testing phase 








  
>>>>>>> Initial commit
