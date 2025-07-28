import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';


const Navbar = () => {
    const [time, setTime] = useState('');
    const navbarRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const scrollToHero = () => {
        const element = document.getElementById('hero');
        if (element) {
            setOpen(false);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const scrollToWebDev = () => {
        const element = document.getElementById('webDev');
        if (element) {
            setOpen(false);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const scrollToTutoring = () => {
        const element = document.getElementById('tutoring');
        if (element) {
            setOpen(false);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    useEffect(() => {
        // gsap setup 
        if (navbarRef.current) {
            gsap.fromTo(
                navbarRef.current,
                { y: -200 },
                { y: 0, duration: 0.5, ease: "power2.out", delay: 2.5 }
            )
        }

        // page time setup 
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setTime(`${hours} : ${minutes} : ${seconds}`)
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <section className=''>
            <div 
            ref={navbarRef}
            className={cn(`
                my-4 fixed text-xs items-center mx-4 rounded-2xl overflow-hidden px-[1%] z-50 w-[calc(100%-var(--spacing)*8)] flex justify-between border-1 border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl bg-[rgba(200,200,200,0.1)] duration-300 ease-in-out
                md:text-base
                2xl:mx-4 2xl:text-2xl 2xl:w-[calc(100%-var(--spacing)*8)] 2xl:my-4
                `, open? 'h-30 2xl:h-38': 'h-16')}
            >   
                <div className='absolute left-0 top-0 w-full h-16 px-8 flex items-center'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex gap-4 items-center'>
                            <Image 
                                src={'/img/logoImage.png'}
                                alt='logo image'
                                width={24}
                                height={24}
                            />
                            <p>
                                HarrisonBaghurst.com
                            </p>
                        </div>
                        <button 
                        className='cursor-pointer'
                        onClick={() => setOpen(!open)}
                        >
                            Menu
                        </button>
                    </div>
                    <div className='absolute font-bold left-[50%] -translate-x-[50%] hidden
                    2xl:block'>
                        {time}
                    </div>
                </div>
                <div className='absolute left-0 top-14 w-full h-16 px-8 flex items-center
                2xl:top-20'>
                    <div className='flex justify-center gap-8 items-center w-full
                    2xl:gap-16'>
                        <button 
                        className='cursor-pointer'
                        onClick={() => scrollToHero()}
                        >
                            Home
                        </button>
                        <button 
                        className='cursor-pointer'
                        onClick={() => scrollToWebDev()}
                        >
                            Web Development
                        </button>
                        <button 
                        className='cursor-pointer'
                        onClick={() => scrollToTutoring()}
                        >
                            Tutoring
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar