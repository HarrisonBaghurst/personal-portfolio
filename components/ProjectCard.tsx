import React from 'react'

interface ProjectCardProps {
    title: string;
    tagline: string;
    technologies: string[];
}

const ProjectCard = ({title, tagline, technologies}: ProjectCardProps) => {
  return (
    <div className='border-[5px] border-dark-grey rounded-3xl p-5 hover-card'>
        <div className='hover-card-content'>
            <h2 className='font-ostrich responsive-h2'>
                {title}
            </h2>
            <p className='responsive-p pt-3 text-grey'>
                {tagline}
            </p>
            <div className='flex gap-15 pt-5 responsive-p text-white'>
                {technologies.map((technology, i) => (
                    <p key={i}>{technology}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard