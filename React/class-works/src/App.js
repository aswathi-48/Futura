
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import { useSelector } from 'react-redux';
import { Profile } from './Components/Profile';

function App() {
 const data=useSelector((state)=>state.userss.userValue[0])
 console.log("*",data);

 if(data){
  var Token = data && data.accesstoken
  console.log('token?',Token);
  var id=data && data._id
  console.log('gfffgvcdsertgvcx',id);
 }
 
  const router=createBrowserRouter([
    {
      path:'/',
      element:Token ? <Home/> : <Login/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:"/home",
      element:<Home/> 
    }

  ])
  return (
   <RouterProvider router={router}></RouterProvider>
    // <div className="App">
      
    // </div>
  );
}

export default App;
