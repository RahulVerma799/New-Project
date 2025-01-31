import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products}=useContext(shopContext);
    const [latestProducts,setLatestProducts]=useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10))
    },[])
    

  return (
    
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400'>
          Fashion is a term used interchangeably to describe the creation of clothing,
           footwear, accessories, cosmetics, and jewellery of different cultural .</p>
        </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4 '>
          {
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
      </div>

    </div>
  )
}

export default LatestCollection