// C:\Srikanth\React_JS\01basicreact\src\components\standard-Date-Control\DatePickerComponent.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Select a Date:</h2>
      <DatePicker 
        selected={selectedDate} 
        onChange={handleDateChange} 
        dateFormat="MMMM d, yyyy" 
        placeholderText="Select a date" 
        isClearable
      />
      {selectedDate && (
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default DatePickerComponent; // Corrected here
