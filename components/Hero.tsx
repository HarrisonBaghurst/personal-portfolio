'use client'

import Image from 'next/image'
import React from 'react'

const Hero = () => {

    return (
        <section>
            <div className='w-full h-[70dvw] relative'>
                <div className='overflow-hidden'>
                    <Image 
                    src={'/heroImage.svg'}
                    alt='hero image'
                    width={10000}
                    height={10000}
                    style={{
                        transform: `scale(1.4)`,
                    }}
                    priority
                    />
                </div>
                <div className='absolute left-[10%] top-[55%]'>
                    <h1 className='font-ostrich text-4xl text-white'>
                        Hi, I'm Harrison 🖐️   
                    </h1>
                    <p className='text-xs pt-1 text-grey'>
                        Freelance web developer &
                    </p>
                    <p className='text-xs text-grey'>
                        Durham University Undergraduate 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero