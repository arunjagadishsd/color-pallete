import React from "react";

const ColorChange = ({ color, value, onColorChange }) => {
  return (
    <div>
      <h2>
        {color} {value}
      </h2>
      <button
        onClick={() => {
          onColorChange(color, 10);
        }}
      >
        Increase {color}
      </button>
      <button
        onClick={() => {
          onColorChange(color, -10);
        }}
      >
        Decrease {color}
      </button>
    </div>
  );
};

export default ColorChange;
