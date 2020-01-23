import React, { useState } from 'react';
import Box from './Components/Box';
import Slider from './Components/Slider';

function App() {
  const [rgbValues, setRgbValues] = useState({ red: 0, green: 0, blue: 0 });

  const updateColor = (e, color) => {
      let value = e.target.value;
      setRgbValues()
  };

  return (
    <div className="App">
      <h1>hello world</h1>
      <Box rgbValues={rgbValues} />
      <Slider color="red" updateColor={updateColor}/>
      <Slider color="green" />
      <Slider color="blue"/>
    </div>
  );
}

export default App;
