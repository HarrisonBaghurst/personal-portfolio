import React from 'react'

const Testimonials = () => {

    const testimonialInfo = [ // not real testimonials - just placeholders
        {
            "text": "Before I started lessons, I was really struggling with GCSE maths, especially algebra. After just a few sessions, things started to click. My confidence has grown so much and I went from predicted a 5 to achieving a 7 in my exams. Couldn’t recommend enough!",
            "name": "Sophie, GCSE Maths Student"
        },
        {
            "text": "Before I started lessons, I was really struggling with GCSE maths, especially algebra. After just a few sessions, things started to click. My confidence has grown so much and I went from predicted a 5 to achieving a 7 in my exams. Couldn’t recommend enough!",
            "name": "Sophie, GCSE Maths Student"
        },
        {
            "text": "Before I started lessons, I was really struggling with GCSE maths, especially algebra. After just a few sessions, things started to click. My confidence has grown so much and I went from predicted a 5 to achieving a 7 in my exams. Couldn’t recommend enough!",
            "name": "Sophie, GCSE Maths Student"
        }
    ]

    return (
        <div className='flex flex-col gap-24 px-16'>
            <div className='bg-background w-full'>
                <h2 className='text-8xl h-30 flex justify-center items-center font-enorm bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                    Testimonials
                </h2>
                <p className='font-bold text-center'>
                    Trusted by students and families
                </p>
            </div>
            <div className='grid grid-cols-3 gap-16 text-2xl text-background'>
                {testimonialInfo.map((testimonial, i) => (
                    <div 
                    key={i}
                    className='bg-foreground rounded-2xl h-fit flex flex-col gap-8 p-8'
                    >
                        <h3 className='font-enorm text-center text-4xl'>
                            {testimonial.name}
                        </h3>
                        <p>
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials