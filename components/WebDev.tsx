import React from 'react'
import ModernTech from './ModernTech'
import ProjectJourney from './ProjectJourney'
import Services from './Services'
import Pricing from './Pricing'
import Portfolio from './Portfolio'
import FAQ from './FAQ'

const WebDev = () => {

    return (
        <section className='w-full relative bg-background py-32 flex flex-col gap-24 pb-300'>
            <div className='flex flex-col gap-8'>
                <h2 className='text-9xl font-enorm text-center bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                    Web Development
                </h2>
                <p className='text-center text-4xl font-bold'>
                    Your one-stop partner for web development and online services
                </p>
            </div>
            <Services />
            <ModernTech />
            <ProjectJourney />
            <Pricing />
            <Portfolio />
            <FAQ />
        </section>
    )
}

export default WebDev