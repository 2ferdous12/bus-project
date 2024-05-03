import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './component/route.jsx'
import Home from './homesection/home.jsx'
import DetailsService from './homesection/detailsService.jsx'
import Detailsproduct from './homesection/detailsproduct.jsx'
import Serviceses from './servicesection/serviceses.jsx'
import Contact from './servicesection/contact.jsx'
import Moreinfo from './homesection/moreinfo.jsx'


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
},
{
  path: "/detailsService/:id",
  element: <DetailsService></DetailsService>,
},

{
  path: "/detailsproduct/:id",
  element: <Detailsproduct></Detailsproduct>,
},

{
  path: "/serviceses",
  element: <Serviceses></Serviceses>
},
{
  path: "/contact",
  element: <Contact></Contact>
},
{
  path: "/moreinfo",
  element: <Moreinfo></Moreinfo>
},


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
