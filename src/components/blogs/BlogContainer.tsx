import React from 'react'
import CustomWideCard from './CustomWideCard'
import CustomBanner from './CustomBanner'

function BlogContainer({title}:{title:string}) {
  return (
    <div>
        <div className='uppercase w-screen text-center tracking-[30px] md:text-5xl text-2xl p-2 text-gray-400 font-bold flex justify-center items-center mt-10'>
            {title}
        </div>
    <div className="flex w-screen p-10 gap-2 flex-wrap justify-around">
        <CustomWideCard/>
        <CustomWideCard/>
        <CustomWideCard/>
    </div>
        <CustomBanner title="Latest" color="#F9A826"/>
    </div>
  )
}

export default BlogContainer