import React, { useState } from 'react';
import './ColorPicker.css'

function ColorPicker({ colors }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {isOpen && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p>You picked: {selectedColor}</p>
      )}
    </div>
  );
}

export default ColorPicker;
