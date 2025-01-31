import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
       
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt=""/>
                <p className='w-full md:2/3 text-gray-500'>Fashion reflects the socio-economic and cultural values of our communities, making it an essential aspect of our lives. Young adults can use fashion to showcase their individuality and promote self-love.</p>
        </div>

        <div> 
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>
Get In Touch
            </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-7991180409</li>
                    <li>contact</li>
                    </ul>
        </div>
        {/* <div className='py-5 text-sm text-center'>
            Copyright 2025@fashion.com
        </div> */}
    </div>
  )
}

export default Footer