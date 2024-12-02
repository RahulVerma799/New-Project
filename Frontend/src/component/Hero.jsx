import React from 'react'

const  Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-x-gray-400'>
        {/*her left*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#14141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#14141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals </h1>
            </div>
        </div>

    </div>
  )
}

export default  Hero