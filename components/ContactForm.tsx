'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import Button from './Button'
import { Toaster } from './ui/sonner'
import { toast } from 'sonner'
import { useModal } from "@/context/ModalContext"

const ContactForm = () => {
    const { open, closeModal } = useModal();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const sendMessage = async () => {
        if (email === '' || message === '') {
            toast.info('Fill in required fields before sending');
            return;
        }

        const data = { email, message };

        const res = await fetch('api/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        });

        if (res.ok) {
            toast.success('Message sent successfully');
            setMessage('');
            setEmail('');
            closeModal();
            return;
        }
        const errorMessage = await res.json();
        toast.error(errorMessage.error || 'Something went wrong');
    }

    return (
        <>
            <Toaster richColors/>
            <Dialog
            open={open}
            onOpenChange={(open) => closeModal()}
            >
                <DialogContent className='
                xl:max-w-[60%] bg-light-blue
                p-6
                2xl:p-12
                '>
                    <DialogHeader>
                        <DialogTitle className='
                        font-enorm text-gradient text-left
                        pb-4 text-4xl
                        2xl:pb-8 2xl:text-8xl
                        '>
                            Contact Form
                        </DialogTitle>
                        <DialogDescription className='paragraph-small text-left text-foreground'>
                            Fill in the contact form and I will respond with an email as soon as possible (I do not respond to sales messages).
                        </DialogDescription>
                        <div className='
                        text-left text-foreground flex flex-col
                        pt-6 gap-6
                        2xl:pt-12 2xl:gap-12
                        '>  
                            <div className='
                            flex flex-col
                            gap-1
                            2xl:gap-4
                            '>
                                <p className='paragraph-large font-enorm'>
                                    Email Address *
                                </p>
                                <Input 
                                className='bg-white shadow-none border-0'
                                placeholder='Enter your email address here'
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='
                            flex flex-col
                            gap-1
                            2xl:gap-4
                            '>
                                <p className='paragraph-large font-enorm'>
                                    Message *
                                </p>
                                <Textarea 
                                className='bg-white shadow-none border-0'
                                placeholder='Enter your email address here'
                                onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <Button
                            text='Send Message'
                            link={sendMessage}
                            />
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ContactForm