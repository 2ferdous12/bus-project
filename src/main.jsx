import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './component/route.jsx'
import Home from './homesection/home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
{
  path: "/",
  element: <Home></Home>,
}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className="max-w-[1400px] mx-auto">
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
  </div>

)
