import React from 'react'
import CustomCard from './CustomCard'

function CustomBanner({title, color}:{title:string, color:string}) {
  return (
    <div className='w-screen '>
       {/* <div className = 'w-screen text-white' style={{background: color}} > <h1 className='uppercase text-3xl mb-5 pl-10 tracking-[10px]'> {title}</h1> </div> */}
        <div className='flex flex-wrap gap-5 pl-8 mb-10'>
        <CustomCard Image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflowers-3292932_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg'/>
        </div>
    </div>
  )
}

export default CustomBanner