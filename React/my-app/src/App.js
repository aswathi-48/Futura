import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Sample from "./Sample";
import Sample2 from "./Sample2";
import Sample3 from "./Sample3";
import Sign from "./Sign";
import Signinpage from "./Signinpage";
import Api from "./Components/Api";
import LocalStorage from "./LocalStorage";
import { Appcontext } from "./Context";
import Sampleref from "./Components/Sampleref";
import { UseReduceregx } from "./Components/UseReduceregx";
import UsereduceruseIF from './Components/UsereduceruseIF';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Sample/>
    },
    {
      path:'/sample',
      element:<Sample2/>
    },
    {
      path:'/sample3',
      element:<Sample3/>
    },
    {
      path:'/sign',
      element: <Sign/>
    },
    {
      path:'/usereducerif',
      element:<UsereduceruseIF/>
    }
    

    
  ])
  return (


    
    // <div>
          <Appcontext.Provider value={'aaa'}>
      {/* <Sample/>
      <Sample2/>
      <Sample3/>
      <Sign/>
      <Signinpage/> */}
      {/* <Sampleref/> */}
      
      {/* <Style/> */}
      {/* <Api/> */}
    
      {/* <LocalStorage/> */}
      {/* <UseReduceregx/>
       */}
       <RouterProvider router={router}></RouterProvider>
      
      </Appcontext.Provider>


    // </div>

  );
}

export default App;
