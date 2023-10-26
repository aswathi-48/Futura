import Nav from "./Components/Nav";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';



function App() {
  const router=createBrowserRouter([
    {
      path:'nav',
      element:<Nav/>
    }
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
