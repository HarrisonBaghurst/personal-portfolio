'use client'

import { TechnolgiesList } from '@/constants/technologies'
import Image from 'next/image'
import React from 'react'

const Technologies = () => {    
    return (
        <section className='flex gap-16 overflow-hidden'>
            {TechnolgiesList.map((technology) => (
                <div
                key={technology.name}
                className='flex items-center gap-2'
                >   
                    <div className='relative w-10 h-10'>
                        <Image 
                        src={`icons/${technology.file}`}
                        alt={technology.name}
                        fill
                        />
                    </div>
                    <p className='text-3xl'>
                        {technology.name}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default Technologies
