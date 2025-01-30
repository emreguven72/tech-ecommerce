'use client'

import React from 'react'
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const texts = [
        "Empowering the Future with Cutting-Edge Technology",
        "Your Gateway to Smarter Solutions",
        "The Ultimate Hub for Tech Innovators",
    ];
    const subTexts = [
        "Discover the tools, insights, and solutions that drive innovation. Whether you're a developer, entrepreneur, or tech enthusiast, we’ve got you covered.",
        "From AI to cloud computing, explore the latest trends and technologies shaping tomorrow. Join us on the journey to a smarter, faster, and more connected world.",
        "Unlock the power of technology with expert guides, tools, and resources designed to help you succeed. Let’s build the future, together.",
    ]

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % texts.length)
      }, 5000);

      return () => clearInterval(interval)
    }, [])
    

    return (
        <div className='relative w-full h-[500px] overflow-hidden'>
            <Image
                className='absolute object-cover inset-0 w-full h-full'
                src='/images/hero2.jpg'
                fill
                alt='hero'
            />
            <div className='absolute inset-0 bg-black bg-opacity-30' />
            <div key={currentIndex} className='absolute inset-0 flex flex-col justify-center gap-4 pl-10 md:w-1/2 animate-slide'>
                <h1 className='text-white text-2xl md:text-4xl font-bold'>{texts[currentIndex]}</h1>
                <h3 className='text-white text-base md:text-lg'>{subTexts[currentIndex]}</h3>
            </div>
        </div>
    )
}

export default HeroSection