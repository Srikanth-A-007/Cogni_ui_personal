// C:\Srikanth\React_JS\01basicreact\src\components\standard-tile\standard-tile.js
import React from 'react';

function StandardTile({ imageUrl, title }) { // Change standardTile to StandardTile
  return (
    <div className="tile">
      <img src={imageUrl} alt={title} className="tile-image" />
      <h3 className="tile-title">{title}</h3>
    </div>
  );
}

export default StandardTile; // Also make sure the export matches the name
