import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const ConnectWallet = ({ onClose }) => {
  const [connectedAccount, setConnectedAccount] = useState('');
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Initialize Web3 instance
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Get the current connected account
          const accounts = await web3Instance.eth.getAccounts();
          setConnectedAccount(accounts[0]); // Assuming the first account is the user's account

          // Optional: You can add more logic here, such as interacting with contracts
        } catch (error) {
          console.error('Error connecting Metamask:', error);
        }
      } else {
        alert('Please install Metamask to connect your wallet.');
      }
    };

    initializeWeb3();
  }, []);

  return (
    <div style={styles.container}>
      {connectedAccount ? (
        <div>
          <p>Connected Account:</p>
          <p>{connectedAccount}</p>
          <button onClick={onClose} style={styles.closeButton}>Close</button>
        </div>
      ) : (
        <button onClick={connectedAccount} style={styles.connectButton}>Connect Metamask</button>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
    color: 'white',
  },
  connectButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  closeButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default ConnectWallet;
