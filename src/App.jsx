
import React from 'react'
import Router from './routes/Router'
const App = () => {
  return (  
    <Router/>
  )
}

export default App
































// import { useEffect, useState } from 'react'
// import './App.css'
// import ProductCard from "./Components/ProductCard/ProductCard"
// import Header from "./Components/Header/Header"
// import Hero from './Components/Hero/Hero'
// import Footer from "./Components/Footer/Footer"
// import ProductDetail from './pages/ProductDetail'

// function App() {
//   const [product, setProduct] = useState([])

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await fetch('https://fakestoreapi.com/products')
//         const data = await res.json()
//         setProduct(data)
//         console.log(data.products)

//       } catch (error) {
//         console.log("this is to check the err", error)
//       }
//     }

//     getProducts()
//   }, [])
//   return (
//     <div>
//       <Header/>
//       <Hero/>
//       <div style={{width:"100%", height:"4rem", color: "black", display: "flex"}}>
//         <h1 style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           fontSize: "30px",
//           margin: " 0px 100px "
//         }}>Products</h1>
//       </div>
//       {/* <div className='products_mapped'>
//         {product.map((ele, idx) => <ProductCard key={ele.id} item={ele} />)}
//       </div>
//       <div style={{marginTop: "10px"}}>
//           <Footer/>
//       </div> */}
//      <ProductDetail/>
//     </div>
//   )
// }

// export default App
