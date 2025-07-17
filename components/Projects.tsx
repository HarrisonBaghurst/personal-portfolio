'use client'

import React from 'react'
import CircularGallery from './blocks/Components/CircularGallery/CircularGallery'

const Projects = () => {
    return (
		<section>
			<div style={{ height: '600px', position: 'relative' }}>
				<CircularGallery 
				bend={2} 
				textColor="#ffffff" 
				borderRadius={0.01} 
				scrollEase={0.01}
				font='font-poppins'
				items={[
					'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Nurture%20Connect-cPpI8LzGqLghSlYwFKmcJX2ldXVymb.png',
					'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Nurture%20Connect-cPpI8LzGqLghSlYwFKmcJX2ldXVymb.png',
					'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Nurture%20Connect-cPpI8LzGqLghSlYwFKmcJX2ldXVymb.png',
					'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Nurture%20Connect-cPpI8LzGqLghSlYwFKmcJX2ldXVymb.png',
				]}
				/>
			</div>
		</section>
    )
}

export default Projects