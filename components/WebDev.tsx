'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import InteractButton from './InteractButton';
import Technologies from './Technologies';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Project from './Project';
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

    const services = [
        'Custom web design & development', 
        'Responsive design for all devices', 
        'Full e-commerce solutions', 
        'Full stack web apps & dashboards', 
        'Website redesign & modernisation',
        'Web hosting setup'
    ]
    const headingText = 'Web Development'

    return (
        <section
            id='webDev'
            className='relative w-full overflow-hidden flex justify-center pb-32
            2xl:pb-50'
        >
            <div className='w-[80%] pt-[8%] text-xs text-grey
            md:text-base
            2xl:text-2xl'>
                <div className='flex flex-col items-center pb-8
                2xl:justify-between 2xl:flex-row 2xl:pb-10'>
                    <div className='w-fit'>
                        <div 
                        ref={aboveTextRef}
                        className="flex justify-center items-center gap-4 mb-8"
                        >
                            <Image 
                                src={'/icons/inner-shadow-bottom-left.svg'}
                                alt="dot"
                                width={20}
                                height={20}
                            />
                            <p className="">
                                Taking new Web Development projects
                            </p>
                        </div>
                        <h2 
                        ref={headingTextRef}
                        className='text-3xl font-bold mb-8 glow-text flex gap-2 text-white justify-center
                        md:text-5xl
                        2xl:text-8xl 2xl:gap-8'
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
                className='grid grid-cols-1 mt-8 gap-8
                2xl:grid-cols-2 2xl:gap-[10%]'
                >
                    <div className='flex flex-col gap-8
                    2xl:gap-16'>
                        <p>
                            Bring your ideas to life with clean, responsive websites designed to match your vision. 
                            Whether you need a simple portfolio, a full ecommerce website or a custom web app, I offer complete development services using modern technologies.
                        </p>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-2xl text-white font-bold
                            md:text-3xl
                            2xl:text-4xl'>
                                From Consultation to Launch
                            </h3>
                            <p>
                                Start with a free consultation and get a personalised quote.
                                Depending on the project's scale, work may be divided into stages. 
                                You'll be able to monitor progress throughout, and I welcome your feedback at any point. 
                                At the end of each stage (or the full project), I'll include time for any revisions you need. 
                                After completion, I provide support to fix any issues that arise. 
                                I'll also guide you through the launch or offer hosting if needed.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-2xl text-white font-bold
                            md:text-3xl
                            2xl:text-4xl'>
                                Project Scope & Pricing
                            </h3>
                            <p>
                                Every project is built from the ground up to match your specific needs.
                                As a result, pricing and timelines can vary. 
                                For more details or a free quote, feel free to get in touch to schedule a meeting. 
                                Payments are made at the start of the project - or at the beginning of each stage if the work is divided.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-2xl text-white font-bold
                            md:text-3xl
                            2xl:text-4xl'>
                                What I Offer
                            </h3>
                            <p>
                                I provide a range of development services to support your project from the ground up. 
                                Whether you're launching something new or refining an existing product, I deliver flexible, purpose-built solutions tailored to your goals. 
                                Below is an overview of the services available, which can be combined or customised to suit your needs.
                            </p>
                        </div>
                        <div className='flex gap-2 flex-wrap
                        2xl:gap-4'>
                            {services.map((text, index) => (
                                <p 
                                className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'
                                key={index}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                        <Technologies />
                    </div>   
                </div>
                <Project 
                title={'Nurture Connect'}
                icon={'/img/nurtureDurhamLogo.png'}
                imgs={[
                    'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-17%20213821.png',
                    'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-17%20214027.png',
                    'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-17%20214123.png',
                    'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-17%20214245.png'
                ]}
                overview={"Nurture Connect is a video conferencing and scheduling web app built with Next.js and Tailwind CSS. It integrates GetStream's video and audio SDK for real-time communication and uses Clerk for user authentication and account management."}
                testimonial={`
                    "
                    Harrison was a joy to work with. 
                    He showed great aptitude, curiosity and, most importantly to me, dedication, resulting in an outstanding tutoring platform. 
                    He responded to queries and comments swiftly, worked hard consistently to learn new ideas, and was incredibly empathetic to my wants and needs. 
                    He is skilful, practical and reliable - I couldn't recommend him enough!
                    " - Ashwin Bhat (Nurture Durham Founder)`
                }
                />
                <Project 
                title={'Car Cuts'}
                icon={'/img/carCutsLogo.ico'}
                imgs={[
                    'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-20%20145100.png',
                    'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-20%20145117.png',
                    'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-20%20145133.png',
                    'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-20%20145146.png'
                ]}
                overview={"CarCuts.co.uk is a sales and portfolio website built with Next.js and Tailwind CSS. It uses Resend for email delivery and Upstash Redis for rate limiting."}
                testimonial={`
                    "
                    If you need a web developer who takes the stress out of it, choose Harrison Baghurst! 
                    I had no design concepts, but he stepped right in, helping with colors, web page styles, and all the design ideas. 
                    The website is still under construction, but it's already looking incredible, thanks to their helpful and knowledgeable guidance. 
                    The whole journey has been seamless! 
                    " - Jason (Car Cuts Owner)`
                }
                />
            </div>
            <ContactForm 
            formOpen={formOpen}
            setFormOpen={() => setFormOpen(!formOpen)}
            />
        </section>
    )
}

export default WebDev