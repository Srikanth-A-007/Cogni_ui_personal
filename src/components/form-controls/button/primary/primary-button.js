// PrimaryButton.js
import React from 'react';
import "./primary-button.css"; // Import the CSS file for styling

const PrimaryButton = ({ label, onClick, disabled }) => {
  return (
    <div className="primary-button-container">
      <label className="primary-button-label">Primary Button</label>
    <button 
      className="primary-button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
    </div>
  );
};

// Default props in case they aren't provided
PrimaryButton.defaultProps = {
  label: 'Click Me',
  onClick: () => alert("Button clicked!"),
  disabled: false,
};

export default PrimaryButton;
