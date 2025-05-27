import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function OTPPage() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://authentication-back-end1.onrender.com/auth/verify-otp', { email, otp });
      localStorage.setItem('user', JSON.stringify(res.data.user));
    
      
      navigate('/thank-you');
    } catch {
      navigate('/error');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={verifyOtp} style={styles.form}>
        <h2 style={styles.heading}>OTP Verification</h2>
        <input
          style={styles.input}
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>Verify OTP</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    background: '#f1f4f6',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1rem',
    color: '#333',
  },
  input: {
    padding: '0.75rem',
    width: '100%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    width: '100%',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
