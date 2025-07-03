'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import ContactForm from './ContactForm'


const Navbar = () => {
    const [contactFormOpen, setContactFormOpen] = useState(false);

    return (
        <section 
        className='fixed z-50 w-full flex justify-end p-2 xl:p-5'
        >
            <Button 
            className='p-3 xl:p-8 rounded-[1000px] hover-card'
            style={{
                position: 'fixed',
                background: 'rgba(50, 50, 50,0.5)',
                backdropFilter: 'blur(8.5px)',
                WebkitBackdropFilter: 'blur(8.5px)',
                zIndex: 50,
                border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            onClick={() => setContactFormOpen(!contactFormOpen)}
            >
                <p className='xl:text-4xl text-white'>Contact Form</p>
            </Button>
            <ContactForm 
            formOpen={contactFormOpen}
            setFormOpen={() => setContactFormOpen(!contactFormOpen)}
            />
            
        </section>
    )
}

export default Navbar