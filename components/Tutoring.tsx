import React from 'react'
import TutoringTopics from './TutoringTopics'
import TutoringPricing from './TutoringPricing'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import AboutMe from './AboutMe'
import ScrolledInText from './ScrolledInText'

const Tutoring = () => {
    return (
        <section 
        id='topics'
        className='
        w-full relative bg-background flex flex-col
        pt-16 gap-16
        2xl:pt-32 2xl:gap-24
        '>
            <div className='
            flex flex-col 
            gap-0 px-6
            2xl:gap-8
            '>
                <ScrolledInText 
                text={'Tutoring Services'} 
                size={'large'} 
                center={true}                
                />
                <p className='
                paragraph-large font-bold
                text-left
                2xl:text-center
                '>
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