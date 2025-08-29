import React from 'react'
import TutoringTopics from './TutoringTopics'
import TutoringPricing from './TutoringPricing'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import AboutMe from './AboutMe'

const Tutoring = () => {
    return (
        <section className='w-full relative bg-background py-32 flex flex-col gap-24'>
            <div className='flex flex-col gap-8'>
                <h2 className='h-40 text-9xl font-enorm text-center bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                    Tutoring Services
                </h2>
                <p className='text-center text-4xl font-bold'>
                    From exam preparation to skill-building, tutoring that fits your goals
                </p>
            </div>
            <TutoringTopics />
            <HowItWorks />
            <Testimonials />
            <TutoringPricing />
            <AboutMe />
        </section>
    )
}

export default Tutoring