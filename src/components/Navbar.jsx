import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <a href="#" style={styles.logo}>Logo</a>
        <div style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Connect Wallet</a>
          <a href="#" style={styles.navLink}>Trending</a>
          <a href="#" style={styles.navLink}>Home</a>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    backdropFilter: 'blur(10px)', // Adds a blurry effect behind the navbar
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensures the navbar stays on top of other content
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Drop shadow for a slight elevation effect
  },
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '10px',
    transition: 'all 0.3s ease',
  },
};

export default Navbar;
