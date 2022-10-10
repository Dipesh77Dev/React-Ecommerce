import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };

  return (
    <>
    {/* <h2>Slider</h2> */}
    {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
    <Carousel variant="dark">
    <Carousel.Item>
        <img
          // className="d-block w-100"s
          src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg"
          alt="First slide"
          style = {{width: "100%", height: "570px"}}
        />
        <Carousel.Caption>
          <h3 style = {{color: "black"}}>First Slide</h3>
          {/* <p style = {{color: "black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block w-100"
          src="https://www.dealsfreak.com/wp-content/uploads/2017/02/Computer-Accessories.jpg"
          alt="Second slide"
          style = {{width: "100%", height: "570px"}}
        />

        <Carousel.Caption>
          <h3 style = {{color: "black"}}>Second Slide </h3>
          {/* <p style = {{color: "black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block w-100"
          src="https://www.gizbot.com/img/2020/12/amazon-upto-30-off-on-laptops-1607314744.jpg"
          alt="Third slide"
          style = {{width: "100%", height: "570px"}}
        />

        <Carousel.Caption>
          <h3 style = {{color: "black"}}>Third Slide</h3>
          {/* <p style = {{color: "black"}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/* render(<ControlledCarousel />); */}
    </>
  )
}

export default Slider;

// src="https://www.gizbot.com/img/2016/01/republic-day-offers-top-20-smartphones-upto-50-discount-mobiles-news-21-1453387754.jpg"
 