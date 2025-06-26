'use client'

import React, { useEffect, useState } from 'react'
import {TechnolgiesList} from '@/constants/technologies'
import Image from 'next/image'

const Technologies = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='py-50 flex justify-evenly w-full px-[5%]'>
            {TechnolgiesList.map((technology: any, index: number) => (
                <div key={index} 
                className='w-15 h-15
                '>
                    <Image 
                    src={`/icons/${technology.file}`}
                    width={500}
                    height={500}
                    alt={`${technology.name} icon`}
                    style={{
                    transform: `translateY(${20 * Math.sin((index*50 + scrollY) * 0.015)}px) rotate(0deg)`,
                    }}
                    />
                </div>
            ))}
        </section>
    )
}

export default Technologies
