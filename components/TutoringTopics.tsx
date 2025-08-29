import React from 'react'
import Image from 'next/image'

const TutoringTopics = () => {
    const servicesInfo = [
        {
            "title": "Mathematics",
            "subtitle": "Clear explanations and exam focused support",
            "image": "/img/macbook-mockup.png",
            "text": "I offer tailored GCSE and A-Level tutoring across all major exam boards. Whether you're aiming to strengthen core skills, tackle challenging topics or maximise exam performance, I provide clear explanations and structured guidance. My approach builds both confidence and problem-solving ability, ensuring you're fully prepared for assessments and future studies."
        },
        {
            "title": "Programming",
            "subtitle": "Learn to code with confidence",
            "image": "/img/macbook-mockup.png",
            "text": "I provide programming tuition with a focus on Python, one of the most widely used and beginner-friendly languages. Whether you're studying computer science at GCSE or A-Level and need some extra support with coursework or want to learn coding as a new skill, lessons are tailored to your goals. Using practical examples and hands-on exercises, I help students develop problem-solving skills and progress from beginner to confident coder."
        },
    ]

    return (
        <div className='grid grid-cols-2 gap-16 text-2xl text-background px-16'>
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

export default TutoringTopics