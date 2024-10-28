import React, { useState } from 'react';
import './standard-checkbox.css'; // Ensure to create this CSS file

const StandardCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div>
      <h2>Standard checkbox</h2>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             
        <span className="checkmark"></span>      
        Check the box 
      </label>
      <p>{isChecked ? 'Checkbox is checked' : 'Checkbox is unchecked'}</p>
    </div>
  );
};

export default StandardCheckbox;
