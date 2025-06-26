'use client'

import HeroBackground from './HeroBackground'
import Technologies from './Technologies'
import TypedText from './TypedText'

const Hero = () => {

    return (
        <section>
            <div className='w-full h-[100dvh] relative'>
                <HeroBackground />
                <div className='absolute left-[5%] bottom-[10%]'>
                    <TypedText 
                    text="Hi, I'm Harrison"
                    minTime={30} 
                    maxTime={50} 
                    className='font-ostrich responsive-h1 text-white'
                    startTimeout={250}
                    onEnd={() => {}}
                    />
                    <TypedText 
                    text="Freelance Software Developer"
                    minTime={20}
                    maxTime={30}
                    className='pt-1 responsive-p text-grey'
                    startTimeout={1250}
                    onEnd={() => {}}
                    />
                    <TypedText 
                    text="& Durham University Undergraduate"
                    minTime={20}
                    maxTime={30}
                    className='pt-1 responsive-p text-grey'
                    startTimeout={2000}
                    onEnd={() => {}}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero