import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ThankYouPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`https://authentication-backend2-yplu.onrender.com/auth/user-image/${user.email}`);
        setImageSrc(`data:image/jpeg;base64,${res.data.image}`);
      } catch (err) {
        console.error('Failed to load image', err);
      }
    };

    fetchImage();
  }, [user.email]);

  const deleteAccount = async () => {
    try {
      await axios.delete(`https://authentication-backend2-yplu.onrender.com/auth/remove-account/${user.email}`);
      localStorage.clear();
      navigate('/');
    } catch {
      alert('Error deleting account');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Welcome, {user.name}</h1>
        {imageSrc && <img src={imageSrc} alt="Profile" style={styles.image} />}
        <div style={styles.info}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>
        <button onClick={deleteAccount} style={styles.button}>Remove Account</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: '#f4f6f8',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1rem',
    color: '#333',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '1rem',
    objectFit: 'cover',
  },
  info: {
    marginBottom: '1.5rem',
    color: '#555',
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
