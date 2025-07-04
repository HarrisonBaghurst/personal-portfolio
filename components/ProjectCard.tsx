import React from 'react'

interface ProjectCardProps {
    title: string;
    tagline: string;
    technologies: string[];
}

const ProjectCard = ({title, tagline, technologies}: ProjectCardProps) => {
  return (
    <div className='border-[5px] border-dark-grey rounded-3xl p-5 hover-card xl:p-10'>
        <div className='hover-card-content'>
            <h2 className='font-ostrich responsive-h2'>
                {title}
            </h2>
            <p className='responsive-p pt-3 xl:pt-8 text-grey'>
                {tagline}
            </p>
            <div className='flex gap-10 xl:gap-15 pt-5 xl:pt-10 responsive-p text-white'>
                {technologies.map((technology, i) => (
                    <p key={i}>{technology}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard