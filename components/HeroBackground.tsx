'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const HeroBackgroud = () => {
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        let ticking = false; 
        const handleScroll = () => {
            if(!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const translateY = 0.15 * scrollY; 
                    const rotate = -0.02 * scrollY; 
                    const zoom = 1.6 + 0.0005 * scrollY;
                    if(imageRef.current) {
                        imageRef.current.style.transform = `scale(${zoom}) translateY(${translateY}px) rotate(${rotate}deg)`
                    }   
                    ticking = false;
                });
                ticking = true; 
            }
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='overflow-hidden h-screen'>
            <Image 
            ref={imageRef}
            src={'/heroImage.svg'}
            alt='hero image'
            width={10000}
            height={10000}
            style={{
                willChange: 'transform',
            }}
            priority
            />
        </div>
    )
}

export default HeroBackgroud