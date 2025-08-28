import React from 'react'
import Transition from './Transition'
import Image from 'next/image'

const ModernTech = () => {
    return (
        <div className='bg-light-blue'>
            <Transition 
            flipped={true}
            />
            <div className='p-32 grid grid-cols-2 gap-32 text-3xl'>
                <div className='flex items-center'>
                    <div className='flex flex-col gap-12'>  
                        <div>
                            <h2 className='text-8xl h-30 flex items-center font-enorm bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                                Modern Technologies
                            </h2>
                            <p className='font-bold'>
                                Future-proof solutions for your business
                            </p>
                        </div>
                        <p className='text-2xl'>
                            I use the latest technologies like Next.js for fast, scalable websites and GSAP for smooth, eye-catching animations.
                            This ensures your site not only performs at a high level but also feels engaging and modern for your visitors.
                        </p>
                        <div className='grid grid-cols-3 gap-8'>
                            {['Next.js', 'GSAP', 'Resend', 'GetStream', 'Redis', 'Supabase', 'Vercel'].map((tech, i) => (
                                <div key={i} className='font-bold text-center p-2 bg-foreground text-background rounded-lg font-enorm'>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-full aspect-16/10 rounded-2xl overflow-hidden relative'>
                    <Image 
                    src={'/img/imac-mockup.png'}
                    alt='macbook mockup'
                    fill
                    />
                </div>
            </div>
            <Transition />
        </div>
    )
}

export default ModernTech