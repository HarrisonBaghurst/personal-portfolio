'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const HeroBackgroud = () => {
    const [scrollY, setScrollY] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [rotate, setRotate] = useState(0);
    const [zoom, setZoom] = useState(1.4); 

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setTranslateY(0.15 * scrollY);
        setRotate(-0.015 * scrollY);
        setZoom(1.4 + 0.0005 * scrollY);
    }, [scrollY]);

    return (
        <div className='overflow-hidden h-screen'>
            <Image 
            src={'/heroImage.svg'}
            alt='hero image'
            width={10000}
            height={10000}
            style={{
                transform: `scale(${zoom}) translateY(${translateY}px) rotate(${rotate}deg)`,
            }}
            priority
            />
        </div>
    )
}

export default HeroBackgroud