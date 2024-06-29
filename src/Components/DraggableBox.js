import React from 'react';
import Draggable from 'react-draggable';

const DraggableBox = () => {
  return (
    <Draggable>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          cursor: 'grab',
        }}
      />
    </Draggable>
  );
};

export default DraggableBox;
