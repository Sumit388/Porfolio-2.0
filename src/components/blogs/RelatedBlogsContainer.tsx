import React from 'react'
import CustomList from "./CustomList";

function RelatedBlogsContainer() {
  return (
    <div className='w-[30%] min-h-[60vh] border-l border-l-[#ffffff45] flex flex-col bg-slate-400'>
        <div className='w-full h-20 flex justify-center items-center uppercase text-black font-bold text-2xl tracking-[30px] '>
            Related
        </div>
        <CustomList/>
        
    </div>
  )
}

export default RelatedBlogsContainer;