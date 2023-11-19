import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginSignUpP from './Components/LoginSignUpP';
import Signup from './Components/Signup';
import Display from './Components/Display';
import SingleData from './Components/SingleData';
import Login from './Components/Login';
// import Updatedata from './Components/Updatedata';

function App() {

  const router=createBrowserRouter([
    // {
    //   path:'/',
    //   element:
    // },
    {
      path:'loginsignup',
      element:<LoginSignUpP/>
    },
    {
      path:'signup',
      element:<Signup/>
    },{
      path:'display',
      element:<Display/>
    },
    {
      path:'idselect',
      element:<SingleData/>
    },
    {
      path:"login",
      element:<Login/>
    }

   
  ])
  return (
    <RouterProvider router={router}></RouterProvider>

    // <div className="App">
    //   <LoginSignUpP/>
    //   <Signup/>
    // </div>
  );
}

export default App;
