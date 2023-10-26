import React from 'react'
import img1 from './Assets/body-image.jpg';
import Carousel from 'react-bootstrap/Carousel';
import img2 from './Assets/slide2.jpg';
import img3 from './Assets/slide3.jpg';
import Body from './Body';
// import './Main.css'
import './Home.css';



const Home = ({ values, setActivenav, setProductDetails }) => {
    console.log("gvbhsmvs", values);
    return (
        <div className='home-main'>
            <div>
                <div className='body-img'>
                    <Carousel  >
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
            <div className='gappes'></div>
            <div>
                <Body valuess={values} setActivenav={setActivenav} setProductDetails={setProductDetails} />

            </div>
        </div>
    )
}

export default Home