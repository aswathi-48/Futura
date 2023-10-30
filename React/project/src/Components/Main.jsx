import React, { useEffect, useState } from 'react'
import logo from './Assets/Nav-Logo.png'
import img from './Assets/body-image.jpg'
import { BiSearch } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSolidCart } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { apiData } from './Api/MyApi';
import './Main.css'
import Body from './Body';
import Home from './Home';
import Cart from './Cart';
import CartDetails from './CartDetails';
import { mycartPage } from '../Redux/heystore';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SeachResult from './SeachResult';
import TopSellers from './TopSellers';


const Main = () => {


    const [state, setState] = useState([])
    const [filterdState, setFilteredState] = useState([])
    const [activeFilter, setActiveFilter] = useState('All')
    const [activeNav, setActiveNav] = useState(0)
    const [productDetails, setProductDetails] = useState(null)
    const[searchQuery,setSearchQuery] =useState('')
    const [seachResult,setSearchResults]=useState([])
    useEffect(() => {
        async function api() {
            try {
                setState(apiData);
                setFilteredState(apiData)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        api()
    }, [])

    const handleClick = (filter) => {
        setActiveFilter(filter);
        if (filter == 'All') {
            setFilteredState(state);
        } else {
            const filtered = state.filter(item => item.type.toLowerCase() === filter.toLowerCase());
            setFilteredState(filtered);
        }

    }

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };

    const handleNavClick = (index) => {
        setActiveNav(index)
    }

    const cartItem = useSelector((state) => state.myApi.mycartInfo)


    const handleSearch = () => {
        // Ensure that the search query is not empty or consists only of spaces
        if (searchQuery.trim() !== '') {
          // Convert the search query to lowercase for case-insensitive search
          const lowerCaseQuery = searchQuery.toLowerCase();
      
          // Use filter to find items that match the search query
          const results = apiData.filter((item) => {
            const itemTitle = item.title.toLowerCase();
            const itemCategory = item.category.toLowerCase();
            const itemType = item.type.toLowerCase();
      
            return itemTitle.includes(lowerCaseQuery) || itemCategory.includes(lowerCaseQuery) || itemType.includes(lowerCaseQuery);
          });
      
          // Update the UI with the search results
          setSearchResults(results);
      
          // Set the active navigation to the search results page (assuming 7 represents it)
          setActiveNav(3);
        }
      };

    return (
        <div className='main-div'>
            <link rel="stylesheet"href="https://fonts.googleapis.com/css2?family=Rubik:wght@400&amp;display=swap"  data-tag="font"/>
            <header>
                <div className='nav-bar'>
                    <div className='nav-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='nav-search'>
                        <div className='nav-search-input'>
                            <input value={searchQuery} type="text" placeholder='search' onChange={(e)=>setSearchQuery(e.target.value)}/>
                            <BiSearch className='nav-search-icon' onClick={handleSearch}/>
                        </div>
                    </div>
                    <div className='nav-cart'>
                        <button className='home-btn' onClick={() => handleNavClick(0)}><AiFillHome className='hom-icon' /> </button>
                        <div className='profile-btn'>
                            <button className='nav-cart-btn1'><BsFillPersonFill className='profile-icon' /> MySpace</button>
                            <div className='drop'>
                                <div className='drop-bar'>
                                    {/* <div>
                                        <a href="">New Coustomer?</a>
                                    </div> */}
                                    <div>
                                        <a href="/signin">SignIn</a>
                                    </div>
                                </div>
                                <Link to={'/profile'}>
                                    <a href="1">Personal</a>
                                </Link>
                                {/* <a href="3">Help Centre</a>
                                <a href="4">Settings</a> */}
                                <a href="6">LogOut</a>
                            </div>
                        </div>
                        <button className='nav-cart-btn2' onClick={() => handleNavClick(1)}><BiSolidCart className='cart-icon' /> Cart <span className='nav-span'>{cartItem.length}</span></button>
                    </div>
                </div>
            </header>
            <section>
                <div className="dropdown">
                    <button onClick={() => handleClick('All')} className={`dropbtn ${activeFilter === 'All' ? 'active' : ''}`}>Our Collections</button>

                </div>
                <div className="dropdown">
                    <button className="dropbtn">Dress</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleClick('Men')} className={`dropdown-menu1 ${activeFilter === 'Men' ? 'active' : ''}`}>Men</a>
                        <a onClick={() => handleClick('Ladies')} className={`dropdown-menu2 ${activeFilter === 'Ladies' ? 'active' : ''}`} >Ladies</a>
                        <a onClick={() => handleClick('Kids')} className={`dropdown-menu3 ${activeFilter === 'Kids' ? 'active' : ''}`}>Kids</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Electronics</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleClick('Mobile')} className={`dropdown-menu1 ${activeFilter === 'Mobile' ? 'active' : ''}`}>Mobile</a>
                        <a onClick={() => handleClick('Camera')} className={`dropdown-menu2 ${activeFilter === 'Camera' ? 'active' : ''}`}>Camera</a>
                        <a onClick={() => handleClick('Laptop Accessories')} className={`dropdown-menu3 ${activeFilter === 'Laptop Accessories' ? 'active' : ''}`}>Laptop Accessories</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Beauty&Health</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleClick('Makeup')} className={`dropdown-menu1 ${activeFilter === 'Makeup' ? 'active' : ''}`}>Makeup</a>
                        <a onClick={() => handleClick('Wellness')} className={`dropdown-menu2 ${activeFilter === 'Wellness' ? 'active' : ''}`}>Wellness</a>
                        <a onClick={() => handleClick('Skincare')} className={`dropdown-menu3 ${activeFilter === 'Skincare' ? 'active' : ''}`}>Skincare </a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Jewelleri</button>
                    <div className="dropdown-content">
                        <a onClick={() => handleClick('Chain')} className={`dropdown-menu1 ${activeFilter === 'Chain' ? 'active' : ''}`}>Chain</a>
                        <a onClick={() => handleClick('Earrings')} className={`dropdown-menu2 ${activeFilter === 'Earrings' ? 'active' : ''}`}>Earrings</a>
                        <a onClick={() => handleClick('Anklet')} className={`dropdown-menu3 ${activeFilter === 'Anklet' ? 'active' : ''}`}>Anklet </a>
                    </div>

                </div>

                <div className="dropdown">
                    <button className="dropbtn" onClick={() => handleNavClick(4)}>Top Sellers</button>

                </div>
                {/* <button onClick={() => handleClick('Jewelleri')} className={`dropbtn ${activeFilter === 'Jewelleri' ? 'active' : ''}`}>Jewelleri</button> */}


            </section>

            <div>

                {activeNav === 0 && <Home values={filterdState} setActivenav={setActiveNav} setProductDetails={setProductDetails} />}
                {activeNav === 1 && <Cart values={filterdState} />}
                {activeNav === 2 && <CartDetails productDetails={productDetails} />}
                {activeNav === 3 && <SeachResult searchQuery={searchQuery} seachResult={seachResult} setProductDetails={setProductDetails} setActivenav={setActiveNav}/> }
                {activeNav === 4 && <TopSellers itemss={state}/>}
            </div>
        </div>
    )
}


export default Main