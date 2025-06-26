'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Technologies from './Technologies'
import TypedText from './TypedText'

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setTranslateY(-0.5 * scrollY);
    }, [scrollY]);

    return (
        <section>
            <div className='w-full h-[100dvh] relative'>
                <div className='overflow-hidden'>
                    <Image 
                    src={'/heroImage.svg'}
                    alt='hero image'
                    width={10000}
                    height={10000}
                    style={{
                        transform: `scale(1.5) translateY(${translateY}px)`,
                    }}
                    priority
                    />
                </div>
                <div className='absolute left-[5%] bottom-[10%]'>
                    <TypedText 
                    text="Hi, I'm Harrison"
                    minTime={30} 
                    maxTime={50} 
                    className='font-ostrich responsive-h1 text-white'
                    startTimeout={250}
                    onEnd={() => {}}
                    />
                    <TypedText 
                    text="Freelance Software Developer & Durham University Undergraduate"
                    minTime={20}
                    maxTime={30}
                    className='pt-1 responsive-p text-grey'
                    startTimeout={1250}
                    onEnd={() => {}}
                    />
                    <Technologies />
                </div>
            </div>
        </section>
    )
}

export default Hero