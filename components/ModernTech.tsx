import React from 'react'
import Transition from './Transition'
import Image from 'next/image'
import ScrolledInText from './ScrolledInText'

const ModernTech = () => {
    return (
        <div className='bg-light-blue'>
            <Transition 
            flipped={true}
            />
            <div className='
            grid
            px-6 py-12 grid-cols-1 gap-8
            2xl:p-32 2xl:grid-cols-2 2xl:gap-32
            '>
                <div className='flex items-center'>
                    <div className='
                    flex flex-col  
                    gap-6
                    2xl:gap-12
                    '>  
                        <div>
                            <ScrolledInText 
                            text={'Modern Technologies'} 
                            size={'regular'} 
                            center={false} 
                            />
                            <p className='font-bold paragraph-large'>
                                Future-proof solutions for your business
                            </p>
                        </div>
                        <p className='paragraph-small'>
                            I use the latest technologies like Next.js for fast, scalable websites and GSAP for smooth, eye-catching animations.
                            This ensures your site not only performs at a high level but also feels engaging and modern for your visitors.
                        </p>
                        <div className='
                        grid grid-cols-3 paragraph-large
                        gap-4
                        2xl:gap-8
                        '>
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