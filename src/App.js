import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './components/Product';
import productdata from './components/ProductData';
import { responsive } from './components/ProductData';
function App() {
  
  return (
    <div>
      <Carousel showDots={true} responsive={responsive}   >
        {
          productdata.map((item)=>{
             return <Product image={item.image} name={item.name} price={item.price} description={item.description}/>
          })
        }
       
      </Carousel>

      
    </div>
  )
}

export default App