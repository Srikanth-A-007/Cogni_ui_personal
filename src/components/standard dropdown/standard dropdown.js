import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using axios to fetch API data

// Corrected the component name to start with uppercase
function StandardDropdown() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch data from an open-source API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setOptions(response.data);  // Set the fetched data to the options
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);  // Set the selected option
  };

  return (
    <div>
      <label htmlFor="dropdown">Select a user:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.id} value={option.name}>{option.name}</option>
        ))}
      </select>

      {/* Display the selected option */}
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
}

export default StandardDropdown;
