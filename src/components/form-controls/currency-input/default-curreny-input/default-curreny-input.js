import React, { useState } from 'react';
import "./default-curreny-input.css"; // Import the CSS for styling

const CurrencyInput = ({ config }) => {
  const [value, setValue] = useState(''); // State to manage input value

  // Function to format the value as currency
  const formatCurrency = (value) => {
    const cleanValue = value.replace(/[^0-9.]/g, ''); // Only allow numbers and decimal
    return cleanValue ? `$${cleanValue}` : '$'; // Always prepend '$'
  };

  // Handle input change to allow only numbers and decimals
  const handleChange = (event) => {
    const inputValue = event.target.value;

    // Allow only numbers and decimal
    const numericValue = inputValue.replace(/[^0-9.]/g, ''); // Keep only numbers and decimal
    setValue(numericValue); // Set cleaned value (numbers only)
  };

  // Clear the input
  const clearInput = () => {
    setValue(''); // Reset value to empty
  };

  return (
    <div className="currency-input-container">
      <label htmlFor="currency" className="currency-label">
        {config?.label || 'Amount'}:
      </label>
      <div className="input-wrapper">
        <input
          id="currency"
          type="text"
          className="currency-input"
          value={formatCurrency(value)} // Display formatted value with dollar symbol
          onChange={handleChange}
          placeholder="Enter amount"
        />
        <button className="clear-button" onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
};

// Provide default values for config if not passed
CurrencyInput.defaultProps = {
  config: {
    label: 'Amount',
    locale: 'en-US',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencySymbol: '$',
  },
};

export default CurrencyInput;

