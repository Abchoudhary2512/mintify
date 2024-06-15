import React from 'react';
import logo from './logo.svg'; // Assuming you have a logo.svg file in your src folder
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render the Navbar component */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
