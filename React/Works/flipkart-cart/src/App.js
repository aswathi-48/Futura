import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import CartDisplay from './Components/CartDisplay';
import Home from './Components/Home';
import Homecard from './Components/Homecard';
import UseStatehook from './ReactHooks/UseStatehook';

function App() {
  const router=createBrowserRouter([
    {
      path:'usestate5',
      element:<UseStatehook/>
    }
  ])

  return (
    <div className="App">

      {/* <Home/> */}
      {/* <Homecard/> */}

      <RouterProvider router={router}></RouterProvider>

      {/* <CartDisplay/> */}
      

    </div>
  );
}

export default App;
