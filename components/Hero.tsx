'use client'

import React, { useEffect, useRef } from 'react'
import Transition from './Transition'
import gsap from 'gsap'
import SplitType from 'split-type'

const Hero = () => {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const textContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            gsap.set(wrapperRef.current, {opacity: 1})
        }

        const tl = gsap.timeline();
        let split: SplitType | null = null;

        if (headingRef.current && textContainerRef.current) {
            split = new SplitType(headingRef.current, { types: 'chars,words' })
                if (split.chars) {
                split.chars.forEach((char) => {
                    char.classList.add("text-gradient"); 
                });
            }

            tl.fromTo(
                split.chars,
                {
                    y: -125,
                    x: (i, el, targets) => {
                        const total = targets.length - 1;
                        const progress = i / total; 
                        return 100 + (progress * -200);
                    },
                    scale: 0.6,
                    opacity: 0,
                    rotate: (i, el, targets) => {
                        const total = targets.length - 1;
                        const progress = i / total; 
                        return 75 + (progress * -150);
                    },
                },
                {
                    y: 0,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                    stagger: 0.075,
                    duration: 1.5,
                    ease: "elastic.out(1,0.6)",
                },
                0.1
            );

            tl.fromTo(
                textContainerRef.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    ease: "power1.out",
                    duration: 0.25,
                },
                '-=0.5'
            );
        }

        return () => {
            if (split) split.revert();
            tl.kill();
        };

    }, [])

    return (
        <section>
            <div className='h-screen w-full text-4xl relative'>
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='flex flex-col gap-6 w-fit'>
                        <div ref={wrapperRef} className='opacity-0'>
                            <h1 ref={headingRef} className="text-9xl font-enorm will-change-transform">
                                Hi, I'm Harrison
                            </h1>   
                        </div>
                        <div 
                        ref={textContainerRef}
                        className='flex flex-col gap-6 opacity-0'
                        >
                            <div className='flex justify-center'>
                                <p className='flex gap-4 font-bold'>
                                    Your next Web Developer & Tutor
                                </p>
                            </div>
                            <div className='flex justify-center pt-12 gap-12'>
                                {['Web Development', 'Tutoring Services'].map((text, i) => (
                                    <div
                                    key={i}
                                    className='py-4 px-8 rounded-full font-bold border-[5px] border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105'
                                    >
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Transition />
        </section>
    )
}

export default Hero