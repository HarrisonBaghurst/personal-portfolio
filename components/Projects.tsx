'use client'

import React from 'react'
import CardSwap, { Card } from './blocks/Components/CardSwap/CardSwap'
import SpotlightCard from './blocks/Components/SpotlightCard/SpotlightCard'
import ScrollFloat from './blocks/TextAnimations/ScrollFloat/ScrollFloat'
import Image from 'next/image'
import InteractButton from './InteractButton'

const Projects = () => {
  return (
    <section className='relative'>
      <div 
      className='relative h-screen overflow-hidden'
      >
        <CardSwap
          cardDistance={100}
          verticalDistance={150}
          delay={6000}
          skewAmount={3}
          pauseOnHover={false}
          width={1000}
          height={575}
        >
          <Card className='shadow shadow-[rgba(151,223,252,0.5)]'>
            <SpotlightCard className="h-full w-full" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className='p-8'>
                <h3 className='font-ostrich text-6xl'>Nurture Connect</h3>
                <p className='text-2xl'>Nurture Durham's video conferencing website</p>
                <div className='mt-10 h-125 w-200 relative rounded-lg overflow-hidden'>
                  <Image 
                  src={'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Nurture%20Connect-cPpI8LzGqLghSlYwFKmcJX2ldXVymb.png'}
                  alt='SoftBlocked game image'
                  fill
                  />
                </div>
              </div>
            </SpotlightCard>
          </Card>
          <Card className='shadow shadow-[rgba(151,223,252,0.5)]'>
            <SpotlightCard className="h-full w-full" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className='p-8'>
                <h3 className='font-ostrich text-6xl'>CarCuts.co.uk</h3>
                <p className='text-2xl'>Car Cuts' sales and portfolio website</p>
                <div className='mt-10 h-125 w-200 relative rounded-lg overflow-hidden'>
                  <Image 
                  src={'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Car%20Cuts-4rniXGCzWB7QAMxQgvvxbPNbEWrIZB.png'}
                  alt='SoftBlocked game image'
                  fill
                  />
                </div>
              </div>
            </SpotlightCard>
          </Card>
          <Card className='shadow shadow-[rgba(151,223,252,0.5)]'>
            <SpotlightCard className="h-full w-full" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className='p-8'>
                <h3 className='font-ostrich text-6xl'>SoftBlocked</h3>
                <p className='text-2xl'>Personal 2D puzzle game project</p>
                <div className='mt-10 h-112.5 w-200 relative rounded-lg overflow-hidden'>
                  <Image 
                  src={'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/SoftBlocked-vCLaoIC8zE6GaMt5eHZZ8E6OsJwOaZ.png'}
                  alt='SoftBlocked game image'
                  fill
                  />
                </div>
              </div>
            </SpotlightCard>
          </Card>
        </CardSwap>
      </div>
      <div className='absolute top-[25%] left-[5%] w-[35%]'>
        <ScrollFloat
        animationDuration={0.5}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
        containerClassName='font-ostrich'
        >
          My Projects
        </ScrollFloat>
        <p className='text-4xl'>These are a few hand-picked projects that reflect my skills and creative approach.</p>
        <p className='text-4xl pt-8'>View more details by clicking on a card or view all of my projects with the button below.</p>
        <div className='pt-25'>
          <InteractButton 
          text='View More Projects'
          onClick={() => {}}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects