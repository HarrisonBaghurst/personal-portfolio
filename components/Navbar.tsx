'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import ContactForm from './ContactForm';

const Navbar = () => {
    const [formOpen, setFormOpen] = useState(false);
    
    return (
        <section>
            <div 
            className='mt-4 fixed text-2xl items-center mx-[5%] rounded-[100px] overflow-hidden px-[1%] h-15 z-100 w-[calc(100dvw-10%)] flex justify-between border-1 border-[rgba(255,255,255,0.2)] backdrop-filter backdrop-blur-xl'
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
                    <div className='flex gap-2 items-center justify-center cursor-pointer w-75 '>
                        <Image 
                        src={'/icons/device-desktop.svg'}
                        alt='app icon'
                        width={32}
                        height={32}
                        />
                        <p>Web Development</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center cursor-pointer w-50'>
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