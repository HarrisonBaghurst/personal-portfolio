'use client'

import React from 'react'
import CardSwap, { Card } from './blocks/Components/CardSwap/CardSwap'
import SpotlightCard from './blocks/Components/SpotlightCard/SpotlightCard'
import ScrollFloat from './blocks/TextAnimations/ScrollFloat/ScrollFloat'

const Projects = () => {
  return (
    <section className='relative'>
      <div 
      className='relative h-screen overflow-hidden'
      >
        <CardSwap
          cardDistance={75}
          verticalDistance={300}
          delay={3000}
          skewAmount={5}
          pauseOnHover={false}
          width={1000}
          height={500}
        >
          <Card>
            <SpotlightCard className="h-full w-full" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className='p-8'>
                <h3 className='font-ostrich text-6xl'>Nurture Connect</h3>
                <p className='text-2xl'>Nurture Durham's video conferencing website</p>
              </div>
            </SpotlightCard>
          </Card>
          <Card>
            <SpotlightCard className="h-full w-full" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className='p-8'>
                <h3 className='font-ostrich text-6xl'>CarCuts.co.uk</h3>
                <p className='text-2xl'>Car Cuts' sales and portfolio website</p>
              </div>
            </SpotlightCard>
          </Card>
          <Card>
            <SpotlightCard className="h-full w-full" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className='p-8'>
                <h3 className='font-ostrich text-6xl'>SoftBlocked</h3>
                <p className='text-2xl'>Personal 2D puzzle game project</p>
              </div>
            </SpotlightCard>
          </Card>
        </CardSwap>
      </div>
      <div className='absolute top-[15%] left-[5%]'>
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
      </div>
    </section>
  )
}

export default Projects