import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


const Navbar = () => {
    const [time, setTime] = useState('');
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // gsap setup 
        if (navbarRef.current) {
            gsap.fromTo(
                navbarRef.current,
                { y: -200 },
                { y: 0, duration: 1, ease: "power2.out", delay: 5.5 }
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
            className='my-4 fixed text-sm items-center mx-4 rounded-2xl overflow-hidden px-[1%] h-12 z-50 w-[calc(100%-var(--spacing)*8)] flex justify-between border-1 border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl bg-[rgba(200,200,200,0.1)]
            2xl:mx-4 2xl:text-2xl 2xl:w-[calc(100%-var(--spacing)*8)] 2xl:h-16 2xl:my-4'
            >   
                <div className='flex justify-between w-full items-center'>
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
                    <div>
                        Menu
                    </div>
                </div>
                <div className='absolute font-bold left-[50%] -translate-x-[50%]'>
                    {time}
                </div>
            </div>
        </section>
    )
}

export default Navbar