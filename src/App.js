import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import KeyButton from './components/KeyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test App on React for work with metamask</h1>
      </header>
      <KeyButton />
    </div>
  );
}

export default App;
