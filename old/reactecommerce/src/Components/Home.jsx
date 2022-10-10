import React from 'react'
import Footer from './Footer.jsx';
import Slider from './Slider.jsx';
import Product from "../Components/Product.jsx";

const Home = () => {
  return (
    <>
    {/* <div>Home</div> */}
    <Slider />
    <br/>
    <Product />
    <Footer />
    </>
  )
}

export default Home;

/*
<div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 "> 
{products.map((item) => {
  return <Product key={item.id} item={item} />;
})} 
{MobileData.map((item) => {
  return <Product key={item.id} item={item} />;
})}
{LaptopData.map((item) => {
  return <Product key={item.id} item={item} />;
})} 
</div>
*/