'use client'

import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import Image from "next/image";
import InteractButton from "./InteractButton";
import ContactForm from "./ContactForm";

const Hero = () => {
    const headingTextRef = useRef<HTMLHeadingElement>(null);
    const paragraphTextRef = useRef<HTMLParagraphElement>(null);
    const aboveTextRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const [formOpen, setFormOpen] = useState(false);
    
    useEffect(() => {
        const headingWords = headingTextRef.current?.querySelectorAll('.heading-word');
        const paragraphWords = paragraphTextRef.current?.querySelectorAll('.paragraph-word');

        const tl = gsap.timeline();

        if (headingWords) {
            headingWords.forEach((word, i) => {
                const direction = i % 2 === 0 ? 15 : -15;

                tl.fromTo(
                    word,
                    { x: 200, opacity: 0, rotate: direction },
                    { x: 0, opacity: 1, rotate: 0, duration: 0.5, ease: "power2.out" },
                    i * 0.25
                );
            })
        }
        if (paragraphWords) {
            tl.fromTo(
                paragraphWords,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.05 }
            );
        }
        tl.add('finalFadeIn');
        if (aboveTextRef.current) {
            tl.fromTo(
                aboveTextRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                'finalFadeIn'
            );
        }
        if (buttonRef.current) {
            tl.fromTo(
                buttonRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                'finalFadeIn'
            );
        }
        const imageTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
        if (imageRef.current) {
            imageTl.to(imageRef.current, {
                rotation: 360,
                duration: 1,
                ease: 'power2.inOut'
            })
        }
    }, []);

    const headingText = "Hi, I'm Harrison"
    const paragraphText = "I'm a Durham university computer science undergraduate. I offer GCSE and A-Level tutoring and web development services."

    return (
        <section 
        id="hero"
        className='relative w-full h-screen flex justify-center items-center overflow-hidden'
        >
            <div className='flex flex-col w-fit text-xs max-w-[calc(100dvw-4*var(--spacing))]
            2xl:text-2xl'>
                <div 
                ref={aboveTextRef}
                className="flex justify-center items-center gap-4 under-text mb-8 text-grey"
                >
                    <Image 
                        ref={imageRef}
                        src={'/icons/inner-shadow-bottom-left.svg'}
                        alt="dot"
                        width={20}
                        height={20}
                    />
                    <p className="">
                        Taking new Tutees and Web projects
                    </p>
                </div>
                <h1 
                ref={headingTextRef}
                className='text-4xl font-bold mb-8 glow-text flex gap-3 justify-center
                2xl:text-9xl 2xl:gap-8'
                >
                    {headingText.split(' ').map((word, i) => (
                        <span key={i} className="inline-block heading-word">
                            {word}
                        </span>
                    ))}
                </h1>
                <div className='flex justify-center text-grey'>
                    <div className="w-200 max-w-[calc(100dvw-20*var(--spacing))]">
                        <p 
                        ref={paragraphTextRef}
                        className="flex gap-x-1 flex-wrap mb-8 justify-center
                        2xl:gap-x-2"
                        >
                            {paragraphText.split(' ').map((word, i) => (
                                <span key={i} className="inline-block paragraph-word">
                                    {word}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                <div 
                ref={buttonRef}
                className="flex justify-center mt-4"
                >
                    <InteractButton 
                        text="Contact Me"
                        onClick={() => setFormOpen(!formOpen)}
                    />
                </div>
            </div>
            <ContactForm 
            formOpen={formOpen}
            setFormOpen={() => setFormOpen(!formOpen)}
            />
        </section>
    )
}

export default Hero