'use client'

import RotatingText from './blocks/TextAnimations/RotatingText/RotatingText'
import HeroBackground from './HeroBackground'
import TypedText from './TypedText'

const Hero = () => {

    return (
        <section>
            <div className='w-full h-120 xl:h-screen relative'>
                <HeroBackground />
                <div className='absolute top-[55%] left-[50%] justify-center flex gap-10 translate-x-[-50%]'>
                    <h1 className='font-ostrich text-9xl'>Harrison Baghurst</h1>
                    <RotatingText
                    texts={['Developer', 'Tutor', 'Student']}
                    mainClassName="p-5 bg-cyan-300 text-black font-bold text-5xl overflow-hidden justify-center items-center rounded-lg w-90"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2500}
                    />
                </div>
                <div className='absolute top-[70%] left-[50%] justify-center flex gap-10 translate-x-[-50%]'>
                    <TypedText
                    text='Explore my portfolio - A selection of my projects'
                    minTime={10}
                    maxTime={30}
                    className='text-white text-4xl'
                    startTimeout={1000}
                    onEnd={() => {}}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero