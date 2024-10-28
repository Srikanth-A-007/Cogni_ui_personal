// TextButton.js
import React from 'react';
import './text-button.css';

const TextButton = ({ label, onClick, disabled }) => {
  return (
    <div className="text-button-container">
      <label className="text-button-label">Text Button</label>
    <button 
      className="text-button" 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
    </div>
  );
};

// Default props for the button
TextButton.defaultProps = {
  label: 'Click Me',
  onClick: () => alert("Text button clicked!"),
  disabled: false,
};

export default TextButton;
