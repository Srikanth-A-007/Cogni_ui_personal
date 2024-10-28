import React from 'react';
import LinkButton from './button/link/link-button'; // Update the path to link-button.js
import CurrencyInput from './currency-input/default-curreny-input/default-curreny-input';
import StandardCheckbox from './check-box/standard-checkbox/standard-checkbox';
import CheckboxGroup from './check-box/check-box-group/check-box-group';
import PrimaryButton from './button/primary/primary-button';
import SecondaryButton from './button/Secondary/secondary-button';
import SimpleButton from './button/simple/simple-button';
import TextButton from './button/text/text-button';
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
      <PrimaryButton/>
      <SecondaryButton/>
      <SimpleButton/>
      <TextButton/>
      <CardCheckbox/>
      
    </div>
  );
};

export default FormControlShowcase;
