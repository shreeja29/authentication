export default function ErrorPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Oops!</h1>
        <p style={styles.message}>Sorry, we can't log you in.</p>
        <p style={styles.subtext}>Please check your credentials or try again later.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: '#f8f9fa',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#fff',
    padding: '2rem 3rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '400px',
  },
  title: {
    color: '#d32f2f',
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  message: {
    color: '#333',
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  subtext: {
    color: '#666',
    fontSize: '0.95rem',
  },
};
