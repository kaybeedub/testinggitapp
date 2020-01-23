import React from 'react';

function Box(props) {
  let rgbValues = props.rgbValues;

  const divStyle = {
    backgroundColor: `rgb(${rgbValues.red}, ${rgbValues.green}, ${rgbValues.blue}`,
    height: 50,
    width: 50,
  };

  return <div className="Box" style={divStyle}></div>;
}

export default Box;
