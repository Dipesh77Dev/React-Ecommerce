import React from 'react';
import Slider from "./Slider.jsx";
import Slider2 from "./Slider2.jsx";

const Home = () => {
  
  const slides = [
    { url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg", title: "SmartPhones"},
    { url: "https://www.dealsfreak.com/wp-content/uploads/2017/02/Computer-Accessories.jpg", title: "PC"},
    { url: "https://www.gizbot.com/img/2020/12/amazon-upto-30-off-on-laptops-1607314744.jpg", title: "Laptop"}
  ];
  
  const containerStyles = {
    width: "100%",
    height: "600px",
    // margin: "0 auto",
  };

  return (
    <>
    <Slider />
    {/* <div style={containerStyles}>
        <Slider2 slides={slides} />
    </div> */}
    </>
  )
}

export default Home;