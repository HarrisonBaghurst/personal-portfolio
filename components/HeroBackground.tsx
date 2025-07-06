'use client'

import React, { useEffect, useRef } from 'react'
import Aurora from './blocks/Backgrounds/Aurora/Aurora';

const HeroBackgroud = () => {

    return (
        <div 
        className='overflow-hidden h-screen z- fixed w-full'
        >
            <Aurora
            colorStops={["#8b60b5", "#5cc9ed", "#ba6193"]}
            blend={0.5}
            amplitude={0.25}
            speed={0.25}
            />
        </div>
    )
}

export default HeroBackgroud