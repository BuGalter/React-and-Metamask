import React from 'react';
import KeyButton from './KeyButton';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test App on React for work with metamask</h1>
      </header>
      <KeyButton/>
    </div>
  );
}

export default App;
