'use client'

import React, { useState } from 'react'
import ContactForm from './ContactForm'
import InteractButton from './InteractButton'


const Navbar = () => {
    const [contactFormOpen, setContactFormOpen] = useState(false);

    return (
        <section 
        className='fixed z-50 w-full flex justify-end p-[3%]'
        >   
            <InteractButton
            text='Contact Form'
            onClick={() => setContactFormOpen(!contactFormOpen)}
            />
            <ContactForm 
            formOpen={contactFormOpen}
            setFormOpen={() => setContactFormOpen(!contactFormOpen)}
            />
            
        </section>
    )
}

export default Navbar