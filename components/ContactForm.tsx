'use client' 

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast, Toaster } from 'sonner'
import InteractButton from './InteractButton'
import Image from 'next/image'

interface ContactFormProps {
    formOpen: boolean;
    setFormOpen: () => void;
}

const ContactForm = ({formOpen, setFormOpen}: ContactFormProps) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        if(email === '' || message === '') {
            closeForm();
            toast.error('Please complete form before sending')
        }
        else {
            closeForm();    

            const data = {
                email: email,
                message: message,
            }

            const res = await fetch('api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if(res.ok) {
                toast.success('Message sent successfully');
            }
            else {
                toast.error('Message failed to send - Please try again later');
            }
        }
    }

    const closeForm = () => {
        setEmail('');
        setMessage('');
        setFormOpen()
    }

    return (
        <Dialog
        open={formOpen} 
        onOpenChange={closeForm}
        >
            <Toaster richColors position='bottom-right'/>
            <DialogContent
            className='rounded-lg overflow-y-auto max-h-[100dvh] p-4 text-xs
            md:p-6 md:text-base
            2xl:p-8 2xl:text-2xl'
            aria-describedby={undefined}
            >   
                <DialogHeader>
                    <DialogTitle
                    className='text-center text-4xl font-bold
                    md:text-5xl
                    2xl:text-6xl'
                    >
                        Contact Form
                    </DialogTitle>
                </DialogHeader>
                <div 
                className="flex justify-center items-center gap-2 text-grey
                2xl:gap-4"
                >
                    <Image 
                        src={'/icons/inner-shadow-bottom-left.svg'}
                        alt="dot"
                        width={20}
                        height={20}
                    />
                    <p className="">
                        Taking new Tutees and Web projects
                    </p>
                </div>
                <p className='pt-2 justify-center text-grey
                2xl:pt-5'>
                    Fill in the contact form and I will respond with an email as soon as possible (I do not respond to sales messages).
                </p>
                <div className='pt-4 2xl:pt-10'>
                    <p className='text-2xl pb-2 md:text-3xl 2xl:text-4xl 2xl:pb-5 md:pb-3'>Email</p>
                    <Input 
                    className='bg-white rounded-xl p-5'
                    placeholder='Type your email address here'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='pt-5 2xl:pt-10'>
                    <p className='text-2xl pb-2 md:text-3xl 2xl:text-4xl 2xl:pb-5 md:pb-3'>Message</p>
                    <Textarea 
                    className='bg-white rounded-xl px-5'
                    placeholder='Type your message here'
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className='flex justify-end pt-5 2xl:pt-10'>
                    <InteractButton 
                    text='Send Message'
                    onClick={sendMessage}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ContactForm