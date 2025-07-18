'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

interface pageTypeProps {
    pageType: 'webDev' | 'tutoring';
    onChange: (type: 'webDev' | 'tutoring') => void;
}

const Navbar = ({pageType, onChange}: pageTypeProps) => {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <section>
            <div 
            className='mt-4 fixed text-sm items-center mx-4 rounded-[100px] overflow-hidden px-[1%] h-12 z-50 w-[calc(100dvw-var(--spacing)*8)] flex justify-between border-1 border-[rgba(255,255,255,0.2)] backdrop-filter backdrop-blur-xl
            2xl:mx-30 2xl:text-2xl 2xl:w-[calc(100dvw-var(--spacing)*60)] 2xl:h-20 2xl:mt-8'
            >   
                <div className='hidden 
                2xl:block'>
                    <Image
                    src={'/img/logoImage.png'}
                    alt='logo image'
                    width={32}
                    height={32}
                    />
                </div>
                <div 
                className='hidden gap-2 items-center justify-center cursor-pointer
                2xl:flex'
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
                    <div className='flex justify-center gap-16 relative'>
                        {['webDev', 'tutoring'].map((type) => (
                            <div
                            key={type}
                            className='relative cursor-pointer px-4 py-1 flex items-center gap-2
                            2xl:px-6'
                            onClick={() => onChange(type as 'webDev' | 'tutoring')}
                            >
                                {pageType === type && (
                                <motion.div
                                layoutId='activeTab'
                                className='absolute inset-0 rounded-[100px] border-2 border-[rgba(255,255,255,0.2)] bg-linear-to-b from-[rgba(25,80,125,0.5)] to-[rgba(45,50,51,0.5)]'
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                />
                                )}
                                <div className='relative z-10 flex items-center gap-2'>
                                    <Image
                                        className='hidden 
                                        2xl:block'
                                        src={type === 'webDev' ? 'icons/device-desktop.svg' : 'icons/book-2.svg'}
                                        alt='icon'
                                        width={32}
                                        height={32}
                                    />
                                    <p className='min-w-max'>{type === 'webDev' ? 'Web Development' : 'Tutoring'}</p>
                                </div>
                            </div>
                        ))}
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