// src/components/DraggableBox.js

import React, { useRef, useState } from 'react';

const DraggableBox = ({ title, children }) => {
  const boxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={boxRef}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        border: '1px solid black',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="handle"
        onMouseDown={handleMouseDown}
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
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default DraggableBox;
