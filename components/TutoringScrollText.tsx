'use client'

import ScrollVelocity from './blocks/TextAnimations/ScrollVelocity/ScrollVelocity'

const ScrollText = () => {
    
    return (
        <div
        className='relative w-full border-y-1 py-2 border-[rgba(255,255,255,0.2)] mt-75'
        >
            <ScrollVelocity
            texts={[
                'GCSE A-Level', 
                'Mathematics',
                'Computer Science',
                'Python'
            ]} 
            velocity={10} 
            className="font-poppins text-6xl font-bold text-[rgba(255,255,255,0.2)]"
            />
        </div>
    )
}

export default ScrollText