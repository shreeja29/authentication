import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = form.password;
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      alert(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
      );
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    try {
      await axios.post('https://authentication-back-end1.onrender.com/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="name" placeholder="Name" onChange={handleChange} required style={styles.input} />
          <input name="email" placeholder="Email" type="email" onChange={handleChange} required style={styles.input} />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} required style={styles.input} />
          <input name="company" placeholder="Company" onChange={handleChange} style={styles.input} />
          <input name="age" placeholder="Age" type="number" onChange={handleChange} style={styles.input} />
          <input name="dob" placeholder="DOB" type="date" onChange={handleChange} style={styles.input} />
          <input name="image" type="file" accept="image/png, image/jpeg" onChange={handleImage} required style={styles.inputFile} />
          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f0f2f5',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1.5rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  inputFile: {
    padding: '0.5rem 0',
  },
  button: {
    padding: '0.75rem',
    borderRadius: '6px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
