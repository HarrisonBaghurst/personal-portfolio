import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className='w-full h-screen bg-white'>
            <Image 
            src={'/heroImage.svg'}
            alt='hero image'
            fill
            />
        </div>
    </section>
  )
}

export default Hero