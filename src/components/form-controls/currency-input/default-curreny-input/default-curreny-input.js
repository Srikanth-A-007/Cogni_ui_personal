import React, { useState } from 'react';
import "./default-curreny-input.css"; // Import the CSS for styling

const CurrencyInput = ({ config }) => {
  const [value, setValue] = useState(''); // State to manage input value

  // Function to format the value with commas and dollar sign
  const formatCurrency = (value) => {
    // Remove non-numeric characters except the decimal point
    const cleanValue = value.replace(/[^0-9.]/g, '');

    if (!cleanValue) return '$'; // If value is empty, return only the dollar symbol

    // Split the value into the integer and decimal parts
    const [integerPart, decimalPart] = cleanValue.split('.');

    // Format the integer part with commas
    const formattedInteger = new Intl.NumberFormat().format(integerPart);

    // Combine the integer part with the decimal part (if any)
    return decimalPart !== undefined
      ? `$${formattedInteger}.${decimalPart}`
      : `$${formattedInteger}`;
  };

  // Handle input change to allow only numbers and decimals
  const handleChange = (event) => {
    const inputValue = event.target.value;

    // Remove non-numeric characters except the decimal point
    const numericValue = inputValue.replace(/[^0-9.]/g, '');

    // Set the cleaned numeric value
    setValue(numericValue);
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
          value={formatCurrency(value)} // Display formatted value with commas and dollar symbol
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
