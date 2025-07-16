'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

interface pageTypeProps {
    pageType: 'webDev' | 'tutoring';
    onChange: (type: 'webDev' | 'tutoring') => void;
}

const Navbar = ({pageType, onChange}: pageTypeProps) => {
    const [formOpen, setFormOpen] = useState(false);

    useEffect(() => {

    }, [pageType])
    
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
                    <div className='flex justify-center gap-16 relative'>
                        {['webDev', 'tutoring'].map((type) => (
                            <div
                            key={type}
                            className='relative cursor-pointer px-2 py-1 flex items-center gap-2'
                            onClick={() => onChange(type as 'webDev' | 'tutoring')}
                            >
                                {pageType === type && (
                                <motion.div
                                layoutId='activeTab'
                                className='absolute inset-0 rounded-lg border-2 border-[rgba(255,255,255,0.2)] bg-linear-to-b from-blue to-blue-grey'
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                />
                                )}
                                <div className='relative z-10 flex items-center gap-2'>
                                    <Image
                                        src={type === 'webDev' ? 'icons/device-desktop.svg' : 'icons/book-2.svg'}
                                        alt='icon'
                                        width={32}
                                        height={32}
                                    />
                                    <p>{type === 'webDev' ? 'Web Development' : 'Tutoring'}</p>
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