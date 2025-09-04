'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import ScrolledInText from './ScrolledInText'
import Button from './Button'

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
        <div 
        id='recent-projects'
        className='
        flex flex-col 
        px-6 gap-8
        2xl:px-16 2xl:gap-24
        '>
            <div className='bg-background w-full'>
                <ScrolledInText 
                text='Recent Projects'
                size='regular'
                center={true}
                />
                <p className='
                font-bold paragraph-large
                text-left
                2xl:text-center
                '>
                    A selection of websites I've designed and developed for clients
                </p>
            </div>
            <div className='
            grid 
            grid-cols-1 gap-6
            2xl:grid-cols-2 2xl:gap-16
            '>
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
                        <div className='
                        absolute 
                        top-3 left-4
                        2xl:top-8 2xl:left-8
                        '>
                            <div className={cn(
                                'flex flex-col gap-2 duration-500 transition-transform origin-top-left',
                                hoveredCard === i && 'scale-115'
                            )}>
                                <h3 className="font-enorm sub-heading">{project.title}</h3>
                                <p 
                                className='font-bold paragraph-large hidden 2xl:block'
                                >
                                    {project.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className='
                        absolute 
                        bottom-4 left-4
                        2xl:bottom-8 2xl:left-8
                        '>
                            <Button
                            text='View Details'
                            link=''
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio