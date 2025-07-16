'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import ContactForm from './ContactForm';

interface pageTypeProps {
    onChange: (type: 'webDev' | 'tutoring') => void;
}

const Navbar = ({onChange}: pageTypeProps) => {
    const [formOpen, setFormOpen] = useState(false);
    
    return (
        <section>
            <div 
            className='mt-4 fixed text-2xl items-center mx-30 rounded-[100px] overflow-hidden px-[1%] h-20 z-100 w-[calc(100dvw-var(--spacing)*60)] flex justify-between border-1 border-[rgba(255,255,255,0.2)] backdrop-filter backdrop-blur-xl'
            >   
                <div>
                    <Image
                    src={'/img/logoImage.png'}
                    alt='logo image'
                    width={32}
                    height={32}
                    />
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
                    <p>Contact Me</p>
                </div>
                <div className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
                    <div className='flex justify-center gap-16'>
                        <div 
                        className='cursor-pointer flex items-center gap-2'
                        onClick={() => onChange('webDev')}
                        >
                            <Image 
                            src={'icons/device-desktop.svg'}
                            alt='monitor image'
                            width={32}
                            height={32}
                            />
                            <p>Web Development</p>
                        </div>
                        <div 
                        className='cursor-pointer flex items-center gap-2'
                        onClick={() => onChange('tutoring')}
                        >
                            <Image 
                            src={'icons/book-2.svg'}
                            alt='monitor image'
                            width={32}
                            height={32}
                            />
                            <p>Tutoring</p>
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

export default Navbar