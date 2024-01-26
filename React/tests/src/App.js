import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginSignUpP from './Components/LoginSignUpP';
import Signup from './Components/Signup';
import Display from './Components/Display';
import SingleData from './Components/SingleData';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import Homeone from './Components/Homeone';
import Update from './Components/Update';
import Work from './NewWork/Work';
import { Product } from './Extra/Product';
import { useState } from 'react';


// import Updatedata from './Components/Updatedata';

function App() {

  

  const data=useSelector((state)=>state.users.userInfo[0])
  console.log('**',data);
  if(data){
    var Token=data && data.accesstoken

    console.log("token ?",Token);
  }

  const router=createBrowserRouter([
    {
      path:'/',
      element:Token ? <Homeone/> : <Login/>
    },
    {
      path:'loginsignup',
      element:<LoginSignUpP/>
    },
    {
      path:'signup',
      element:<Signup/>
    },{
      path:'display',
      element:<Display/>
    },
    {
      path:'idselect',
      element:<SingleData/>
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:'update',
      element:<Update/>
    },
    {
      path:'work',
      element:<Work/>
    },
    {
      path:"product",
      element:<Product/>
    }

   
  ])
  return (
    <RouterProvider router={router}></RouterProvider>

  )

    // <div className="App">
    //   <LoginSignUpP/>
    //   <Signup/>
    // </div>
    

  
}

export default App;
