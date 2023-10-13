import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import AddCoffee from './components/AddCoffee/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>,

      },
      {
        path: '/updateCoffee',
        element: <UpdateCoffee></UpdateCoffee>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
