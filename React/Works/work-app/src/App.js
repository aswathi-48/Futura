import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import Card from './components/Card';
import Changebuttonclr from './components/Changebuttonclr';
import SignupPersist from './components/SignupPersist';
import Test from './components/Test';
import Signuppage from './components/Signuppage';
import PasswordInput from './components/PasswordInput';
import UseStatehook from './components/hooks/UseStatehook';
import UseEffecthook from './components/hooks/UseEffecthook';
import { Appcontext } from './components/hooks/Context';
import UseContexts from './components/hooks/UseContexts';
import UseRefHook from './components/hooks/UseRefHook';

function App() {
  const router=createBrowserRouter([

    {
      path:'signuppersist',
      element:<Signuppage/>
    },
    {
      path:'pass',
      element:<PasswordInput/>
    },
    {
      path:'usestate',
      element:<UseStatehook/>
    },
    {
      path:'useeffect',
      element:<UseEffecthook/>
    },
    {
      path:'context',
      element:<UseContexts/>
    },
    {
      path:'useref',
      element:<UseRefHook/>
    }
  ])
    return (
    <div className="App">

      <Appcontext.Provider value={'ammuu'}>

    {/* <h1>Show/Hide Password Example</h1> */}
     {/* <PasswordInput/> */}
      {/* <Card/> */}
      {/* <Changebuttonclr/> */}
      {/* <Test/> */}
      <RouterProvider router={router}></RouterProvider>

      {/* <SignupPersist/> */}
      </Appcontext.Provider>
      
    </div>
  );
}

export default App;
