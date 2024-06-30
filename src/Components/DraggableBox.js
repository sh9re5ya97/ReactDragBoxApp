import React from 'react';
import Draggable from 'react-draggable';

const DraggableBox = ({ title, children, containerRef }) => {
  const handleDrag = (e) => {
    e.stopPropagation(); // Prevent event propagation to parent draggable elements
  };

  return (
    <Draggable bounds="parent" handle=".handle" onDrag={handleDrag}>
      <div
        style={{
          width: '80%',
          height: '80%',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          position: 'absolute',
          border: '1px solid black',
        }}
      >
        <div
          className="handle"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '5px',
            cursor: 'grab',
            textAlign: 'center',
          }}
        >
          {title}
        </div>
        <div
          ref={containerRef}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableBox;
