// src/components/ExampleCarouselImage.js
import React from 'react';
import Image from 'react-bootstrap/Image';
import banner1 from '../images/banner1.jpg';
const ExampleCarouselImage = ({ text = 'Example', ...props }) => {
  return (
    <Image
      {...props}
      className="d-block w-100"
      src={banner1}
      alt={`Slide ${text}`}
    />
  );
};

export default ExampleCarouselImage;
