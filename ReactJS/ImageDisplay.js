import React from 'react';

function ImageDisplay({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="Displayed Image" />
    </div>
  );
}

export default ImageDisplay;
