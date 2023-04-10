import React from 'react'

function Hero() {
  return (
    <div className='h-[64vh] w-screen mt-16 flex justify-center items-center'>
        <div className='h-[50vh] w-[98vw] shadow-lg rounded-2xl relative overflow-hidden'>
        <img src={'https://cdn.pixabay.com/photo/2017/08/08/00/30/nature-2609624_1280.jpg'} alt="" className="absolute top-0  w-[98vw] h-[50vh] left-0 object-cover"/>
        </div>
    </div>
  )
}

export default Hero