'use client'

import React, { useEffect, useRef } from 'react'
import Aurora from './blocks/Backgrounds/Aurora/Aurora';

const HeroBackgroud = () => {
    const imageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let ticking = false; 
        const handleScroll = () => {
            if(!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const translateY = 0.75 * scrollY; 
                    if(imageRef.current) {
                        imageRef.current.style.transform = `translateY(${translateY}px)`
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
        <div 
        className='overflow-hidden h-screen z-0'
        style={{
            willChange: 'transform',
        }}
        ref={imageRef}
        >
            <Aurora
            colorStops={["#8b60b5", "#5cc9ed", "#ba6193"]}
            blend={0.5}
            amplitude={0.25}
            speed={0.25}
            />
        </div>
    )
}

export default HeroBackgroud