'use client'

import { useEffect, useRef } from 'react'
import RotatingText from './blocks/TextAnimations/RotatingText/RotatingText'
import TypedText from './TypedText'

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
                className='absolute top-[50%] left-[50%] justify-center flex gap-10 translate-x-[-50%]'>
                    <h1 className='font-ostrich text-9xl'>Harrison Baghurst</h1>
                    <RotatingText
                    texts={['Developer', 'Tutor', 'Student']}
                    mainClassName="p-5 bg-cyan-300 text-black font-bold text-5xl overflow-hidden justify-center items-center rounded-lg w-90"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2500}
                    />
                </div>
                <div 
                ref={subTextRef}
                className='absolute top-[62%] left-[50%] justify-center flex gap-10 translate-x-[-50%]'>
                    <TypedText
                    text='Explore my portfolio - A showcase of my projects'
                    minTime={20}
                    maxTime={40}
                    className='text-white text-4xl'
                    startTimeout={500}
                    onEnd={() => {}}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero