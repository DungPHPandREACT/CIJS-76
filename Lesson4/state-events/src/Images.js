import React, { useState } from 'react';
import './image.css';

const Images = () => {
  const listImage = ['tenanh1.png', 'tenanh2.jpeg'];
  const [image, setImage] = useState(4);

  const clickArrowLeft = () => {
    if (image === 1) {
      setImage(6);
    } else {
      setImage(image - 1);
    }
  };
  const clickArrowRight = () => {};

  return (
    <div className="container-image">
      <div className="arrow-left" onClick={clickArrowLeft}>
        &#10094;
      </div>
      <div className="slide">
        <img alt=" " src={`./images/${image}.jpeg`} />
      </div>
      <div className="arrow-right" onClick={clickArrowRight}>
        &#10095;
      </div>
    </div>
  );
};

export default Images;
