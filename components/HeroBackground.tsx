'use client'

import Aurora from './blocks/Backgrounds/Aurora/Aurora';

const HeroBackgroud = () => {

    return (
        <div 
        className='overflow-hidden h-screen z- fixed w-full'
        >
            <Aurora
            colorStops={["#97DFFC", "#B3CDDE", "#858AE3"]}
            blend={0.5}
            amplitude={1}
            speed={0.4}
            />
        </div>
    )
}

export default HeroBackgroud