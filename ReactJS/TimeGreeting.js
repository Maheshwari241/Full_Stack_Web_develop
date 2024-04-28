import React from 'react';

function TimeGreeting() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else if (hour < 22) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Good Night';
  }

  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
}

export default TimeGreeting;
