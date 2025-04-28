import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from "./pages/homePage/Home"
import Courses from './pages/courses/Courses'
import NotFound from './components/not found/NotFound'
import About from './pages/about/About'
import CourseDetails from './pages/courseDetails/CourseDetails'
import { CartProvider } from './hooks/CartContext'
import SignUp from './pages/signUp/SignUp'
import LogIn from './pages/logIn/LogIn'
import Contact from './pages/contact/Contact'
import Cart from './pages/cart/Cart'

export default function App() {
  const routing = createBrowserRouter([
    {path: "", element: <Layout />, 
      children: [
        {path:"" , element : <Home/>},
        {path:"courses" , element : <Courses/>},
        {path:"courseDetails/:id" , element : <CourseDetails/>},
        {path: "about" , element : <About/>},
        {path: "contact" , element : <Contact/>},
        {path: "cart" , element : <Cart/>},
        {path: "signup" , element : <SignUp/>},
        {path: "login" , element : <LogIn/>},
        {path:"*" , element: <NotFound/>} ,
      ]
    },
  ])
  return (
    <>
    <CartProvider>

    <RouterProvider router={routing}/>
    </CartProvider>

    </>
  )
}
