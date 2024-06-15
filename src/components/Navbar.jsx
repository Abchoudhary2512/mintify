import React, { useState } from 'react';
import ConnectWallet from './ConnectWallet'; // Import the ConnectWallet component

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <a href="#" style={styles.logo}>Mintify</a>
        <div style={styles.navLinks}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>Trending</a>
          <div style={{ position: 'relative' }}>
            <button style={styles.connectWalletButton} onClick={toggleDropdown}>Connect Wallet</button>
            <div style={{ ...styles.dropdownContent, display: showDropdown ? 'block' : 'none' }}>
              <ConnectWallet onClose={closeDropdown} />
            </div>
          </div>
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
    justifyContent: 'space-between', // Adjusted to space items between flex container
    width: '100%', // Ensure container takes full width
    maxWidth: '1200px', // Limit maximum width of the navbar
    margin: '0 auto', // Center the navbar horizontally
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
    borderRadius: '20px', // Rounded corners
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
    backdropFilter: 'blur(10px)', // Adds a blurry effect behind the button
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Drop shadow for a slight elevation effect
  },
  connectWalletButton: {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '10px',
    transition: 'all 0.3s ease',
    borderRadius: '20px', // Rounded corners
    border: '1px solid rgba(255, 255, 255, 0.3)', // Border with transparency
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Drop shadow for a slight elevation effect
  },
  dropdownContent: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background for dropdown
    backdropFilter: 'blur(10px)', // Adds a blurry effect behind the dropdown
    top: '100%',
    right: 0,
    minWidth: '200px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Drop shadow for a slight elevation effect
    zIndex: 1001, // Ensure the dropdown stays on top of other content
    display: 'none', // Initially hide dropdown
    borderRadius: '20px', // Rounded corners
  },
};

export default Navbar;
