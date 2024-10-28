import React, { useState } from 'react';
import './check-box-group.css'; // Ensure to create this CSS file

const CheckboxGroup = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 'Intern', label: 'Intern' },
    { id: 'Associate software engineer', label: 'Associate software engineer' },
    { id: 'Software engineer', label: 'Software engineer' },
  ];

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedOptions(prevSelected =>
      prevSelected.includes(value)
        ? prevSelected.filter(option => option !== value) // Uncheck
        : [...prevSelected, value] // Check
    );
  };

  return (
    <div>
      <h2>Checkbox group</h2>
      <h2>Select all the previous designations</h2>
      {options.map(option => (
        <div key={option.id}>
          <label className="custom-checkbox">
            <input
              type="checkbox"
              value={option.id}
              checked={selectedOptions.includes(option.id)}
              onChange={handleCheckboxChange}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="checkmark"></span>
            {option.label}
          </label>
          <br/>
        </div>
      ))}
      <div>
        <h3>Selected Options:</h3>
        <p>{selectedOptions.join(', ') || 'None'}</p>
      </div>
    </div>
  );
};

export default CheckboxGroup;
