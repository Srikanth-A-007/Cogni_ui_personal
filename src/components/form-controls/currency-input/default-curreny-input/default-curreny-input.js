import React, { useState } from "react";
import "./default-curreny-input.css"; // Import the CSS file

const CurrencyInput = () => {
  const [value, setValue] = useState("");

  // Function to handle input change
  const handleChange = (event) => {
    const inputValue = event.target.value;
    
    // Remove non-numeric characters (except decimal point)
    const onlyNums = inputValue.replace(/[^0-9.]/g, "");
    
    // Format the number as currency
    const formattedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(onlyNums ? parseFloat(onlyNums) : 0);
    
    // Update the state with formatted value
    setValue(formattedValue);
  };

  return (
    <div className="currency-input-container">
      <label htmlFor="currency" className="currency-label">Amount: </label>
      <input
        id="currency"
        type="text"
        className="currency-input"
        value={value}
        onChange={handleChange}
        placeholder="$0.00"
      />
    </div>
  );
};

export default CurrencyInput;
