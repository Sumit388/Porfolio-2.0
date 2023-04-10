import React from 'react'
import Header from '@/components/blogs/Header'
import ButtonBases from '@/components/blogs/Bannerbuttons'
import CustomBanner from '@/components/blogs/CustomBanner'
import CustomCard from '@/components/blogs/CustomCard'
import Hero from '@/components/blogs/Hero'
import CustomWideCard from '@/components/blogs/CustomWideCard'
import BlogContainer from '@/components/blogs/BlogContainer'
import Footer from '@/components/blogs/Footer'

function page() {
  return (
    <div className='w-screen overflow-hidden'>
        <Header/>
        <Hero/>
        <CustomBanner title='Latest' color='#F9A826'/>
        <ButtonBases/>
        <BlogContainer title={"Recent"}/>
        <Footer/>
    </div>
  )
}

export default page