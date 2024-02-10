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
import { useState } from 'react';
// import PizzaView from './components/Navbar/pizza/PizzaView';
import Dataproviders from './Store/Dataproviders';
import BuyNowHome from './components/Navbar/Home1/BuyNowHome';

function App() {
  
const dataas = useSelector ((state) => state.Userrss.userrData[0])
console.log("data from user",dataas);

if(dataas)
{
  var Token = dataas && dataas.accesstoken
  console.log('tokenn',Token);
}

const router = createBrowserRouter
  ([
    {
      path:'/',
      element: <Root  />  ,
      children:[
        {
          path:'/',
          element:<Home1/>
        },
        {
          path:'/pizza',
          element:<Men/>
        },
        {
          path:'/Burger',
          element:<Women/>
        },
        {
          path:'/VegItem',
          element:<Kids/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
       { path:'/profile',
        element:<Profile/>
      },
     {
      path:"/update",
      element:<Updatepage/>
     },
    //  {
    //   path:"/pizzaview",
    //   element:<PizzaView/>
    //  }
    {
      path:"/homeBuyNow",
      element:<BuyNowHome/>
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
