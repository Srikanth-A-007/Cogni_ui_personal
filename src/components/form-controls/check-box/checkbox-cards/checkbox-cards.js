import React, { useState } from 'react';
import './checkbox-cards.css'; // Ensure to create this CSS file

const CardCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div>
        <h2>Card checkbox</h2>
    <div className={`card ${isChecked ? 'selected' : ''}`} onClick={handleCheckboxChange}>
        
      <label className="card-checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="checkmark"></span>
        Check if you agree
      </label>
    </div>
    </div>
  );
};

export default CardCheckbox;
