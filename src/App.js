import React from 'react';
import ConnectWallet from './components/ConnectWallet'; // Adjust path as per your project structure
import Navbar from './components/Navbar';
import Upload from './components/Upload';

function App() {
  return (
    <>
      <Navbar />

      {/* Other components or UI elements */}
      <Upload/>
    </>
  );
}

export default App;
