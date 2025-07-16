'use client'

import { TechnolgiesList } from '@/constants/technologies'
import Image from 'next/image'
import React from 'react'

const Technologies = () => {    
    return (
        <section className='flex overflow-hidden'>
            <div className='animate-scroll flex whitespace-nowrap gap-8'>
                {[...TechnolgiesList, ...TechnolgiesList].map((technology, index) => (
                    <div
                    key={`${technology.name}-${index}`}
                    className='flex items-center gap-2'
                    >   
                        <div className='relative w-6 h-6 2xl:w-10 2xl:h-10'>
                            <Image 
                            src={`icons/${technology.file}`}
                            alt={technology.name}
                            fill
                            />
                        </div>
                        <p className='text-md whitespace-nowrap 2xl:text-3xl'>
                            {technology.name}
                        </p>
                    </div>
                ))}
            </div>

            <style jsx>
                {`
                @keyframes scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite
                }
                `}
            </style>
        </section>
    )
}

export default Technologies
