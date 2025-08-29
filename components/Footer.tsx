import React from 'react'
import Transition from './Transition'

const Footer = () => {
    const linkInfo = [
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
        {
            "heading": "Web Development",
            "links": [
                {
                    "text": "Services",
                    "link": "/",
                },
                {
                    "text": "Technologies",
                    "link": "/",
                },
                {
                    "text": "Project Journey",
                    "link": "/",
                },
                {
                    "text": "Pricing Estimates",
                    "link": "/",
                },
                {
                    "text": "Recent Projects",
                    "link": "/",
                },
                {
                    "text": "Common Questions",
                    "link": "/",
                },
            ]
        },
        {
            "heading": "Tutoring Services",
            "links": [
                {
                    "text": "Subjects",
                    "link": "/",
                },
                {
                    "text": "How It Works",
                    "link": "/",
                },
                {
                    "text": "Testimonials",
                    "link": "/",
                },
                {
                    "text": "Lesson Pricing",
                    "link": "/",
                },
                {
                    "text": "About Me",
                    "link": "/",
                },
            ]
        }
    ]

    return (
        <section className='w-full bg-light-blue'>
            <Transition 
            flipped={true}
            />
            <div className='p-32 text-2xl flex-col flex gap-32'>
                <div className='flex justify-between'>
                    {linkInfo.map((column, i) => (
                        <div 
                        key={i}
                        className='flex-[1] flex flex-col gap-6'
                        >
                            <p className='text-center font-enorm text-3xl'>
                                {column.heading}
                            </p>
                            <div className='flex justify-center'>
                                <div className='flex flex-col gap-2'>
                                    {column.links.map((link, j) => (
                                        <p 
                                        key={j}
                                        className=''
                                        >
                                            {link.text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <p>
                        © 2025 HarrisonBaghurst.com
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer