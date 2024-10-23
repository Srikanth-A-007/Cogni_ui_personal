import React, { useState } from 'react';
import '../components.css'; // Adjust for components.css
import './standard checkbox.css';

function StandardCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="custom-checkbox">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="hidden-checkbox"
        />
        <span className={`custom-checkbox-box ${isChecked ? 'checked' : ''}`}></span>
        Standard Checkbox
      </label>
      <p>{isChecked ? 'Checked' : 'Unchecked'}</p>
    </div>
  );
}

export default StandardCheckbox;
