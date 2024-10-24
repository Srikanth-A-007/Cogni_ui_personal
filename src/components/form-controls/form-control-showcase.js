import React from 'react';
import LinkButton from './button/link/link-button'; // Update the path to link-button.js

const FormControlShowcase = () => {
  return (
    <div>
      {/* Example Button styled as a link with onClick behavior */}
      <LinkButton 
        label="Go to Google"  // Provide the label for the button
      />
    </div>
  );
};

export default FormControlShowcase;
