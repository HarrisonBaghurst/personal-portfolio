import React from 'react'
import Image from 'next/image'

const Services = () => {
    const servicesInfo = [
        {
            "title": "Website Creation",
            "subtitle": "Custom built for you",
            "image": "https://vvz9axceq1op6mal.public.blob.vercel-storage.com/iPhone-mockup-nurture-connect-compressed.webp",
            "text": "I create modern, responsive websites that look great on any device. Every site is designed to be fast, secure and optimised for search engines so your business stands out online. Whether you need a simple portfolio or a fully featured business site, I'll tailor it to your preferences."
        },
        {
            "title": "Web Applications",
            "subtitle": "Tailored online systems",
            "image": "https://vvz9axceq1op6mal.public.blob.vercel-storage.com/iMac-mockup-nurture-connect.webp",
            "text": "Sometimes a simple website isn't enough. I build custom web applications like booking systems, dashboards, or e-commerce solutions that are tailored to your business. These tools help automate processes, improve customer experience and make your business more efficient."
        },
        {
            "title": "Support and Maintenance",
            "subtitle": "Ongoing support and care",
            "image": "https://vvz9axceq1op6mal.public.blob.vercel-storage.com/ongoing-support.webp",
            "text": "Your website shouldn't just launch and be left alone. I provide ongoing maintenance, updates and troubleshooting to keep everything running smoothly. From fixing bugs to improving performance, you'll always have reliable support when you need it."
        },
    ]

    return (
        <div className='
        grid text-background 
        grid-cols-1 px-4 gap-4
        2xl:grid-cols-3 2xl:px-16 2xl:gap-16
        '>
            {servicesInfo.map((service, i) => (
                <div 
                key={i}
                className='bg-foreground rounded-2xl h-fit flex flex-col gap-12'
                >
                    <div className='
                    flex flex-col gap-2
                    px-4 pt-4
                    2xl:px-8 2xl:pt-8
                    '>
                        <h3 className='font-enorm text-center sub-heading'>
                            {service.title}
                        </h3>
                        <p className='text-center font-bold paragraph-large'>
                            {service.subtitle}
                        </p>
                    </div>
                    <div className='w-full aspect-4/3 relative overflow-hidden'>
                        <div className='absolute top-0 left-0 z-50 bg-gradient-to-b from-foreground to-transparent h-[20px] w-full'>
                        </div>
                        <Image 
                        src={service.image}
                        alt='macbook mockup'
                        fill
                        />
                        <div className='absolute bottom-0 left-0 z-50 bg-gradient-to-t from-foreground to-transparent h-[20px] w-full'>
                        </div>
                    </div>
                    <p className='paragraph-small
                    px-4 pb-4
                    2xl:px-8 2xl:pb-8
                    '>
                        {service.text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Services