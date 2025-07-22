'use client'

import React from 'react'
import CircularGallery from './blocks/Components/CircularGallery/CircularGallery'
import Image from 'next/image';

const Projects = () => {
	const images = [
		[
			'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-17%20213821.png',
			'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-17%20214027.png',
			'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-17%20214123.png',
			'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-17%20214245.png',
		],
		[
			'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-20%20145100.png',
			'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-20%20145117.png',
			'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-20%20145133.png',
			'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/Screenshot%202025-07-20%20145146.png',
		]
	]

    return (
		<section className='w-full relative mt-10 2xl:mt-25 pb-4 2xl:pb-16'>
			<div className='absolute w-full -translate-y-[20%]'>
				<div className='flex gap-4 items-center justify-center'>
					<div className='relative w-10 h-10 2xl:w-15 2xl:h-15'>
						<Image 
						src={'/img/nurtureDurhamLogo.png'}
						alt='nurture durham logo'
						fill
						/>
					</div>
					<p className='text-3xl font-bold
					2xl:text-5xl'>
						Nurture Connect
					</p>
				</div>
			</div>
			<div className='hidden 2xl:block'>
				<div className='relative h-[500px]'>
						<CircularGallery 
						bend={2} 
						textColor="#ffffff" 
						borderRadius={0.01} 
						scrollEase={0.01}
						font='font-poppins'
						items={images[0]}
						/>
				</div>
			</div>
			<div className='block 2xl:hidden'>
				<div className='relative h-[300]'>
						<CircularGallery 
						bend={0.25} 
						textColor="#ffffff" 
						borderRadius={0.01} 
						scrollEase={0.1}
						font='font-poppins'
						items={images[0]}
						/>
				</div>
			</div>
			<div className='px-4 text-sm
            2xl:px-30 2xl:text-2xl'>
				<div className='flex flex-col gap-8
				2xl:grid 2xl:grid-cols-2 2xl:gap-16'>
					<div>
						<p className='text-2xl pb-2 2xl:text-4xl 2xl:pb-5 font-bold'>
							Overview
						</p>
						<p>
							Nurture Durham's video conferencing and scheduling web app. 
							This project is built using NextJS and Tailwind.
							It makes use of get streams video and audio sdk and clerk for user managements and accounts.
						</p>
					</div>
					<div>
						<p className='text-2xl pb-2 2xl:text-4xl 2xl:pb-5 font-bold'>
							Testimonial
						</p>
						<p>
							"
							Harrison was a joy to work with. 
							He showed great aptitude, curiosity and, most importantly to me, dedication, resulting in an outstanding tutoring platform. 
							He responded to queries and comments swiftly, worked hard consistently to learn new ideas, and was incredibly empathetic to my wants and needs. 
							He is skilful, practical and reliable - I couldn’t recommend him enough!
							" - Ashwin Bhat (Nurture Durham Founder)
						</p>
					</div>
				</div>
			</div>
			<div className='pt-20 2xl:pt-60'>
				<div className='absolute w-full -translate-y-[20%]'>
					<div className='flex gap-4 items-center justify-center'>
						<div className='relative w-10 h-10 2xl:w-15 2xl:h-15 overflow-hidden rounded-lg'>
							<Image 
							src={'/img/carCutsLogo.ico'}
							alt='nurture durham logo'
							fill
							/>
						</div>
						<p className='text-3xl font-bold
						2xl:text-5xl'>
							CarCuts.co.uk
						</p>
					</div>
				</div>
				<div className='hidden 2xl:block'>
					<div className='relative h-[500px]'>
							<CircularGallery 
							bend={2} 
							textColor="#ffffff" 
							borderRadius={0.01} 
							scrollEase={0.01}
							font='font-poppins'
							items={images[1]}
							/>
					</div>
				</div>
				<div className='block 2xl:hidden'>
					<div className='relative h-[300]'>
							<CircularGallery 
							bend={0.25} 
							textColor="#ffffff" 
							borderRadius={0.01} 
							scrollEase={0.1}
							font='font-poppins'
							items={images[1]}
							/>
					</div>
				</div>
				<div className='px-4 text-sm
				2xl:px-30 2xl:text-2xl'>
					<div className='flex flex-col gap-8
					2xl:grid 2xl:grid-cols-2 2xl:gap-16'>
						<div>
							<p className='text-2xl pb-2 2xl:text-4xl 2xl:pb-5 font-bold'>
								Overview
							</p>
							<p>
								Car Cuts' sales and portfolio website. 
								This project is built using NextJS and Tailwind.
								It makes use of Resend for email sending and Upstash Redis for rate limiting. 
							</p>
						</div>
						<div>
							<p className='text-2xl pb-2 2xl:text-4xl 2xl:pb-5 font-bold'>
								Testimonial
							</p>
							<p>
								"
								If you need a web developer who takes the stress out of it, choose Harrison Baghurst! 
								I had no design concepts, but he stepped right in, helping with colors, web page styles, and all the design ideas. 
								The website is still under construction, but it's already looking incredible, thanks to their helpful and knowledgeable guidance. 
								The whole journey has been seamless!
								" - Jason (Car Cuts Owner)
							</p>
						</div>
					</div>
				</div>
			</div>			
		</section>
    )
}

export default Projects