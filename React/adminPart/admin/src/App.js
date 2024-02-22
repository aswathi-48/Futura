import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import User from './components/User';
import Items from './components/Items';
import AddItems from './components/AddItems';
import RegisterFile from './components/Register/RegisterFile';
import LoginFile from './components/Login/LoginFile';
import Displayy from './components/Displayy';
import { useSelector } from 'react-redux';
import UpdateProfile from './components/UpdateProfile';
import DashContent from './components/Dashborad/DashContent';
import ManageItem from './components/ManageItem';
import UpdateItems from './components/UpdateItems';
import OrderDetails from './components/OrderDetails';
import ForgotPassword from './components/Login/ForgotPassword';


function App() {

  const dataa = useSelector((state)=>state.AdminUser.adminData[0])
  console.log('data from redux',dataa);

  if(dataa){
    var Token= dataa && dataa.accesstoken

    console.log("token ?",Token);
  }
  

  const router=createBrowserRouter([
    {
      path:"reg",
      element:<RegisterFile/>
    },
    {
      path:"log",
      element:<LoginFile/>
    },
    {
      path:'dash',
      element:<DashContent/>
    },
 
    
    // {
    //   path:"/display",
    //   element:<Displayy/>
    // },
    {
      path:'/',
      element: Token? <Main/> : <LoginFile/>,
      // element:<Main/>,
      children:[
        {
          path:'/',
          element:<DashContent/>
        },
        {
          path:"/user",
          element:<User/>
        },
        {
          path:"/items",
          element:<Items/>
        },
        {
          path:"/additem",
          element:<AddItems/>
        },
        {
          path:"/display",
          element:<Displayy/>
        },
        {
          path:'/updateProfile',
          element:<UpdateProfile/>
        },{
          path:'/manageitem',
          element:<ManageItem/>
        },{
          path:'updateitems/:id',
          element:<UpdateItems/>
        },
        {
          path:"orderdetails",
          element:<OrderDetails/>
        },
        {
          path:"/forgotpass",
          element:<ForgotPassword/>
        }
       
      ]

    },
   
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
