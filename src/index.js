import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './Components/Error'
import About from './Components/About';
import Contact from './Components/Contact';
import Body from './Components/Body';
import Cart from './Components/Cart';
import ReastaurantMenu from './Components/ReastaurantMenu';
import { createBrowserRouter , RouterProvider} from "react-router-dom";


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Body />,
    
      }
      ,
      {
        path:"/about",
        element: <About />,
    
      }
      ,{
        path:"/contact",
        element: <Contact />,
    
      },
      {
        path:"/cart",
        element: <Cart />,
    
      },
      {
        path:"/reastaurant/:resId",
        element: <ReastaurantMenu />,
    
      },
    ],
    errorElement :<Error />
    
  },
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
