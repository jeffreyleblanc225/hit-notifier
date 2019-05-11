import React from 'react';
import socketIoClient from 'socket.io-client';

import logo from './logo.svg';
import './App.css';

function App() {
  const socket = socketIoClient(`http://127.0.0.1:3001`);
  socket.on(`count`, (data) => {
    console.log(data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
