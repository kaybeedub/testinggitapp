import React from 'react';

function Slider(props) {
  return (
    <div className="Slider">
      <input onChange={props.updateColor} type="range" max="255" />
      <p>{props.color}</p>
    </div>
  );
}

export default Slider;
