'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import ContactForm from './ContactForm';

const Navbar = () => {
    const [formOpen, setFormOpen] = useState(false);
    
    return (
        <section>
            <div 
            className='fixed text-2xl items-center px-[5%] h-15 z-100 w-full flex justify-between border-b-1 border-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-xl'
            >   
                <div>
                    <Image
                    src={'/img/logoImage.png'}
                    alt='logo image'
                    width={32}
                    height={32}
                    />
                </div>
                <div className='flex justify-center gap-[3%]'>
                    <div className='flex gap-2 items-center justify-center cursor-pointer w-65 '>
                        <Image 
                        src={'/icons/device-desktop.svg'}
                        alt='app icon'
                        width={32}
                        height={32}
                        />
                        <p>Web Design</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center cursor-pointer w-65 '>
                        <Image 
                        src={'/icons/book-2.svg'}
                        alt='app icon'
                        width={32}
                        height={32}
                        />
                        <p>Tutoring</p>
                    </div>
                    <div 
                    className='flex gap-2 items-center justify-center cursor-pointer w-65'
                    onClick={() => setFormOpen(!formOpen)}
                    >
                        <Image 
                        src={'/icons/mail.svg'}
                        alt='app icon'
                        width={32}
                        height={32}
                        />
                        <p>Contact Form</p>
                    </div>
                </div>
                <div>
                    Menu
                </div>
            </div>
            <ContactForm 
            formOpen={formOpen}
            setFormOpen={() => setFormOpen(!formOpen)}
            />
        </section>
    )
}

export default Navbar