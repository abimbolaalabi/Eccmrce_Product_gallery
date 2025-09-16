import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Cart from '../pages/Cart'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/> 
            <Route path="products/:productid" element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
