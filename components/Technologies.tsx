import React from 'react'
import {TechnolgiesList} from '@/constants/technologies'
import Image from 'next/image'

const Technologies = () => {

    return (
        <section>
            {TechnolgiesList.map((technology: any, index: number) => (
                <div key={index} className=''>
                    <Image 
                    src={`/icons/${technology.file}`}
                    width={25}
                    height={25}
                    alt={`${technology.name} icon`}
                    />
                </div>
            ))}
        </section>
    )
}

export default Technologies