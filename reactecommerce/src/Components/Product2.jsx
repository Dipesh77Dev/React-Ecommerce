import React from 'react';
import LaptopData from "../Data/LaptopData.jsx";
import LaptopCard from './LaptopCard.jsx';

const Product2 = () => {
  return (
    <>
     <div className="min-h-[5vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 "></div>
    {LaptopData.map((item) => {
        return <LaptopCard key={item.id} item={item} />;
      })}
      </>
  )
}

export default Product2