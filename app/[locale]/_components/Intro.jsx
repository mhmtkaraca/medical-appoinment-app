import React from 'react';

const TreatmentAdvisor = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Treatment Advisor</h1>
      <p style={styles.subtitle}>
        <strong>Find the right medical solution wherever you are</strong>
      </p>
      <ul style={styles.list}>
        <li>TOP-rated hospitals and doctors</li>
        <li>Expert medical advisory board</li>
        <li>Statistics-based choice</li>
        <li>Door-to-door service</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.8',
    color: '#333',
    padding: '40px 220px', // Daha büyük padding ve soldan boşluk
    marginLeft: '50px', // Soldan uzaklaştırma
  },
  title: {
    fontSize: '54px', // Başlığı büyüt
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '32px', // Alt başlığı büyüt
    fontWeight: '600',
    marginBottom: '25px',
    color: '#0069ff'
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '40px', // Listeyi biraz daha sağa kaydır
    fontSize: '22px', // Liste öğelerini büyüt
  },
};

export default TreatmentAdvisor;
