import React, { useState } from 'react';
import './App.css';
import AlcometerForm from './AlcometerForm';
import AlcometerResult from './AlcometerResult';

function App() {
  const [bac, setBac] = useState(0);

  const calculateBAC = ({ weight, gender, bottles, time }) => {
    const litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    const burning = weight / 10;
    grams -= burning * time;

    if (grams < 0) {
      grams = 0;
    }

    let result;
    if (gender === 'male') {
      result = grams / (weight * 0.7);
    } else {
      result = grams / (weight * 0.6);
    }

    setBac(result);
  };

  return (
    <div className="App">
      <h1>Alcometer</h1>
      <div className="form">
        <AlcometerForm onCalculate={calculateBAC} />
        <AlcometerResult result={bac} />
      </div>
    </div>
  );
}

export default App;
