// C:\Srikanth\React_JS\01basicreact\src\App.js
import React from 'react';
import StandardButton from './components/standard_button/standard button';
import StandardTextbox from './components/standard textbox/standard textbox';
import StandardDropdown from './components/standard dropdown/standard dropdown';
import StandardTile from './components/standard-tile/standard-tile';
import StandardRadioButton from './components/standard-radio-button/standard-radio-button'; // Change the import name to StandardRadioButton
import Showcase from './showcase';
//import CurrencyInput from './components/form-controls/currency-input/default-curreny-input/default-curreny-input';

function App() {
  return (
    <div className="app-container">
      <h1>Hello srikanth</h1>
      <StandardButton />
      <StandardTextbox />
      <StandardDropdown />   
      <StandardRadioButton /> {/* Updated component usage */}
      <Showcase /> {/* Correctly capitalize the component name */}
      
      <StandardRadioButton /> {/* Updated component usage */}     
     {/* <CurrencyInput /> */}
      <div className="tile-container">
        <StandardTile 
          imageUrl="https://via.placeholder.com/200" 
          title="Tile 1" 
        />
        <StandardTile 
          imageUrl="https://via.placeholder.com/200" 
          title="Tile 2" 
        />
        <StandardTile 
          imageUrl="https://via.placeholder.com/200" 
          title="Tile 3" 
        />
      </div>
    </div>
  );
}

export default App;
