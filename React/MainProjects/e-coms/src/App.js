import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter,Navigate } from 'react-router-dom';
import Register from './components/Reg-form/Register';
import Login from './components/Login-Form/Login';
import Root from './components/Root/Root';
import Men from './components/Navbar/pizza/Pizza';
import Women from './components/Navbar/burger/Burger';
import Home1 from './components/Navbar/Home1/Home1';
import Kids from './components/Navbar/Vegitem/VegItem';
import { Cart } from './components/Navbar/CartPage/Cart';
import Profile from './components/Navbar/ProfilePage/Profile';
import { useSelector } from 'react-redux';
import Updatepage from './components/Navbar/ProfilePage/update/Updatepage';
import { useEffect, useState } from 'react';
// import PizzaView from './components/Navbar/pizza/PizzaView';
import Dataproviders from './Store/Dataproviders';
import BuyNowHome from './components/Navbar/Home1/BuyNowHome';
import BuyHomDetails from './components/Navbar/Home1/BuyHomDetails';
import { BuyHomUpdate } from './components/Navbar/Home1/BuyHomUpdate';
import { ProceedPage } from './components/Navbar/Home1/ProceedPage';
// import CheckOutPage from './components/Navbar/Home1/CheckOutPage';
import ForgotPass from './components/Login-Form/ForgotPass';
import OtpPage from './components/Login-Form/OtpPage';
import ResetEmail from './components/Login-Form/ResetEmail';

function App() {
  const[state,setState]=useState()
const dataas = useSelector ((state) => state.Userrss.userrData[0])
console.log("data from user",dataas);
useEffect(()=>{
  Token?setState(true):setState(false)
},[])
if(dataas)
{
  var Token = dataas && dataas.accesstoken
  console.log('tokenn',Token);
}
console.log(state);
const router = createBrowserRouter
  ([
    {
      path:'/',
      element:  <Root  />  ,
      children:[
        {
          path:'/',
          element:!Token?<Home1 state={state}/>:<Home1 state={state}/>
        },
        {
          path:'/pizza',
          element:!Token?<Men />:<Men state={state}/>
        },
        {
          path:'/Burger',
          element:!Token?<Women/>:<Women state={state}/>
        },
        {
          path:'/VegItem',
          element:!Token?<Kids/>:<Kids state={state}/>
        },
        {
          path:'/cart',
          element:Token?<Cart/>:<Home1/>
        },
       { path:'/profile',
        element:Token?<Profile/>:<Home1/>
      },
     {
      path:"/update",
      element:Token?<Updatepage/>:<Home1/>
     },
    //  {
    //   path:"/pizzaview",
    //   element:<PizzaView/>
    //  }
    {
      path:"/homeBuyNow/:id",
      element:<BuyNowHome/>
    },
    {
      path:'/buyhomedetails/:id',
      element:<BuyHomDetails/>
    },
    {
      path:"buyhomeupdate/:id",
      element:<BuyHomUpdate/>
    },
    // {
    //   path:"proceed",
    //   element:<ProceedPage/>
    // }
     {
      path:"/forgotpass",
      element:<ForgotPass/>
     },
{     path:'/verify',
element:<OtpPage/>
},{
  path:'/changePage',
  element:<ResetEmail/>
}
]
},
  {
        path:'/register',
        element:<Register/>
      }, 
   {
    path:'/login',
    element:  Token? <Navigate to="/" /> : <Login/>
   }
   
     
      
  ])


  

  return (
    <div className="App">
     <Dataproviders>
      <RouterProvider router={router}></RouterProvider>
      </Dataproviders>
      
  
    </div>
  );
}

export default App;
