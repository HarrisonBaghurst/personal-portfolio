'use client'

import React, { useEffect, useRef, useState } from 'react'
import Transition from './Transition'
import gsap from 'gsap'
import SplitType from 'split-type'

const Hero = () => {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const textContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // updating wrapper to no flash on load
        if (wrapperRef.current) {
            gsap.set(wrapperRef.current, {opacity: 1})
        }

        // creating required constants
        const tl = gsap.timeline();
        const mm = gsap.matchMedia();
        let split: SplitType | null = null;

        if (headingRef.current && textContainerRef.current) {
            // getting characters from text
            split = new SplitType(headingRef.current, { types: 'chars,words' })
                if (split.chars) {
                split.chars.forEach((char) => {
                    char.classList.add("text-gradient"); 
                });
            }
            
            // tailwind 2xl screen
            mm.add("(min-width: 1536px)", () => {
                if (!split) return;

                tl.fromTo(
                    split.chars,
                    { 
                        y: -125, scale: 0.6, opacity: 0,
                        rotate: (i, el, targets) => {
                            const total = targets.length - 1;
                            const progress = i / total; 
                            return 75 + (progress * -150);
                        },
                        x: (i, el, targets) => {
                            const total = targets.length - 1;
                            const progress = i / total; 
                            return 100 + (progress * -200);
                        } 
                    },
                    { y: 0, x: 0, scale: 1, rotate: 0, opacity: 1, stagger: 0.075, duration: 1.5, ease: "elastic.out(1,0.6)" },
                    0.1
                );
    
                tl.fromTo(
                    textContainerRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, ease: "power1.out", duration: 0.25 },
                    '-=0.5'
                );
            })

            // less than tailwind 2xl screen
            mm.add("(max-width: 1535px)", () => {
                if (!split) return;

                tl.fromTo(
                    split.chars,
                    { 
                        y: -50, scale: 0.6, opacity: 0,
                        rotate: (i, el, targets) => {
                            const total = targets.length - 1;
                            const progress = i / total; 
                            return 75 + (progress * -150);
                        },
                        x: (i, el, targets) => {
                            const total = targets.length - 1;
                            const progress = i / total; 
                            return 50 + (progress * -100);
                        } 
                    },
                    { y: 0, x: 0, scale: 1, rotate: 0, opacity: 1, stagger: 0.075, duration: 1.5, ease: "elastic.out(1,0.6)" },
                    0.1
                );
    
                tl.fromTo(
                    textContainerRef.current,
                    { y: 25, opacity: 0 },
                    { y: 0, opacity: 1, ease: "power1.out", duration: 0.25 },
                    '-=0.5'
                );
            })

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
                    <div className='
                    flex flex-col w-fit
                    gap-0
                    2xl:gap-6
                    '>
                        <div ref={wrapperRef} className='opacity-0'>
                            <h1 
                            ref={headingRef} 
                            className="font-enorm will-change-transform text-center main-heading">
                                Hi, I'm Harrison
                            </h1>   
                        </div>
                        <div 
                        ref={textContainerRef}
                        className='flex flex-col gap-6 opacity-0 paragraph-large'
                        >
                            <div className='flex justify-center'>
                                <p className='flex gap-4 font-bold'>
                                    Your next Web Developer & Tutor
                                </p>
                            </div>
                            <div className='
                            flex justify-center 
                            pt-0 gap-4
                            2xl:pt-12 2xl:gap-12
                            '>
                                {['Web Development', 'Tutoring Services'].map((text, i) => (
                                    <div
                                    key={i}
                                    className='
                                    rounded-full font-bold  border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105
                                    py-2 px-4 border-[3px]
                                    2xl:py-4 2xl:px-8 2xl:border-[5px]
                                    '>
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