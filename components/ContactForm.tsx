'use client' 

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { toast, Toaster } from 'sonner'

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
            className='border-[5px] border-dark-grey rounded-3xl p-5 xl:p-10 overflow-y-auto max-h-screen'
            aria-describedby={undefined}
            >   
                <DialogHeader>
                    <DialogTitle
                    className='font-ostrich text-3xl text-left xl:text-7xl font-light'
                    >
                        Contact Form
                    </DialogTitle>
                </DialogHeader>
                <p className='text-sm xl:text-2xl text-grey'>
                    Fill in the contact form and I will respond with an email as soon as possible (I do not respond to sales messages).
                </p>
                <div className='pt-5'>
                    <p className='text-lg xl:text-3xl pb-3 xl:pb-5'>Email</p>
                    <Input 
                    className='border-[5px] border-none bg-dark-grey rounded-xl p-5'
                    placeholder='Type your email address here'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='pt-2'>
                    <p className='text-lg xl:text-3xl pb-3 xl:pb-5'>Message</p>
                    <Textarea 
                    className='border-[5px] border-none bg-dark-grey rounded-xl px-5'
                    placeholder='Type your message here'
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <Button 
                className='mt-5 bg-dark-grey hover:bg-grey'
                onClick={sendMessage}
                >
                    <p className='text-white text-lg'>Send message</p>
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default ContactForm