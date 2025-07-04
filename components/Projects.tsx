import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section
    className='px-[5%] py-15 grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-8 xl:gap-y-16 justify-center'
    >
        <ProjectCard 
        title='CarCuts.co.uk'
        tagline='Portfolio and sales website for CarCuts'
        technologies={['Next JS', 'Tailwind', 'Vercel']}
        />
        <ProjectCard 
        title='Nurture Connect'
        tagline='Video conferencing app for Nurture Durham'
        technologies={['Next JS', 'Tailwind', 'Vercel']}
        />
        <ProjectCard 
        title='SoftBlocked'
        tagline='Tile based puzzle game'
        technologies={['Python']}
        />
    </section>
  )
}

export default Projects