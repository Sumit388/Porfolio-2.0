import BrowseContainer from '@/components/blogs/BrowseContainer'
import BrowseFilterSec from '@/components/blogs/BrowseFilterSec'
import Footer from '@/components/blogs/Footer'
import Header from '@/components/portfolio/Header'
import React from 'react'

function page() {
  return (
    <div className='bg-[#242424]'>
        <Header/>
        <div className='w-screen flex flex-col md:flex-row'>
        <BrowseFilterSec/>
        <BrowseContainer/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default page