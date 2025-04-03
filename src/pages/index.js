export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Next.js CI/CD Pipeline Test
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
        The CI/CD pipeline is working correctly
      </p>
      <p style={{ color: '#888' }}>
        Deployed automatically via GitHub Actions and Vercel
      </p>
    </div>
  );
}
