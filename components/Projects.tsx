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
      <div className='absolute top-[10%] left-[5%] w-[35%]'>
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
        <p className='text-2xl'>Here are a few hand-picked projects that reflect my skills and creative approach. View more details by clicking on a card or view all of my projects with the button below.</p>
      </div>
    </section>
  )
}

export default Projects