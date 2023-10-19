import React from 'react'
import img1 from './Assets/body-image.jpg';
import Carousel from 'react-bootstrap/Carousel';
import img2 from './Assets/slide2.jpg';
import img3 from './Assets/slide3.jpg';
import Body from './Body';


const Home = (values) => {
    console.log("gvbhsmvs"+values);
  return (
    <div>
        <div>
                <div className='body-img'>
                    <Carousel >
                        <Carousel.Item interval={1000}>
                            <img src={img1} className='mains' alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src={img2} className='mains' alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src={img3} className='mains' alt="First slide" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div>
                <Body valuess={values}/>
                            
            </div>
    </div>
  )
}

export default Home