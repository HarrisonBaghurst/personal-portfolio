import React from 'react'
import Transition from './Transition'

const Footer = () => {
    const linkInfo = [
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