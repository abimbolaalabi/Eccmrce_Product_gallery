import React from 'react'
import { AppContext } from './AppContext'
import { useState } from 'react'

const AppProvider = ({children}) => {
    const [cart,setCart] = useState([])
   
    const addToCart = (products) =>{
       setCart((e)=>{
        const existCart = e.find((item)=> item.id === products.id);
        if(existCart){
           return e.map((item)=>
          item.id === products.id ? {...item, quantity: item.quantity + 1} :
           item
        );
        }
         return [...e, {...products, quantity: 1}]
       } 
      
      )
    }

   

  return (
    <div>
      <AppContext.Provider value={{cart, addToCart}}>
       {children}
      </AppContext.Provider>
    </div>
  )
}

export default AppProvider
