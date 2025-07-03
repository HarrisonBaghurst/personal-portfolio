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
            setPositions(Array.from({ length: TechnolgiesList.length }, (_, i) => -0.028 * window.innerWidth + (30/1080) * window.innerWidth * Math.sin((i * 100 + (currentScroll / window.innerWidth) * 800) * 0.0125)));
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
        <section className='py-10 xl:py-50 flex justify-between w-full px-[5%] duration-300'>
            {TechnolgiesList.map((technology: any, i: number) => (
                <div
                key={i}
                className="relative technology-container group flex flex-col items-center transition-all"
                >
                    <Image
                        src={`/icons/${technology.file}`}
                        width={75}
                        height={75}
                        alt={`${technology.name} icon`}
                        style={{
                        transform: `translateY(${positions[i]}px)`,
                        transition: `${transition}`,
                        }}
                    />
                    <p
                    className="absolute opacity-0 overflow-hidden group-hover:opacity-100 duration-300 text-center top-8 text-xs xl:top-30 xl:text-3xl text-grey"
                    style={{
                    transform: `translateY(${positions[i]}px)`,
                    transition: `${transition}`,
                    }}
                    >
                        {technology.name}
                    </p>
                </div>

            ))}
        </section>
    )
}

export default Technologies
