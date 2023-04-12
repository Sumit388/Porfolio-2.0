"use client";
import React from 'react'
import CustomCard from './CustomCard'
import Pagination from '@mui/material/Pagination';

function BrowseContainer() {
  return (
    <div className='flex flex-wrap gap-2 justify-start items-start px-8 pb-[60px] flex-shrink relative'>
       <CustomCard Image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2018/04/05/14/09/sunflowers-3292932_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_1280.jpg'/>
        <CustomCard Image='https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_1280.jpg'/>
        <div className='absolute md:w-[100%] w-screen md:left-auto left-0 h-[50px] flex justify-center items-center bottom-0 text-white'>
        <Pagination count={10} color="primary" className='text-white' size='small' />
        </div>
    </div>
  )
}

export default BrowseContainer