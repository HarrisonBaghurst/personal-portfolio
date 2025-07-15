'use client'

import React, { useEffect, useRef } from 'react'
import ScrollFloat from './blocks/TextAnimations/ScrollFloat/ScrollFloat'
import InteractButton from './InteractButton'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

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
      gsap.set('#project-container-1', {bottom: '0', translateY: '100%'})
      gsap.set('#project-container-2', {bottom: '0', translateY: '100%'})

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top+=100 top',
        end: '+=3000',
        onEnter: () => {
          gsap.to('#float-text', {
            xPercent: 0,
            left: 0,
            duration: 0.6,
            ease: 'power2.inOut'
          });
          gsap.to('#float-button', {
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
          gsap.to('#float-button', {
            xPercent: -50,
            left: '50%',
            duration: 0.6,
            ease: 'power2.inOut'
          });
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,  
        }
      });

      timeline.to(boxRef.current, {
        left: '20%',
        ease: 'power2.inOut',
        duration: 1,
      })

      timeline.to('#project-container-1', {
        top: '50%',
        translateY: '-50%',
        ease: 'power2.inOut',
        duration: 1,
      })

      timeline.to('#project-container-1', {
        top: 0,
        translateY: '-100%',
        ease: 'power2.inOut',
        duration: 1,
      }, 'syncTransition')

      timeline.to('#project-container-2', {
        top: '50%',
        translateY: '-50%',
        ease: 'power2.inOut',
        duration: 1,
      }, 'syncTransition')

    }, sectionRef)

    return () => ctx.revert();
  }, [])

  return (
    <section 
    ref={sectionRef}
    className='relative h-screen overflow-hidden'>
      <div 
      ref={boxRef}
      className='absolute left-[50%] top-[50%] w-[30%] py-50'
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
              Web Projects
            </ScrollFloat>
          </div>
          <p className='text-4xl'>Scroll through a few hand-picked projects that reflect my skills and creative approach. Click on a card to view that project or more information about web projects with the button below.</p>
          <div 
          ref={scrollFloatButtonRef}
          className='absolute top-[140%]'
          id='float-button'
          >
            <InteractButton 
            text='View Projects'
            onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div 
      className='absolute right-[5%] w-320 h-220 overflow-hidden rounded-lg'
      id='project-container-1'
      >
        <div className='flex py-5 flex-col'>
          <h2 className='text-4xl font-bold'>
            Nurture Connect
          </h2>
          <p className='text-2xl'>
            Nurture Durham's scheduling and video conferencing app
          </p>
        </div>
        <div className='relative w-320 h-200 rounded-lg overflow-hidden'>
          <Image
          src={'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Nurture%20Connect-cPpI8LzGqLghSlYwFKmcJX2ldXVymb.png'}
          alt='nurture connect image'
          fill
          />
        </div>
      </div>
      <div 
      className='absolute right-[5%] w-320 h-220 overflow-hidden rounded-lg'
      id='project-container-2'
      >
        <div className='flex py-5 flex-col'>
          <h2 className='text-4xl font-bold'>
            CarCuts.co.uk
          </h2>
          <p className='text-2xl'>
            Car Cuts' portflio and sales website
          </p>
        </div>
        <div className='relative w-320 h-200 rounded-lg overflow-hidden'>
          <Image
          src={'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Car%20Cuts-4rniXGCzWB7QAMxQgvvxbPNbEWrIZB.png'}
          alt='nurture connect image'
          fill
          />
        </div>
      </div>
    </section>
  )
}

export default Projects