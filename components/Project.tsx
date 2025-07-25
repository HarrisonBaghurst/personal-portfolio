import Image from 'next/image';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface ProjectProps {
    title: string;
    icon: string;
    imgs: string[];
    overview: string;
    testimonial: string;
}

const Project = ({ title, icon, imgs, overview, testimonial}: ProjectProps) => {
    return (
        <div className='w-full flex flex-col gap-16  mt-48'>
            <div className='flex justify-center gap-4 items-center'>
                <div className='overflow-hidden rounded-lg'>
                    <Image 
                    src={icon}
                    alt='logo'
                    width={48}
                    height={48}
                    />
                </div>
                <h2 className='text-7xl glow-text text-white font-bold'>
                    {title}
                </h2>
            </div>
            <Carousel
            opts={{
                loop: true
            }}
            >
                <CarouselContent className='-ml-8'>
                    {imgs.map((img, index) => (
                        <CarouselItem 
                        key={index}
                        className='basis-1/3 pl-8'
                        >
                            <div className='relative aspect-16/9 rounded-lg overflow-hidden'>
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
            </Carousel>
            <div className='grid grid-cols-2 gap-[10%]'>
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