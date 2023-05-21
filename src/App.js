

import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleReverseClick = async () => {
    try {
      const response = await fetch('https://reversebackend1.onrender.com/reverse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: inputValue }),
      });
      const data = await response.json();
      setResult(data.reversedNumber);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Reverse Numbers</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button className="button" onClick={handleReverseClick}>Reverse</button>
      <input className="label" type="number" value={result} readOnly />

    </div>
  );
}

export default App;
