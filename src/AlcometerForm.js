import React, { useState } from 'react';

function AlcometerForm({ onCalculate }) {
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState('1');
  const [time, setTime] = useState('1');

  const handleCalculate = () => {
    onCalculate({
      weight: parseFloat(weight),
      gender,
      bottles: parseFloat(bottles),
      time: parseFloat(time),
    });
  };

  return (
    <div>
      <label htmlFor="weight">Weight (kg):</label>
      <input
        type="number"
        id="weight"
        placeholder="Enter your weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label htmlFor="bottles">Number of Beer Bottles:</label>
      <select id="bottles" value={bottles} onChange={(e) => setBottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        {/* Add more options if needed */}
      </select>

      <label htmlFor="time">Time (hours):</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        {/* Add more options if needed */}
      </select>

      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
}

export default AlcometerForm;
