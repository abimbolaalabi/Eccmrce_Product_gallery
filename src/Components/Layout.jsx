import React from 'react'
import Hero from './Hero/Hero'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
const Layout = () => {
  return (
    <div style={{ width: "100%", height: "100vh", minHeight: ""}}>

      <div>
      <Header/>
      </div>
      <div>
      <Outlet/>
      </div>
      <div style={{marginTop: "20px"}}>
      <Footer/>
      
      </div>
    </div>
  )
}

export default Layout
