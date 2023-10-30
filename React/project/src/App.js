import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Loading from './Components/Loading';
import Cart from './Components/Cart';
import CartDetails from './Components/CartDetails';
import Profile from './Components/Profile';
import { BuyNow } from './Components/BuyNow';
import SignIn from './Components/SignIn';
// import SignUp from './Components/SignUp';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Loading/>
    },{
      path:'main',
      element:<Main/>
    },
    {
      path:'hi',
      element:<Cart/>
    },
    {
      path:'details',
      element:<CartDetails/>
    
    },
    {
      path:'buy',
      element:<BuyNow/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'signin',
      element:<SignIn/>
    }
  
  ])
  return (
   <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
