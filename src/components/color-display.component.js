import React from "react";

const ColorDisplay = ({ rgbValue }) => {
  const { red, blue, green } = rgbValue;
  console.log(red, blue, green);
  const style = {
    height: "200px",
    width: "200px",
    background: `rgb(${red},${blue},${green})`,
  };
  return <div style={style}></div>;
};

export default ColorDisplay;
