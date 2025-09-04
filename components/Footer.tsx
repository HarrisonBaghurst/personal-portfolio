'use client'

import React from 'react'
import Transition from './Transition'
import { useModal } from '@/context/ModalContext'
import { useDynamicRouteParams } from 'next/dist/server/app-render/dynamic-rendering'
import { useRouter } from 'next/navigation'

const Footer = () => {
    const linkInfo = [
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
                    "link": "https://www.instagram.com/harrisonbaghurstdigital/",
                },
            ]
        },
    ]

    const router = useRouter();
    const { openModal } = useModal();

    const handleScroll = (section: string) => {
        const sectionElement = document.getElementById(section)
        const yOffset = -100
        if (sectionElement) {
            const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    const handleSend = (link: string) => {  
        router.push(link);
    }

    return (
        <section className='w-full bg-light-blue'>
            <Transition 
            flipped={true}
            />
            <div className='
            paragraph-small flex-col flex 
            p-6 gap-16
            2xl:p-32 2xl:gap-32
            '>
                <div className='
                grid grid-cols-2 gap-16
                2xl:flex 2xl:justify-between
                '>
                    {linkInfo.map((column, i) => (
                        <div 
                        key={i}
                        className='flex-[1] flex flex-col gap-6'
                        >
                            <p className='text-center font-enorm paragraph-large'>
                                {column.heading}
                            </p>
                            <div className='flex justify-center'>
                                <div className='flex flex-col gap-2'>
                                    {column.links.map((link, j) => (
                                        <button
                                        key={j}
                                        className='cursor-pointer'
                                        onClick={() => {
                                            if (column.heading === 'Social Links') {
                                                if (link.link === '/') {
                                                    openModal();
                                                    return
                                                }
                                                handleSend(link.link);
                                                return;
                                            }
                                            handleScroll(link.link);
                                        }}
                                        >
                                            {link.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center paragraph-small'>
                    <p>
                        © 2025 HarrisonBaghurst.com
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer