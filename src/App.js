import React from 'react';
import logo from './logo.svg';
import './App.css';
import KeyButton from './KeyButton';
import Login from './Login';
import PublicAddress from './PublicAddress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test App on React for work with metamask</h1>
      </header>
      <KeyButton/>
      <Login/>
      <PublicAddress/>
    </div>
  );
}

export default App;
