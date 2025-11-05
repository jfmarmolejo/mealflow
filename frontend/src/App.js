import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
  const [message, setMessage] = useState('')
  useEffect(()=>{
    fetch('http://localhost:3001/api').then((res)=>{
      if(!res.ok) throw new Error('Fetch Error.')
      return res.json()
    }).then((lambdaResponse)=>{
      setMessage(lambdaResponse.payload)
    }).catch((err)=>{
      console.error('Error', err.message)
    })
  },[])

  return (
    <div className="App">
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
          {message || 'Loading...'}
        </a>
      </header>
    </div>
  );
}

export default App;
