'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Technologies from './Technologies'

const Hero = () => {
    const headingText = "Hi, I'm Harrison";
    const speed = 50;
    const [displayedText, setDisplayedText] = useState('');

    const [scrollY, setScrollY] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        setTranslateY(-0.5 * scrollY);
    }, [scrollY])

    useEffect(() => { 
        let currentIndex = 0; 
        const type = () => {
            if (currentIndex < headingText.length) {
                currentIndex++;  
                setDisplayedText((prev) => prev + headingText[currentIndex - 1]); 
                setTimeout(type, Math.floor(Math.random() * (100 - 30 + 1)) + 30);
            }
        }
        setTimeout(type, 250);
        return () => {
            currentIndex = headingText.length;
        }
    }, [headingText, speed])

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
                    <h1 className='font-ostrich responsive-h1 text-white'>
                        {displayedText}
                        {displayedText !== headingText && <span className="text-grey animate-pulse">_</span>}
                    </h1>
                    <p className='pt-1 responsive-p text-grey'>
                        Freelance Software Developer &
                    </p>
                    <p className='responsive-p text-grey'>
                        Durham University Undergraduate 
                    </p>
                    <Technologies />
                </div>
            </div>
        </section>
    )
}

export default Hero