import React from 'react'
import TutoringTopics from './TutoringTopics'
import TutoringPricing from './TutoringPricing'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import AboutMe from './AboutMe'
import ScrolledInText from './ScrolledInText'

const Tutoring = () => {
    return (
        <section className='w-full relative bg-background py-32 flex flex-col gap-24'>
            <div className='flex flex-col gap-8'>
                <ScrolledInText 
                text='Tutoring Services'
                size='large'
                center={true}
                />
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