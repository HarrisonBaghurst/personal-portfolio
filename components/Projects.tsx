'use client'

import React, { useEffect, useRef } from 'react'
import ScrollFloat from './blocks/TextAnimations/ScrollFloat/ScrollFloat'
import InteractButton from './InteractButton'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const scrollFloatTextRef = useRef<HTMLDivElement>(null);
  const scrollFloatButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    const ctx = gsap.context(() => {
      gsap.set(boxRef.current, {xPercent: -50, yPercent: -50})
      gsap.set('#float-text', {left: '50%', xPercent: -50})
      gsap.set('#float-button', {left: '50%', xPercent: -50})

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top+=100 top',
        end: '+=1000',
        onEnter: () => {
          gsap.to('#float-text', {
            xPercent: 0,
            left: 0,
            duration: 0.6,
            ease: 'power2.inOut'
          });
        },
        onLeaveBack: () => {
          gsap.to('#float-text', {
            xPercent: -50,
            left: '50%',
            duration: 0.6,
            ease: 'power2.inOut'
          });
        }
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top+=100 top',
        end: '+=1000',
        onEnter: () => {
          gsap.to('#float-button', {
            xPercent: 0,
            left: 0,
            duration: 0.6,
            ease: 'power2.inOut'
          });
        },
        onLeaveBack: () => {
          gsap.to('#float-button', {
            xPercent: -50,
            left: '50%',
            duration: 0.6,
            ease: 'power2.inOut'
          });
        }
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1000',
        scrub: true,
        pin: true,
        animation: gsap.to(boxRef.current, {
          left: '25%',
          ease: 'power2.inOut',
        })
      })
    }, sectionRef)

    return () => ctx.revert();
  }, [])

  return (
    <section 
    ref={sectionRef}
    className='relative h-screen overflow-hidden'>
      <div 
      ref={boxRef}
      className='absolute left-[50%] top-[50%] w-[35%] py-50'
      >
        <div className='flex flex-col justify-center relative'>
          <div           
          ref={scrollFloatTextRef}
          className='absolute top-[-120%] w-fit whitespace-nowrap'
          id='float-text'
          >
            <ScrollFloat
            animationDuration={0.5}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName='font-bold'
            >
              Web Design
            </ScrollFloat>
          </div>
          <p className='text-4xl'>Scroll through a few hand-picked projects that reflect my skills and creative approach. View more details by clicking on a card or view all of my projects with the button below.</p>
          <div 
          ref={scrollFloatButtonRef}
          className='absolute top-[140%]'
          id='float-button'
          >
            <InteractButton 
            text='View More Projects'
            onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects