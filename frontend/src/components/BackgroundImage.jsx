import React from 'react';
import image from '../assets/images/image1';

const BackgroundImageComponent = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("../assets/images/image1")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div style={backgroundImageStyle}>
    </div>
  );
};

export default BackgroundImageComponent;
