import React from 'react';
import LinkButton from './button/link/link-button'; // Update the path to link-button.js
import StandardCheckbox from './check-box/standard-checkbox/standard-checkbox';
import CheckboxGroup from './check-box/check-box-group/check-box-group';

const FormControlShowcase = () => {
  return (
    <div>
      {/* Example Button styled as a link with onClick behavior */}
      <LinkButton 
        label="Go to Google"  // Provide the label for the button
      />
      <StandardCheckbox/>
      <CheckboxGroup/>
      
    </div>
  );
};

export default FormControlShowcase;
