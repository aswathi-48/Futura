import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Redux1 from './Components/Redux1';
import Useselector1 from './Components/Useselector1';



function App() {
  const router=createBrowserRouter([ 
    {
      path:'/',
      element:<Redux1/>
    },
    {
      path:'selector',
      element:<Useselector1/>
    
    }

   ])


  return (
    <div className="App">
             <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
