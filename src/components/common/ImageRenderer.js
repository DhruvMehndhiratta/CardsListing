import React from 'react';

const ImageRenderer = (key) => {
  if (key == 1 || key % 3 === 1) {
    return <img src={require('../../assets/1.png')} />
  } else if (key == 2 || key % 3 == 2) {
    return <img src={require('../../assets/2.png')} />
  } else {
    return <img src={require('../../assets/3.png')} />
  }
};

export default ImageRenderer;