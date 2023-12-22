import React from 'react'
import Card from '../components/Card';

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between p-4 px-5 bg-[#f4f5f8] h-screen'>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-400'></div>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-300'></div>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-500'></div>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-200'></div>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-100'></div>
        </div>
    )
}

export default Hero;