import React, { useState, useRef } from 'react';
import DraggableBox from './Components/DraggableBox';

const App = () => {
  const [layers, setLayers] = useState(1);
  const containerRefs = useRef([React.createRef()]); // Initialize with the first container ref

  const addParent = () => {
    setLayers(layers + 1);
    containerRefs.current.push(React.createRef()); // Add a new ref for each new layer
  };

  const renderNestedBoxes = (layer) => {
    if (layer > 0) {
      return (
        <DraggableBox
          key={layer}
          title={`Layer ${layer}`}
          containerRef={containerRefs.current[layer - 1]}
        >
          
            {renderNestedBoxes(layer - 1)}
        </DraggableBox>
      );
    }
    return null;
  };

  return (
    <div>
      <button onClick={addParent}>Add Parent</button>
      <div
        ref={containerRefs.current[0]}
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
