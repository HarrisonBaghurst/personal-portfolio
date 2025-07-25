'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import InteractButton from './InteractButton';
import Technologies from './Technologies';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const WebDev = () => {
    const headingTextRef = useRef<HTMLHeadingElement>(null);
    const aboveTextRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const contentsRef = useRef<HTMLDivElement>(null);

    const [formOpen, setFormOpen] = useState(false);

    useEffect(() => {
        const headingWords = headingTextRef.current?.querySelectorAll('.heading-word');

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
                    i * 0.15
                );
            })
        }
        tl.add('synced');
        if (aboveTextRef.current) {
            tl.fromTo(
                aboveTextRef.current,
                {
                    y: -50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.25,
                    ease: "power2.out",
                },
                'synced'
            );
        }
        if (buttonRef.current) {
            tl.fromTo(
                buttonRef.current,
                {
                    x: 50,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.25,
                    ease: "power2.out",
                },
                'synced'
            );
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
                    duration: 0.75,
                    ease: "power2.out",
                },
            );
        }
        
    }, [])

    const headingText = 'Tutoring'

    return (
        <section
            id='tutoring'
            className='relative w-full overflow-hidden flex justify-center pb-50'
        >
            <div className='w-[80%] pt-[8%] text-2xl text-grey'>
                <div className='flex justify-between items-center'>
                    <div className='w-fit'>
                        <div 
                        ref={aboveTextRef}
                        className="flex justify-center gap-4 mb-8"
                        >
                            <Image 
                                src={'/icons/inner-shadow-bottom-left.svg'}
                                alt="dot"
                                width={20}
                                height={20}
                            />
                            <p className="text-2xl">
                                Taking new Tutees
                            </p>
                        </div>
                        <h2 
                        ref={headingTextRef}
                        className='text-8xl font-bold mb-8 glow-text flex gap-8 text-white'
                        >
                            {headingText.split(' ').map((word, i) => (
                                <span key={i} className="inline-block heading-word">
                                    {word}
                                </span>
                            ))}
                        </h2>
                    </div>
                    <div ref={buttonRef}>
                        <InteractButton 
                            text="Contact Me"
                            onClick={() => setFormOpen(!formOpen)}
                        />
                    </div>
                </div>
                <div 
                ref={contentsRef}
                className='grid grid-cols-2 mt-8 gap-[10%]'
                >
                    <div className='flex flex-col gap-16'>
                        <p>
                            Build confidence, master skills and achieve goals with 1-to-1 tuition, tailored for your child's prefered learning style. 
                            Your child's safety is my top priority, for this reason I hold an up-to-date standard DBS check, verifying that I am fully cleared to work with children. 
                            All lessons are conducted in an online video call and are usually an hour long.
                        </p>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-4xl text-white font-bold'>
                                Mathematics
                            </h3>
                            <div className='flex gap-4'>
                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>GCSE</p>
                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>A-Level</p>
                            </div>
                            <p>
                                Stay on top of your studies by going over topics of your choice, get a head start on upcoming lessons, and get exam-ready with past papers and revision.
                                I teach all major exam boards.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-4xl text-white font-bold'>
                                Python Programming
                            </h3>
                            <div className='flex gap-4'>
                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>GCSE</p>
                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>A-Level</p>
                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>Independent</p>
                            </div>
                            <p>
                                Develop your skills while continuing your education, or start from scratch and add programming to your toolkit at your own pace.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-4xl text-white font-bold'>
                                Lesson Pricing
                            </h3>
                            <p>
                                I offer your first lesson free to give you the opportunity to experience my teaching style with no commitments.
                            </p>
                            <p>
                                All lessons after the first: £20/hr
                            </p>
                            <p>
                                Save money by purchasing multiple lessons at once:
                            </p>
                            <ul>
                                <li>• 5 hours - £95 (£19/hr)</li>
                                <li>• 10 hours - £180 (£18/hr)</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <ContactForm 
            formOpen={formOpen}
            setFormOpen={() => setFormOpen(!formOpen)}
            />
        </section>
    )
}

export default WebDev