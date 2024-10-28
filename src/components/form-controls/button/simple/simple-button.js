// PrimaryButton.js
import React from 'react';
import "./simple-button.css"; // Import the CSS file for styling

const SimpleButton = ({ label, onClick, disabled }) => {
  return (
    <div className="simple-button-container">
      <label className="simple-button-label">Simple Button</label>
    <button 
      className="simple-button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
    </div>
  );
};

// Default props in case they aren't provided
SimpleButton.defaultProps = {
  label: 'Click Me',
  onClick: () => alert("Button clicked!"),
  disabled: false,
};

export default SimpleButton;
