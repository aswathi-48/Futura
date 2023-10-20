import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Loading from './Components/Loading';
import Cart from './Components/Cart';
import CartDetails from './Components/CartDetails';
import Profile from './Components/Profile';

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
    },{
      path:'/profile',
      element:<Profile/>
    }
  ])
  return (
   <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
