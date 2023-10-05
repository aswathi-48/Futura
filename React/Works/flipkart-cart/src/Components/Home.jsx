import React, { useState } from 'react'
import './Home.css'
import { BiCart } from "react-icons/bi";
import Homecard from './Homecard';
import { useDispatch } from 'react-redux';
import { cartpage } from '../Redux/homepage';
import CartDisplay from './CartDisplay';

const Home = () => {
    const [Count, setCartCount] = useState(0);

    const dispatch=useDispatch();

    const CartCount = (user) => {
        console.log("adding to cart");
        setCartCount(Count + 1)
        console.log(`user id ${user.id}`);

        dispatch(cartpage(user))
    }
    return (
        <div>
            <div className='navbar'>
                <div className='main'>
                    <ul>
                        <img src="https://apply-etsa.org/assets/images/adad-1.png" alt="" />
                        <li style={{ fontSize: 30, color: 'white' }} >APPLY ETSA</li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
                        <li>Find the location</li>
                        <li style={{ marginLeft: 110, fontSize: 18 }}>Items:{Count}</li>
                        <div className='aa'>
                            <BiCart />
                        </div>
                    </ul>
                </div>

            </div>
            <div>
                <Homecard CartCount={CartCount} />
                

            </div>
        </div>
    )
}

export default Home