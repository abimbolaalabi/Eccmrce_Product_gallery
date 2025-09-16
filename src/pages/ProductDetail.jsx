import React, { useContext, useEffect, useState } from 'react'
import "./ProductDetail.css"
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import { AppContext } from '../utiils/AppContext'
const ProductDetail = () => {
    const BaseUrl = "https://fakestoreapi.com/products"
       const [product,setProduct] = useState([])
       const {productid} = useParams();

      const {addToCart} = useContext(AppContext)
    const getAProduct = async ()=> {
        try {
            const res = await axios.get(`${BaseUrl}/${productid}`)
            setProduct(res.data)
            console.log(res.data)
        } catch (error) {
            console.log("this is the error", error)
        }
    }
    useEffect(()=> {
        getAProduct();
    },[productid])
    return (
        
        <div className="product-detail">
            <div className="product-image">
                <img src={product?.image} alt="Sample Product" />
            </div>


            <div className="product-info">
                <h2 className="product-title">{product?.title}</h2>
                <p className="product-description">
                   {product?.description}
                </p>
                <p className="product-price">${product?.price}</p>
                <button className="add-to-cart" onClick={()=> addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail
