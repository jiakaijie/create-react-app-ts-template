import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.log(123);
  }, []);
  return (
    <div className="App">
      123
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
