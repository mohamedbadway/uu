import React, { useState } from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import ToTop from '../../reusablecomponents/ToTop'
import Cursor from '../cursor/Cursor'

export default function Layout() {


  return (
    <>
      <Header />
      <ToTop/>
      <Cursor />
      <Outlet/>
      <Footer/>
    </>
  )
}
