'use client' 

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast, Toaster } from 'sonner'
import InteractButton from './InteractButton'

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
            className='rounded-lg overflow-y-auto max-h-[100dvh] p-4
            2xl:p-8'
            aria-describedby={undefined}
            >   
                <DialogHeader>
                    <DialogTitle
                    className='text-center text-4xl font-bold
                    2xl:text-6xl'
                    >
                        Contact Form
                    </DialogTitle>
                </DialogHeader>
                <p className='text-xs pt-2 justify-center text-grey
                2xl:pt-5 2xl:text-2xl'>
                    Fill in the contact form and I will respond with an email as soon as possible (I do not respond to sales messages).
                </p>
                <div className='pt-4 2xl:pt-10'>
                    <p className='text-2xl pb-2 2xl:text-4xl 2xl:pb-5'>Email</p>
                    <Input 
                    className='bg-white rounded-xl p-5'
                    placeholder='Type your email address here'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='pt-5 2xl:pt-10'>
                    <p className='text-2xl pb-2 2xl:text-4xl 2xl:pb-5'>Message</p>
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