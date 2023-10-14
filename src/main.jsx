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
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AuthProvider from './components/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>,

      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
