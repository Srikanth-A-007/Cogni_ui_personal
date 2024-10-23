// C:\Srikanth\React_JS_updated\React\01basicreact\src\components\standard-radio-button.js
import React from 'react';

function StandardRadioButton() {
  return (
    <div>
      <input type="radio" id="option1" name="radioGroup" value="Option 1" />
      <label htmlFor="option1">Option 1</label>

      <input type="radio" id="option2" name="radioGroup" value="Option 2" />
      <label htmlFor="option2">Option 2</label>

      <input type="radio" id="option3" name="radioGroup" value="Option 3" />
      <label htmlFor="option3">Option 3</label>
    </div>
  );
}

export default StandardRadioButton;
