'use client'

import React, { useEffect, useRef, useState } from 'react'
import {TechnolgiesList} from '@/constants/technologies'
import Image from 'next/image'

const Technologies = () => {
    const [positions, setPositions] = useState<number[]>([]);
    const [transition, setTransition] = useState<string>('linear 0.04s');

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setTransition('linear 0.04s');
            const currentScroll = window.scrollY;
            setPositions(Array.from({ length: TechnolgiesList.length }, (_, i) => -30 + 30 * Math.sin((i * 100 + currentScroll) * 0.0125)));
            if(timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                setTransition('ease-in 0.25s');
                setPositions(Array.from({ length: TechnolgiesList.length }, () => 0));
            }, 150);
        
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if(timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    }, []);

    return (
        <section className='py-50 flex justify-evenly w-full px-[5%]'>
            {TechnolgiesList.map((technology: any, i: number) => (
                <div key={i} 
                className='w-15 h-15 relative technology-container'
                >
                    <Image 
                    src={`/icons/${technology.file}`}
                    width={500}
                    height={500}
                    alt={`${technology.name} icon`}
                    style={{
                    transform: `translateY(${positions[i]}px) rotate(0deg)`,
                    transition: `${transition}`
                    }}
                    />
                </div>
            ))}
        </section>
    )
}

export default Technologies
