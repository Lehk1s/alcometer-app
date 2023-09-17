import React from 'react';

function AlcometerResult({ result }) {
  return (
    <div>
      <p>Blood Alcohol Level: {result.toFixed(2)}</p>
    </div>
  );
}

export default AlcometerResult;
