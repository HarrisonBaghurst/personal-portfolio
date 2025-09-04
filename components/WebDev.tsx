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
        <section 
        id='web-dev-services'
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
                text={'Web Development'} 
                size={'large'} 
                center={true}                
                />
                <p className='
                paragraph-large font-bold
                text-left
                2xl:text-center
                '>
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