import React from 'react';

function AverageCalculator({ numbers }) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  return (
    <div>
      <h2>Array: {numbers.join(', ')}</h2>
      <h2>Average: {average}</h2>
    </div>
  );
}

export default AverageCalculator;
