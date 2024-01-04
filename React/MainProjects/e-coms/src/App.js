import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/Reg-form/Register';
import Login from './components/Login-Form/Login';
import Root from './components/Root/Root';
import Men from './components/Navbar/men/Men';
import Women from './components/Navbar/Women/Women';
import Home1 from './components/Navbar/Home1/Home1';
import Kids from './components/Navbar/Kids/Kids';
import { Cart } from './components/Navbar/CartPage/Cart';
import Profile from './components/Navbar/ProfilePage/Profile';

function App() {
  const router = createBrowserRouter


  ([


    {
      path:'/',
      element:<Root/>,
      children:[
        {
          path:'/',
          element:<Home1/>
        },
        {
          path:'/men',
          element:<Men/>
        },
        {
          path:'/women',
          element:<Women/>
        },
        {
          path:'/kids',
          element:<Kids/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
       { path:'/profile',
        element:<Profile/>
      }

]
},
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
  
    </div>
  );
}

export default App;
