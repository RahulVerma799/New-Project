import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../context/ShopContext';

const Product = () => {
  const {productId}=useParams();
  const {products}=useContext(shopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('')

  const fetchProductData=async()=>{
          products.map((item)=>{
            if(item._id===productId){
              setProductData(item)
              setImage(item.image[0])
              return null;
            }
          })

  }

  useEffect(()=>{
    fetchProductData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
          {/*Product Data*/}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/*Product image*/}
              <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                  <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                          productData.image.map((item,index)=>(
                            <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                          ))
                        }
                  </div>
              </div>
        </div>

    </div>
  ):<div className='opacity-0'></div>
}

export default Product