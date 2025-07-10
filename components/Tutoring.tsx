'use client'

import React from 'react'
import ScrollFloat from './blocks/TextAnimations/ScrollFloat/ScrollFloat'
import Image from 'next/image'

const Tutoring = () => {
  return (
    <section className='relative p-[5%] z-100 w-full h-screen text-4xl'>
        <ScrollFloat
        animationDuration={0.5}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
        containerClassName='font-bold text-center'
        >
            Tutoring
        </ScrollFloat>
        <div className='grid grid-cols-2 mt-10 gap-[5%]'>
            <div className='border-2 rounded-xl p-5'>
                <h2 className='text-5xl font-bold pb-8'>Mathematics</h2>
                <p className='pb-5'>For GCSE & A-Level.</p>
                <p className=''>Increase confidence with revision of specific topics or get ahead of the curve with lessons covering new content.</p>
            </div>
            <div className='border-2 rounded-xl p-5'>
                <h2 className='text-5xl font-bold pb-8'>Python Programming</h2>
                <p className='pb-5'>From complete beginner to advanced concepts</p>
                <p>Learn programming in Python to aid your education or as an extra skill to add to your toolbelt.</p>
            </div>
        </div>
        
    </section>
  )
}

export default Tutoring