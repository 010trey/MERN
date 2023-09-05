import React, { useState } from 'react';

function BoxGenerator() {
  const [color, setColor] = useState('');
  const [size, setSize] = useState({ width: '100px', height: '100px' });
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    setSize({ ...size, [name]: `${value}px` });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (color) {
      setBoxes([...boxes, { color, size }]);
      setColor(''); // Clear color input on successful submission
    }
  };

  return (
    <div className="container">
      <h2>Box Generator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={handleColorChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            id="width"
            name="width"
            value={size.width.replace('px', '')}
            onChange={handleSizeChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            name="height"
            value={size.height.replace('px', '')}
            onChange={handleSizeChange}
          />
        </div>
        <button type="submit">Add Box</button>
      </form>

      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: box.color, width: box.size.width, height: box.size.height }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BoxGenerator;
