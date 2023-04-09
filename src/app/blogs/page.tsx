import React from 'react'
import Header from '@/components/blogs/Header'
import ButtonBases from '@/components/blogs/Bannerbuttons'
import CustomBanner from '@/components/blogs/CustomBanner'

function page() {
  return (
    <div className='w-screen overflow-hidden'>
        <Header/>
        <ButtonBases/>
        <CustomBanner title='Recents' color='#9b27b048'/>
        <CustomBanner title='Popular' color='#b0272748'/>
        <CustomBanner title='Recents' color='#2927b048'/>
    </div>
  )
}

export default page