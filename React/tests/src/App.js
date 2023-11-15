import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginSignUpP from './Components/LoginSignUpP';
import Signup from './Components/Signup';
import Display from './Components/Display';

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
