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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
            "link": false,
        }
    ]

    const menuInfo = [
        {
            "heading": "Web Development",
            "links": [
                {
                    "text": "Services",
                    "link": "web-dev-services",
                },
                {
                    "text": "Technologies",
                    "link": "modern-tech",
                },
                {
                    "text": "Project Journey",
                    "link": "project-journey",
                },
                {
                    "text": "Pricing Estimates",
                    "link": "web-dev-pricing",
                },
                {
                    "text": "Recent Projects",
                    "link": "recent-projects",
                },
                {
                    "text": "Common Questions",
                    "link": "faq",
                },
            ]
        },
        {
            "heading": "Tutoring Services",
            "links": [
                {
                    "text": "Subjects",
                    "link": "topics",
                },
                {
                    "text": "How It Works",
                    "link": "how-it-works",
                },
                {
                    "text": "Testimonials",
                    "link": "testimonials",
                },
                {
                    "text": "Lesson Pricing",
                    "link": "lesson-pricing",
                },
                {
                    "text": "About Me",
                    "link": "about-me",
                },
            ]
        },
        {
            "heading": "Social Links",
            "links": [
                {
                    "text": "Contact Form",
                    "link": "/",
                },
                {
                    "text": "Instagram",
                    "link": "/",
                },
            ]
        },
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
            return;
        }
        const errorMessage = await res.json();
        toast.error(errorMessage.error || 'Something went wrong');
    }

    const handleScroll = (section: string) => {
        setMenuOpen(false);
        const sectionElement = document.getElementById(section)
        const yOffset = -100
        if (sectionElement) {
            const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    const [contactFormOpen, setContactFormOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [menuOpen, setMenuOpen] = useState(false);

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
                                if (link.text === 'Contact Form') {
                                    setContactFormOpen(!contactFormOpen);
                                }
                                else if (link.text === 'Menu') {
                                    setMenuOpen(!menuOpen);
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
                <Sheet 
                open={menuOpen}
                onOpenChange={() => setMenuOpen(!menuOpen)}
                >
                    <SheetContent>
                        <SheetHeader className='pl-6 2xl:pl-12 pt-6 2xl:pt-12'>
                            <SheetTitle className='
                            font-enorm text-gradient text-left
                            text-4xl
                            2xl:text-7xl
                            '>
                                Menu
                            </SheetTitle>
                        </SheetHeader>
                        <div className='px-6 2xl:px-12'>
                            <Accordion type="single" collapsible>
                                {menuInfo.map((section, i) => (
                                    <AccordionItem 
                                    key={i}
                                    value={section.heading}
                                    >
                                        <AccordionTrigger 
                                        className='paragraph-large font-bold text-foreground'>
                                            {section.heading}
                                        </AccordionTrigger>
                                        <AccordionContent className='flex flex-col gap-2 2xl:gap-6 2xl:pt-4 2xl:pb-8 px-4'>
                                            {section.links.map((link, j) => (
                                                <div
                                                key={j}
                                                className='paragraph-large cursor-pointer'
                                                onClick={() => handleScroll(link.link)}
                                                >
                                                    {link.text}
                                                </div>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default Navbar