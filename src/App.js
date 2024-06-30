// src/App.js

import React, { useState } from 'react';
import DraggableBox from './Components/DraggableBox';

const App = () => {
  const [layers, setLayers] = useState(1);

  const addParent = () => {
    setLayers(layers + 1);
  };

  const renderNestedBoxes = (layer) => {
    if (layer>0) {
    return (
      <DraggableBox title={`Layer ${layer}`}>
          {renderNestedBoxes(layer - 1)}
      </DraggableBox>
    );
  }
  };

  return (
    <div>
      <button onClick={addParent}>Add Parent</button>
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          border: '1px solid black',
          overflow: 'hidden',
          margin: '20px 0',
        }}
      >
        {renderNestedBoxes(layers)}
      </div>
    </div>
  );
};

export default App;
