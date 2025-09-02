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
        <section className='
        w-full relative bg-background flex flex-col
        pt-16 gap-16
        2xl:pt-32 2xl:gap-24
        '>
            <div className='
            flex flex-col 
            gap-0
            2xl:gap-8
            '>
                <ScrolledInText 
                text={'Web Development'} 
                size={'large'} 
                center={true}                
                />
                <p className='text-center paragraph-large font-bold px-12'>
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