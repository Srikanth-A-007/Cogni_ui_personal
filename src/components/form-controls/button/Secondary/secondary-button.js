// SecondaryButton.js
import React from 'react';
import "./secondary-button.css"; // Import the CSS file for styling

const SecondaryButton = ({ label, onClick, disabled }) => {
  return (
    <div className="secondary-button-container">
      <label className="secondary-button-label">Secondary Button</label>
    <button 
      className="secondary-button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
    </div>
  );
};

// Default props for optional label and click handler
SecondaryButton.defaultProps = {
  label: 'Click Me',
  onClick: () => alert("Secondary Button clicked!"),
  disabled: false,
};

export default SecondaryButton;
