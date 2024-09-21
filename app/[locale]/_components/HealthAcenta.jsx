import React from 'react';

const AuthorizedHealthTourismAgency = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <h2 style={styles.title}>Authorized Health Tourism Agency</h2>
          <p style={styles.description}>
            The treatments of our patients are carried out in institutions authorized by the Ministry of Health, which hold a health tourism authorization certificate. As an authorized health tourism agency, we provide reliable, high-quality, and legally compliant healthcare services.
          </p>
          <p style={styles.accreditation}>
            Our agency is certified with a Health Tourism Authorization Certificate and is audited by the Ministry of Health throughout all processes.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#f5f8fb',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: "'Helvetica Neue', sans-serif",
  },
  container: {
    maxWidth: '1000px',
    backgroundColor: '#fff',
    padding: '40px 60px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    borderRadius: '12px',
  },
  contentWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '34px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '30px',
    letterSpacing: '1.2px',
    borderBottom: '3px solid #3498db',
    display: 'inline-block',
    paddingBottom: '10px',
  },
  description: {
    fontSize: '20px',
    lineHeight: '1.6',
    color: '#7f8c8d',
    marginBottom: '20px',
  },
  accreditation: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#95a5a6',
  },
};

export default AuthorizedHealthTourismAgency;
