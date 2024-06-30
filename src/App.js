import React, { useState, useRef } from 'react';
import DraggableBox from './Components/DraggableBox';

const App = () => {
  const [layers, setLayers] = useState(1);
  const draggableRefs = useRef([]);

  const addParent = () => {
    setLayers(layers + 1);
  };

  const renderNestedBoxes = (layer) => {
    if (layer === 0) {
      return (
        <div
          style={{
            width: 100+layer*10+'px',
            height: 100+layer*10+'px',
            backgroundColor: 'blue',
            position: 'relative',
            cursor: 'grab',
          }}
        />
      );
    }
    return (
      <DraggableBox ref={(el) => (draggableRefs.current[layer] = el)}>
        <div
          style={{
            width:  100+layer*10+'px',
            height:  100+layer*10+'px',
            position: 'relative',
            border: '1px solid black',
          }}
        >
          {renderNestedBoxes(layer - 1)}
        </div>
      </DraggableBox>
    );
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
