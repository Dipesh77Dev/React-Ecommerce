import React from 'react';
// import { products } from "../data";
import MobileData from "../Data/MobileData.jsx";
import MobileCard from './MobileCard.jsx';

const Product1 = () => {
  return (
    <>
     {/* <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 "></div> */}
     
     {/* <div className="min-h-[5vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-2 "></div> */}
       {MobileData.map((item) => {
          return <MobileCard key={item.id} item={item} />;
        })}
    </>
  )
}

export default Product1;