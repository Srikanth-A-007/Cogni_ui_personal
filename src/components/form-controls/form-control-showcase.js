import React from 'react';
import LinkButton from './button/link/link-button'; // Update the path to link-button.js
import CurrencyInput from './currency-input/default-curreny-input/default-curreny-input';
import StandardCheckbox from './check-box/standard-checkbox/standard-checkbox';
import CheckboxGroup from './check-box/check-box-group/check-box-group';
import CardCheckbox from './check-box/checkbox-cards/checkbox-cards';

const FormControlShowcase = () => {
  return (
    <div>
      {/* Example Button styled as a link with onClick behavior */}
      <LinkButton 
        label="Go to Google"  // Provide the label for the button
      />
      <CurrencyInput/> 

      <StandardCheckbox/>
      <CheckboxGroup/>
      <CardCheckbox/>
      
    </div>
  );
};

export default FormControlShowcase;
