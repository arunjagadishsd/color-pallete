import React from "react";
import { useSelector } from "react-redux";

const ColorDisplay = () => {
  const rgbValue = useSelector((state) => state);
  const { red, blue, green } = rgbValue;
  console.log(rgbValue);
  const style = {
    height: "200px",
    width: "200px",
    background: `rgb(${red},${blue},${green})`,
  };
  return <div style={style}></div>;
};

export default ColorDisplay;
