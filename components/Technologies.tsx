import React from 'react'
import {TechnolgiesList} from '@/constants/technologies'
import Image from 'next/image'

const Technologies = () => {

    return (
        <section className='pt-2 md:pt-3 lg:pt-4 xl:pt-5 flex gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5'>
            {TechnolgiesList.map((technology: any, index: number) => (
                <div key={index} className='w-4 md:w-6 lg:w-8 xl:w-10 2xl:w-12 h-4 md:h-6 lg:h-8 xl:h-10 2xl:h-12'>
                    <Image 
                    src={`/icons/${technology.file}`}
                    width={500}
                    height={500}
                    alt={`${technology.name} icon`}
                    />
                </div>
            ))}
        </section>
    )
}

export default Technologies