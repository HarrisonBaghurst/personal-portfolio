'use client'

import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


interface ProjectProps {
    title: string;
    icon: string;
    imgs: string[];
    overview: string;
    testimonial: string;
}

const Project = ({ title, icon, imgs, overview, testimonial}: ProjectProps) => {
    const headingTextRef = useRef<HTMLHeadingElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const imgsRef = useRef<HTMLDivElement>(null);
    const contentsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const headingWords = headingTextRef.current?.querySelectorAll('.heading-word');
        const images = imgsRef.current?.querySelectorAll('.animate-image')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headingTextRef.current,
                start: 'top 90%',
                once: true,
            }
        });

        if (headingWords) {
            headingWords.forEach((word, i) => {
                const direction = i % 2 === 0 ? 15 : -15;

                tl.fromTo(
                    word,
                    { x: 200, opacity: 0, rotate: direction },
                    { x: 0, opacity: 1, rotate: 0, duration: 0.5, ease: "power2.out" },
                    i * 0.15,
                );
            })
        }
        if (logoRef.current) {
            tl.fromTo(
                logoRef.current,
                {
                    x: -50,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.25,
                    ease: "power2.out",
                },
            );
        }
        if (images) {
            images.forEach((word, i) => {
                tl.fromTo(
                    word,
                    { x: 200, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                    `${i * 0.2}`
                );
            })
        }
        if (contentsRef.current) {
            tl.fromTo(
                contentsRef.current,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.25,
                    ease: "power2.out",
                },
            );
        }
    }, [])

    return (
        <div className='w-full flex flex-col gap-16  mt-48'>
            <div className='flex justify-center gap-4 items-center'>
                <div 
                ref={logoRef}
                className='overflow-hidden rounded-lg'
                >
                    <Image 
                    src={icon}
                    alt='logo'
                    width={48}
                    height={48}
                    />
                </div>
                <h2 
                ref={headingTextRef}
                className='text-7xl glow-text text-white font-bold heading-word flex gap-4'
                >
                    {title.split(' ').map((word, i) => (
                        <span key={i} className="inline-block heading-word">
                            {word}
                        </span>
                    ))}
                </h2>
            </div>
            <Carousel
            opts={{
                loop: true,
                align: 'start'
            }}
            >
                <div 
                ref={imgsRef}
                >
                    <CarouselContent 
                    className='-ml-8'
                    >
                        {imgs.map((img, index) => (
                            <CarouselItem 
                            key={index}
                            className='basis-1/3 pl-8'
                            >
                                <div className='relative aspect-16/9 rounded-lg overflow-hidden animate-image'>
                                    <Image 
                                    src={img}
                                    alt='image'
                                    fill
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    <CarouselNext />
                    <CarouselPrevious />
                </div>

            </Carousel>
            <div 
            ref={contentsRef}
            className='grid grid-cols-2 gap-[10%]'
            >
                <div>
                    <h3 className='text-4xl text-white font-bold pb-4'>
                        Project Overview
                    </h3>
                    <p>
                        {overview}
                    </p>
                </div>
                <div>
                    <h3 className='text-4xl text-white font-bold pb-4'>
                        Testimonial
                    </h3>
                    <p> 
                        {testimonial}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project