// C:\Srikanth\React_JS\01basicreact\src\components\standard textbox.js

import React, { useState } from 'react';
import './standard textbox.css';

function StandardTextbox() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text here"
        className="textField" // Apply the CSS class
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default StandardTextbox;
