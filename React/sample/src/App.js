import { createBrowserRouter,Form,RouterProvider } from "react-router-dom";
// import Form from "./Components/Form";
import { ReactOne } from "./Components/ReactOne";
import UsecallbackOne from "./Components/UsecallbackOne";
import { UseMemohook } from "./Components/Useemohooks";
import UserefForm from "./Components/UserefForm";
import Bootstrapeg from "./Components/Bootstrapeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Redux from "./Components/Redux";
import Useform from "./Components/Useform";
import Cardboot from "./Components/Cardboot";
import Useselector from "./Components/Useselector";


function App() {
  const Router=createBrowserRouter([
    {
      path:'/',
      element:<UseMemohook/>
    },
    {
      path:'/reactmemo',
      element: <ReactOne/>
    },
    {
      path:'form',
      element:<Useform/>
    },
    {
      path:'/formuseRef',
      element:<UserefForm/>
    },
    {
      path:'/useCallback',
      element:<UsecallbackOne/>
    },
    {
      path:'/bootstarp',
      element:<Bootstrapeg/> 
    },
    {
      path:'redux',
      element:<Redux/>,
   
    },
    {
      path:'/cardbootstrap',
      element:<Cardboot/>
    },
    {
      path:'useselector',
      element:<Useselector/>
    }

  ])
  return (
    // <RouterProvider router={Router}></RouterProvider>
    <>

    <Redux/>
    <Useselector/>
    </>

  );
}

export default App;
