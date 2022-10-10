import React from 'react';
import LaptopData from "../Data/LaptopData.jsx";
import LaptopCard from './LaptopCard.jsx';

const Product2 = () => {
  return (
    <>
    {LaptopData.map((item) => {
        return <LaptopCard key={item.id} item={item} />;
      })}
      </>
  )
}

export default Product2