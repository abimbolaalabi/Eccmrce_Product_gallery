import React, { useState } from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({item}) => {
   const navigate=useNavigate()
    return (
        <div className='product_wrapper'>
            <div className='img_wrapper'>
                <img src={item.image}/>
            </div>
            <div className='description_container'>
                <div className='title' >
                    <p>Title: {item.title}</p>
                </div>
                {/* <div className='description'>
                    <p>{item.description}</p>
                </div> */}
                <div className='price_category'>
                    <div className='category'>
                     <h5>Category:</h5>
                    <p>{item.category}</p>
                    </div>
                    <p>$ {item.price}</p>
                </div>
                <button onClick= {()=> navigate(`/products/${item.id}`)}>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductCard
