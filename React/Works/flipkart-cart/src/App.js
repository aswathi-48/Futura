import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import CartDisplay from './Components/CartDisplay';
import Home from './Components/Home';
// import Homecard from './Components/Homecard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Project/Navbar';
import Carosaleg from './Project/Carosaleg';


function App() {
  const router=createBrowserRouter([
   
    {
      path:'home',
      element: <Home/>
    },
    {
      path:'cartpage',
      element:<CartDisplay/>
    },
    {
      path:'nav',
      element:<Navbar/>
    },
    {
      path:'slide',
      element:<Carosaleg/>
    }

  ])

  return (
    <div className="App">

     
      {/* <Homecard/> */}

      <RouterProvider router={router}></RouterProvider>

    
      

    </div>
  );
}

export default App;
