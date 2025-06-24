'use client'

import Image from 'next/image'
import React from 'react'

const Hero = () => {

    return (
        <section>
            <div className='w-full h-[70dvw] relative lg:h-[55dvw]'>
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
                <div className='absolute left-[6%] top-[60%]'>
                    <h1 className='font-ostrich responsive-h1 text-white'>
                        Hi, I'm Harrison
                    </h1>
                    <p className='pt-1 responsive-p text-grey'>
                        Freelance web developer &
                    </p>
                    <p className='responsive-p text-grey'>
                        Durham University Undergraduate 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero