import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './ProductCard/ProductCard'
import Header from "./Header/Header"
import Hero from './Hero/Hero'
function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProduct(data)
        console.log(data.products)

      } catch (error) {
        console.log("this is to check the err", error)
      }
    }

    getProducts()
  }, [])
  return (
    <div>
      <Header/>
      <Hero/>
      <div style={{width:"100%", height:"4rem", color: "black", display: "flex"}}>
        <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "30px",
          margin: " 0px 100px "
        }}>Products</h1>
      </div>
      <div style={{ display: " flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", marginTop: "20px" }}>
        {product.map((ele, idx) => <ProductCard key={ele.id} item={ele} />)}
      </div>
    </div>
  )
}

export default App
