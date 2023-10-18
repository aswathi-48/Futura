import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Redux1 from './Components/Redux1';
import Useselector1 from './Components/Useselector1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './Components/Slide';



function App() {
  const router=createBrowserRouter([ 
    {
      path:'/',
      element:<Redux1/>
    },
    {
      path:'selector',
      element:<Useselector1/>
    
    },
   { 
    path:'slide',
    element:<Slide/>
  }

   ])


  return (
    <div className="App">
             <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
