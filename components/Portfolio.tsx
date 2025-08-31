'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import ScrolledInText from './ScrolledInText'

const Portfolio = () => {
    const projectInfo = [
        {
            "className": "text-background",
            "title": "Car Cuts",
            "subtitle": "Portfolio Website",
            "text": "A responsive portfolio website for Car Cuts, designed to showcase their services with modern GSAP animations and 3D components. The result is an engaging, visually dynamic experience across all screen sizes.",
            "testimonial": "If you need a web developer who takes the stress out of it, choose Harrison Baghurst! I had no design concepts, but he stepped right in, helping with colors, web page styles, and all the design ideas. The website is still under construction, but it's already looking incredible, thanks to their helpful and knowledgeable guidance. The whole journey has been seamless! - Jason (Car Cuts Owner)",
            "image": "/img/macbook-mockup.png",
        },
        {
            "className": "text-foreground",
            "title": "Nurture Connect",
            "subtitle": "Web Application",
            "text": "This is some text",
            "testimonial": "This is a testimonial",
            "image": "/img/imac-mockup.png",
        },
    ]

    const [hoveredCard, setHoveredCard] = useState<null|number>(null);

    return (
        <div className='flex flex-col gap-24 px-16'>
            <div className='bg-background w-full'>
                <ScrolledInText 
                text='Recent Projects'
                size='regular'
                center={true}
                />
                <p className='font-bold text-center'>
                    A selection of websites I've designed and developed for clients
                </p>
            </div>
            <div className='gap-16 grid grid-cols-2'>
                {projectInfo.map((project, i) => (
                    <div 
                    key={i}
                    onMouseEnter={() => {setHoveredCard(i)}}
                    onMouseLeave={() => {setHoveredCard(null)}}
                    className={cn(
                        'text-background rounded-2xl gap-16 relative cursor-pointer',
                        project.className   
                    )}
                    >
                        <div className='w-full aspect-16/10 relative rounded-2xl overflow-hidden'>
                            <Image 
                            src={project.image}
                            alt=''
                            fill
                            />
                        </div>
                        <div className='absolute top-8 left-8'>
                            <div className={cn(
                                'flex flex-col gap-2 duration-500 transition-transform origin-top-left',
                                hoveredCard === i && 'scale-115'
                            )}>
                                <h3 className="font-enorm text-4xl">{project.title}</h3>
                                <p className='font-bold'>{project.subtitle}</p>
                            </div>
                        </div>
                        <div className='absolute bottom-8 left-8'>
                            <div className='bg-light-blue text-foreground w-fit py-4 px-8 rounded-full font-bold border-[5px] border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105'>
                                View Details
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio