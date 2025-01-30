import HeroSection from '@/components/HeroSection'
import ProductCarousel from '@/components/ProductCarousel'
import React from 'react'

const page = () => {

  return (
    <div className='flex flex-col gap-10'>
      <HeroSection />
      <div className='flex flex-col gap-10 px-20'>
        <ProductCarousel />
      </div>
    </div>
  )
}

export default page
