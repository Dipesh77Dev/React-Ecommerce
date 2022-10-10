import React from 'react';
// import { products } from "../data";
import MobileData from "../Data/MobileData.jsx";
import MobileCard from './MobileCard.jsx';

const Product1 = () => {
  return (
    <>
       {MobileData.map((item) => {
          return <MobileCard key={item.id} item={item} />;
        })}
    </>
  )
}

export default Product1;