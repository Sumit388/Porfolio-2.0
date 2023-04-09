import React from 'react'
import CustomCard from './CustomCard'

function CustomBanner({title, color}:{title:string, color:string}) {
  return (
    <div className='w-screen pt-10 '>
       <div className = 'w-screen text-white' style={{background: color}} > <h1 className='uppercase text-3xl mb-5 pl-10 tracking-[10px]'> {title}</h1> </div>
        <div className='flex flex-wrap gap-5 pl-8'>
        <CustomCard color={color}/>
        <CustomCard color={color}/>
        <CustomCard color={color}/>
        <CustomCard color={color}/>
        <CustomCard color={color}/>
        </div>
    </div>
  )
}

export default CustomBanner