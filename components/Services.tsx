import React from 'react'
import Image from 'next/image'

const Services = () => {
    const servicesInfo = [
        {
            "title": "Website Creation",
            "subtitle": "Custom built for you",
            "image": "/img/macbook-mockup.png",
            "text": "I create modern, responsive websites that look great on any device. Every site is designed to be fast, secure and optimised for search engines so your business stands out online. Whether you need a simple portfolio or a fully featured business site, I'll tailor it to your goals."
        },
        {
            "title": "Web Applications",
            "subtitle": "Tailored online systems",
            "image": "/img/macbook-mockup.png",
            "text": "Sometimes a simple website isn't enough. I build custom web applications like booking systems, dashboards, or e-commerce solutions that are tailored to your business. These tools help automate processes, improve customer experience and make your business more efficient."
        },
        {
            "title": "Support and Maintenance",
            "subtitle": "Ongoing support and care",
            "image": "/img/macbook-mockup.png",
            "text": "Your website shouldn't just launch and be left alone. I provide ongoing maintenance, updates and troubleshooting to keep everything running smoothly. From fixing bugs to improving performance, you'll always have reliable support when you need it."
        },
    ]

    return (
        <div className='grid grid-cols-3 gap-16 text-2xl text-background px-16'>
            {servicesInfo.map((service, i) => (
                <div 
                key={i}
                className='bg-foreground rounded-2xl h-fit flex flex-col gap-12'
                >
                    <div className='flex flex-col gap-2 px-8 pt-8'>
                        <h3 className='font-enorm text-center text-4xl'>
                            {service.title}
                        </h3>
                        <p className='text-center font-bold'>
                            {service.subtitle}
                        </p>
                    </div>
                    <div className='w-full aspect-16/10 relative overflow-hidden'>
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
                    <p className='px-8 pb-8'>
                        {service.text}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Services