// src/components/DraggableBox.js

import React, { forwardRef } from 'react';
import Draggable from 'react-draggable';

const DraggableBox = forwardRef(({ children }, ref) => {
  return (
    <Draggable bounds="parent">
      <div
        ref={ref}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          cursor: 'grab',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </Draggable>
  );
});

export default DraggableBox;
