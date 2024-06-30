// src/App.js

import React, { useState,useRef } from 'react';
import DraggableBox from './Components/DraggableBox';

const App = () => {
  const [layers, setLayers] = useState(1);

  const appContainerRef = useRef(null);
  const containerRefs = useRef([appContainerRef]);

  const addParent = () => {
    setLayers(layers + 1);
    containerRefs.current.push(React.createRef())
  };

  const renderNestedBoxes = (layer) => {
    if (layer>0) {
    
    return (
      <DraggableBox  
        key={layer}
        title={`Layer ${layer}`}
        initialPosition={{ x: 50, y: 50 }}
        containerRef={containerRefs.current[layer]}>
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
