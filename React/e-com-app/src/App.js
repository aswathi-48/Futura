import Nav from "./Components/Nav";
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Rout from "./Components/Rout";
import Home from "./Components/Home";
import Footer from "./Components/Footer";



function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:'nav',
  //     element:<Nav/>
  //   },
  //   {
  //     path:'rout',
  //     element:<Rout/>
  //   },
  //   {
  //     path:'home',
  //     element:<Home/>
  //   },
  //   {
  //     path:'footer',
  //     element:<Footer/>
  //   }
  // ])


  return (

    
    <div className="App">
     <BrowserRouter>
     <Nav/>
    <Rout/>
    {/* <Home/> */}
    <Footer/>
    </BrowserRouter>

   {/* <RouterProvider router={router}></RouterProvider> */}

    </div>
  );
}

export default App;
