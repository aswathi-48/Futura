import Nav from "./Components/Nav";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Rout from "./Components/Rout";



function App() {
  const router=createBrowserRouter([
    {
      path:'nav',
      element:<Nav/>
    },
    {
      path:'rout',
      element:<Rout/>
    },
  ])


  return (

    
    <div className="App">
{/*      
     <Nav/> */}


   <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
