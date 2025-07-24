'use client'

import React, { useEffect, useRef } from 'react'
import ScrollFloat from './blocks/TextAnimations/ScrollFloat/ScrollFloat'
import gsap from 'gsap'

const Tutoring = () => {
    const sectionRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => { 
    const ctx = gsap.context(() => {
      gsap.set(boxRef.current, {xPercent: -50, yPercent: -50})
      gsap.set('#text-container-1', {right: 0, translateX: '100%'})

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: true,
          pin: true,  
        }
      });

      timeline.to(boxRef.current, {
        top: '25%',
        ease: 'power2.inOut',
        duration: 1,
      })

      timeline.to('#text-container-1', {
        translateX: 0,
        left: 0,
        ease: 'power2.inOut',
        duration: 2,
      })

    }, sectionRef)

    return () => ctx.revert();
  }, [])
    

    return (
        <section 
        ref={sectionRef}
        className='relative w-full h-screen text-4xl overflow-hidden'
        >
            <div 
            ref={boxRef}
            className='absolute left-[50%] top-[50%] w-[30%]'
            >
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
                <div className='flex justify-center'>
                    <p className=''>
                        Build confidence, master skills and achieve your goals with 1-to-1 tuition, tailored for your prefered learning style. Continue scrolling for more information.
                    </p>    
                </div>
            </div>
            <div 
            id='text-container-1'
            className='absolute flex justify-evenly top-[55%]'
            >
                <div className='w-[35%]'>
                    <h2 className='text-5xl font-bold pb-8'>Mathematics</h2>
                    <div className='flex gap-5 pb-8'>
                        <div className='py-2 px-6 rounded-[50px] border-1 bg-[rgba(126,126,126,0.25)] border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl'>
                            <p>GCSE</p>
                        </div>
                        <div className='py-2 px-6 rounded-[50px] border-1 bg-[rgba(126,126,126,0.25)] border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl'>
                            <p>A-Level</p>
                        </div>
                    </div>
                    <p className=''>Increase confidence with revision of specific topics or get ahead of the curve with lessons covering new content.</p>
                </div>
                <div className='w-[35%]'>
                    <h2 className='text-5xl font-bold pb-8'>Python Programming</h2>
                    <div className='flex flex-wrap gap-5 pb-8'>
                        <div className='py-2 px-6 rounded-[50px] border-1 bg-[rgba(126,126,126,0.25)] border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl'>
                            <p>GCSE</p>
                        </div>
                        <div className='py-2 px-6 rounded-[50px] border-1 bg-[rgba(126,126,126,0.25)] border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl'>
                            <p>A-Level</p>
                        </div>
                        <div className='py-2 px-6 rounded-[50px] border-1 bg-[rgba(126,126,126,0.25)] border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl'>
                            <p>Independent</p>
                        </div>
                    </div>
                    <p>Learn programming in Python to aid your education or independently as an extra skill to add to your toolbelt.</p>
                </div>
            </div>
            
        </section>
    )
}

export default Tutoring