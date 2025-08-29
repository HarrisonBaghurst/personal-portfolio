import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
    return (
        <div className='p-32 flex gap-32 text-2xl'>
            <div className='flex items-center flex-[3]'>
                <div className='flex flex-col gap-12'>  
                    <div>
                        <h2 className='text-8xl h-30 flex items-center font-enorm bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                            About Me
                        </h2>
                        <p className='font-bold text-3xl'>
                            Dedicated to helping students achieve their best
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold font-enorm text-3xl'>
                            Academic Background
                        </p>
                        <p>
                            I'm Harrison Baghurst, a Maths and Programming tutor specialising in GCSE and A-Level.
                            I'm currently in my second year studying Computer Science at Durham University, building on the strong foundation I gained at A-Level.  
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold font-enorm text-3xl'>
                            My Teaching Approach
                        </p>
                        <p>
                            With real-world tutoring experience, I focus on breaking down complex ideas into simple, managable steps.
                            My lesson are always tailored to each students goals - whether that's boosting exam grades, building confidence or learing coding as a new skill.
                            I also hold a standard DBS check and the safety and wellbeing of my tutees is always of the utmost importance.
                            I'm passionate to help each and every learner achieve their maximum potential and enjoy the process.
                        </p>
                    </div>
                    <div className='flex gap-8'>
                        {['Maths • A*', 'Comp Sci • A', 'Further Maths • B', 'Physics • B'].map((text, i) => (
                            <div 
                            key={i}
                            className='bg-foreground text-background text-center w-full rounded-md p-2 font-enorm'
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full aspect-1/1 rounded-2xl overflow-hidden relative flex-[2]'>
                <Image 
                src={'https://vvz9axceq1op6mal.public.blob.vercel-storage.com/IMG-20250706-WA0005%281%29%20%281%29.jpg'}
                alt='Harrison Baghurst'
                fill
                />
            </div>
        </div>
    )
}

export default AboutMe