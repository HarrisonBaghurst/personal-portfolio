'use client'

import React, { useEffect, useRef } from 'react'
import ScrollVelocity from './blocks/TextAnimations/ScrollVelocity/ScrollVelocity'

const ScrollText = () => {
    const scrollTextRef = useRef<HTMLDivElement | null>(null);
        
    useEffect(() => {
        let ticking = false; 
        const handleScroll = () => {
            if(!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const translateY = -0.25 * scrollY; 
                    if(scrollTextRef.current) {
                        scrollTextRef.current.style.transform = `translateY(${translateY}px)`
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
        ref={scrollTextRef}
        className='relative w-full border-y-1 py-2 border-[rgba(255,255,255,0.2)]'
        >
            <ScrollVelocity
            texts={[
                'Python Pygame', 
                'HTML CSS JavaScript',
                'TypeScript Tailwind NextJS',
                'Clerk Stream Upstash Resend'
            ]} 
            velocity={10} 
            className="font-poppins text-6xl font-bold text-[rgba(255,255,255,0.2)]"
            />
        </div>
    )
}

export default ScrollText