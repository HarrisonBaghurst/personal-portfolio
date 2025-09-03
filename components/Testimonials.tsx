import React from 'react'
import ScrolledInText from './ScrolledInText'

const Testimonials = () => {

    const testimonialInfo = [
        {
            "text": "We started the maths tutoring lessons with Harry in the Summer term earlier this year for our son who is in Year 8.  Harry has been great with our son.  He explains everything clearly for him and is very approachable too.  Our son's confidence with maths has certainly increased and we very much hope this will continue in the forthcoming lessons heading into this new academic year.  Thanks Harry!",
            "name": "Simon, GCSE Maths"
        },
        {
            "text": "My son was struggling after receiving poor mock results so we contacted Harry and asked for his help. He worked with my son for 20 lessons and we were so delighted with the result as he was able to bump up his grades 2 places! Harry is very patient, able to put his students at ease, provides clear explanations and is able to relate and communicate both with my son and ourselves at a very high level. He is always prompt with timings and willing to go the extra mile with his students. He was contactable outside of lesson times to speak with my son and help with his questions. He also provided clear and precise feedback to us so we were always kept in the loop with his progress. I'd absolutely recommend Harry as we were very happy with the service he provided.",
            "name": "Heather, A-Level Maths"
        },
    ]

    return (
        <div className='
        flex flex-col 
        gap-12 px-6
        2xl:gap-24 2xl:px-16
        '>
            <div className='bg-background w-full'>
                <ScrolledInText 
                text='Testimonials'
                size='regular'
                center={true}
                />
                <p className='
                font-bold paragraph-large 
                text-left
                2xl:text-center
                '>
                    Trusted by students and families
                </p>
            </div>
            <div className='
            grid text-background
            grid-cols-1 gap-6
            2xl:grid-cols-3 2xl:gap-16
            '>
                {testimonialInfo.map((testimonial, i) => (
                    <div 
                    key={i}
                    className='
                    bg-foreground rounded-2xl h-fit flex flex-col 
                    gap-4 p-6
                    2xl:gap-8 2xl:p-8
                    '>
                        <h3 className='font-enorm text-center paragraph-large'>
                            {testimonial.name}
                        </h3>
                        <p className='paragraph-small'>
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials