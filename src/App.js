import React, { useState } from 'react';
import Box from './Components/Box';
import Slider from './Components/Slider';

function App() {
  const [rgbValues, setRgbValues] = useState({ red: 0, green: 0, blue: 0 });

  const updateColor = () => {};

  return (
    <div className="App">
      <h1>hello world</h1>
      <Box rgbValues={rgbValues} />
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
}

export default App;
