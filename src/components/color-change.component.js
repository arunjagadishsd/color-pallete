import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ColorChange = ({ color }) => {
  const dispatch = useDispatch();
  const rgbValue = useSelector((state) => state);
  const changeColor = (value) => {
    const val = { ...rgbValue };
    let colorValue = val[color] + value;
    if (rgbValue[color] < 0) {
      colorValue = 0;
      alert("You can't decrease the value below 0");
    } else if (colorValue > 255) {
      colorValue = 255;
      alert("You can't increase the value below 255");
    } else {
      dispatch({ type: color, payload: 10 });
    }
  };
  return (
    <div>
      <h2>
        {color} {rgbValue[color]}
      </h2>
      <button onClick={() => changeColor(10)}>Increase {color}</button>
      <button onClick={() => changeColor(-10)}>Decrease {color}</button>
    </div>
  );
};

export default ColorChange;
