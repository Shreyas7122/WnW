// src/components/TruckImage.jsx
import React from 'react';
import truckImage from '../assets/truck.svg';

const TruckImage = () => {
  return (
    <img src={truckImage} alt="Delivery Truck" className="truck-image" />
  );
};

export default TruckImage;
