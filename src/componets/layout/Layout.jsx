import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../header/Header'

function Layout() {
  return (
    <div className='h-screen w-screen'>
      <div className='div fixed w-full
      z-100'>
        <Header />
      </div>
    <hr />
    <div className='h-full mt-10 z-0'>
      <Outlet />
    </div>
    <Footer />
    </div>
  )
}

export default Layout