// FullScreenError.js
import React from 'react';
import './Error.scss'; // Optional: for styling

const Error = () => {
  return (
    <div className="fullscreen-error">
      <div className="error-icon">❌</div> 
      <h2>Something Went Wrong</h2>
      <p>Please try again later.</p>
    </div>
  );
};

export default Error;
