'use client'

import Image from 'next/image'
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

const Navbar = () => {
    const linkInfo = [
        {
            "text": "Contact Form",
            "icon": "messages",
            "link": false,
        },
        {
            "text": "Menu",
            "icon": "menu-2",
            "link": "/",
        }
    ]

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
            setContactFormOpen(false);
        }
        else {
            toast.error('Message failed to send - Please try again');
        }

    }

    const [contactFormOpen, setContactFormOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <>  
            <Toaster richColors/>
            <div className='fixed w-full z-100 paragraph-large'>
                <div className='flex justify-between'>

                    <div className='bg-foreground text-background cursor-pointer border-background  h-full
                    py-2 px-3 border-b-[2px] border-r-[2px] rounded-br-lg 
                    2xl:py-4 2xl:px-8 2xl:border-b-[5px] 2xl:border-r-[5px] 2xl:rounded-br-3xl
                    '>
                        <p>
                            HarrisonBaghurst.com
                        </p>
                    </div>
                    <div className='bg-foreground text-background cursor-pointer border-background flex 
                    py-2 px-3 border-b-[2px] border-l-[2px] rounded-bl-lg gap-4 
                    2xl:py-4 2xl:px-8 2xl:border-b-[5px] 2xl:border-l-[5px] 2xl:rounded-bl-3xl 2xl:gap-16
                    '>
                        {linkInfo.map((link, i) => (
                            <div 
                            key={i} 
                            className='flex gap-4 items-center cursor-pointer'
                            onClick={() => {
                                if (!link.link) {
                                    setContactFormOpen(!contactFormOpen);
                                }
                            }}
                            >
                                <div className='hidden 2xl:inline'>
                                    <Image 
                                    src={`/icons/${link.icon}.svg`}
                                    alt='message icon'
                                    width={30}
                                    height={30}
                                    />
                                </div>
                                <div
                                className=''
                                >
                                    {link.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Dialog
                open={contactFormOpen}
                onOpenChange={(open) => setContactFormOpen(open)}
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
            </div>
        </>
    )
}

export default Navbar