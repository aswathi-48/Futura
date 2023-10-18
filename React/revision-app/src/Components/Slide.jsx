import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Slide.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './body-image.jpg';
import img2 from './slide2.jpg';
import img3 from './slide3.jpg';



const Slide = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

 return(
<div >
<Carousel >
      <Carousel.Item interval={1000}>
      <img src={img1} className='main' alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={img2} className='main' alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={img3} className='main'alt="First slide" />
      </Carousel.Item>
    </Carousel>
</div>
 );
}
export default Slide