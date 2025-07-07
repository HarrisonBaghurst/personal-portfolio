'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';

const Hero = () => {
    const heroTextRef = useRef<HTMLDivElement | null>(null);
    const subTextRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        let ticking = false; 
        const handleScroll = () => {
            if(!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const translateY = -0.5 * scrollY; 
                    if(heroTextRef.current) {
                        heroTextRef.current.style.transform = `translateY(${translateY}px)`
                    }   
                    if(subTextRef.current) {
                        subTextRef.current.style.transform = `translateY(${translateY}px)`
                    }   
                    ticking = false;
                });
                ticking = true; 
            }
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section>
            <div 
            className='w-full h-screen relative overflow-x-hidden'
            >   
                <div 
                ref={heroTextRef}
                className='mt-[35dvh] flex justify-evenly'
                >   
                    <div className='flex flex-col w-fit-content'>
                        <h1 className='font-poppins font-bold text-[11rem] text-center'>Harrison Baghurst</h1>
                        <div className='relative flex justify-evenly text-4xl pt-8'>
                            <p>
                                Web Developer
                            </p>
                            <p>
                                •
                            </p>
                            <p>
                                GCSE & A-Level Tutor
                            </p>
                            <p>
                                •
                            </p>
                            <p>
                                Durham Uni Undergrad
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <TiltedCard
                        imageSrc="https://vvz9axceq1op6mal.public.blob.vercel-storage.com/IMG-20250706-WA0005%281%29%20%281%29-PrTy2YBMtfARp5lEq2nLMsYc3Sk54b.jpg"
                        altText="Photo of me"
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={10}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero