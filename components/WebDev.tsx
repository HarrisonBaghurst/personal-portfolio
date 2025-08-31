import React from 'react'
import ModernTech from './ModernTech'
import ProjectJourney from './ProjectJourney'
import Services from './Services'
import Pricing from './Pricing'
import Portfolio from './Portfolio'
import FAQ from './FAQ'
import ScrolledInText from './ScrolledInText'

const WebDev = () => {

    return (
        <section className='w-full relative bg-background pt-32 flex flex-col gap-24'>
            <div className='flex flex-col gap-8'>
                <ScrolledInText 
                text={'Web Development'} 
                size={'large'} 
                center={true}                
                />
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