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
          style = {{width: "100%", height: "625px"}}
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
          style = {{width: "100%", height: "625px"}}
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
          style = {{width: "100%", height: "625px"}}
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


/*
Normal Bootstrap
 <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
*/

// src="https://www.gizbot.com/img/2016/01/republic-day-offers-top-20-smartphones-upto-50-discount-mobiles-news-21-1453387754.jpg"
 