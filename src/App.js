import React, { useState } from "react";
import "./App.css";
import ColorChange from "./components/color-change.component";
import ColorDisplay from "./components/color-display.component";

function App() {
  const [rgbValue, setRgbValue] = useState({ red: 0, blue: 0, green: 0 });
  const onColorChange = (key, value) => {
    console.log(value);
    let colorValue = rgbValue[key] + value;
    if (colorValue < 0) {
      colorValue = 0;
      alert("You can't decrease the value below 0");
    } else if (colorValue > 255) {
      colorValue = 255;
      alert("You can't increase the value below 255");
    }
    setRgbValue({ ...rgbValue, [key]: colorValue });
  };
  return (
    <div className="App">
      <ColorChange
        color="red"
        value={rgbValue.red}
        onColorChange={onColorChange}
      />
      <ColorChange
        color="blue"
        value={rgbValue.blue}
        onColorChange={onColorChange}
      />
      <ColorChange
        color="green"
        value={rgbValue.green}
        onColorChange={onColorChange}
      />
      <ColorDisplay rgbValue={rgbValue} />
    </div>
  );
}

export default App;
