'use client'

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import ScrolledInText from './ScrolledInText';
import ExpandingSelector from './ExpandingSelector';

const ProjectJourney = () => {
    const projectJourneyInfo = [
        {
            "title": "Consultation",
            "text": "We'll start with a conversation about your goals, ideas and requirements. This helps me understand your business and what success looks like for you.",
        },
        {
            "title": "Planning",
            "text": "I'll create a clear plan and design concepts tailored to your brand. This is where your vision starts taking shape and you'll have the chance to give feedback.",
        },
        {
            "title": "Development",
            "text": "Using modern technologies like Next.js and GSAP, I'll bring the design to life. Every site is built to be responsive, fast and scalable.",
        },
        {
            "title": "Launch",
            "text": "Once the site is ready, you'll review everything and I'll make any final adjustments. Then, we'll launch your new site to the world.",
        },
        {
            "title": "Support",
            "text": "After launch, I provide ongoing support, updates and improvements so your site continues to grow with your business.",
        }
    ]

    const [activeStep, setActiveStep] = useState<number>(0);

    return (
        <div className='flex flex-col
        px-6 gap-12 h-fit
        2xl:px-16 2xl:gap-24 2xl:h-265
        '>
            <div className='bg-background w-full'>
                <ScrolledInText 
                text='Your Project Journey'
                size='regular'
                center={true}
                />
                <p className='
                font-bold paragraph-large
                text-left
                2xl:text-center'>
                    From consultation to launch, here's what you can expect
                </p>
            </div>

            <div className='block 2xl:hidden'>
                <ExpandingSelector 
                options={projectJourneyInfo}
                />
            </div>

            <div className="bg-background 2xl:flex text-background gap-8 hidden">
                {projectJourneyInfo.map((step, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setActiveStep(i)}
                        className={cn(
                            "bg-foreground h-fit p-4 2xl:p-8 rounded-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex-1 relative",
                            activeStep === i ? "flex-[3]" : "flex-[1]"
                        )}
                    >
                        <div className={cn(
                            'absolute top-[10px] right-[10px] transition-opacity duration-300',
                            activeStep === i ? 'opacity-0' : 'opacity-100'
                        )}>
                            <Image 
                            src={'/icons/click.svg'}
                            alt='hover me'
                            width={24}
                            height={24}
                            />
                        </div>

                        <h3 className="font-enorm sub-heading text-center">{step.title}</h3>

                        <div
                            className={cn(
                                "transition-all duration-500 ease-in-out overflow-hidden flex justify-center",
                                    activeStep === i ? "max-h-200 mt-4 opacity-100" : "max-h-0 opacity-0"
                            )}
                        >   
                            <div className='flex flex-col 
                            gap-4
                            2xl:gap-8
                            '>
                                <p className='paragraph-small
                                w-[80dvw] 
                                2xl:w-[33dvw]
                                '>
                                    {step.text}
                                </p>
                                <div className='w-full aspect-16/10 relative rounded-sm overflow-hidden'>
                                    <Image 
                                    src={'/img/macbook-mockup.png'}
                                    alt=''
                                    fill
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectJourney
