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
import { UseReducer } from './components/hooks/UseReducer';
import UseMemoHook from './components/hooks/UseMemoHook';
import ReactMemo from './components/hooks/ReactMemo';
import UseCallbackOne from './components/hooks/UseCallbackOne';

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
    },
    {
      path:'usereducer',
      element:<UseReducer/>
    },
    {
      path:'usememo',
      element:<UseMemoHook/>
    },
    {
      path:'reactmemo',
      element:<ReactMemo/>
    },
    {
      path:'usecallback',
      element:<UseCallbackOne/>
    }
  ])
    return (
    <div className="App">

      <Appcontext.Provider value={'ammuu'}>

    {/* <h1>Show/Hide Password Example</h1> */}
     {/* <PasswordInput/> */}
      <Card/>
      {/* <Changebuttonclr/> */}
      {/* <Test/> */}
      <RouterProvider router={router}></RouterProvider>

      {/* <SignupPersist/> */}
      </Appcontext.Provider>
      
    </div>
  );
}

export default App;
