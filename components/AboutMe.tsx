import Image from 'next/image'
import React from 'react'
import ScrolledInText from './ScrolledInText'

const AboutMe = () => {
    return (
        <div 
        id='about-me'
        className='
        flex
        px-6 gap-12 flex-col
        2xl:px-32 2xl:gap-32 2xl:flex-row
        '>
            <div className='flex items-center flex-[3]'>
                <div className='
                flex flex-col
                gap-8
                2xl:gap-12
                '>  
                    <div>
                        <ScrolledInText 
                        text='About Me'
                        size='regular'
                        center={false}
                        />
                        <p className='font-bold paragraph-large'>
                            Dedicated to helping students achieve their best
                        </p>
                    </div>
                    <div className='
                    flex flex-col 
                    gap-2
                    2xl:gap-4
                    '>
                        <p className='font-bold font-enorm paragraph-large'>
                            Academic Background
                        </p>
                        <p className='paragraph-small'>
                            I'm Harrison Baghurst, a Maths and Programming tutor specialising in GCSE and A-Level.
                            I'm currently in my second year studying Computer Science at Durham University, building on the strong foundation I gained at A-Level.  
                        </p>
                    </div>
                    <div className='
                    flex flex-col
                    gap-2
                    2xl:gap-4
                    '>
                        <p className='font-bold font-enorm paragraph-large'>
                            My Teaching Approach
                        </p>
                        <p className='paragraph-small'>
                            With real-world tutoring experience, I focus on breaking down complex ideas into simple, managable steps.
                            My lesson are always tailored to each students goals - whether that's boosting exam grades, building confidence or learing coding as a new skill.
                            I also hold a standard DBS check and the safety and wellbeing of my tutees is always of the utmost importance.
                            I'm passionate to help each and every learner achieve their maximum potential and enjoy the process.
                        </p>
                    </div>
                    <div className='
                    grid grid-cols-2 gap-4
                    2xl:flex 2xl:gap-8
                    '>
                        {['Maths • A*', 'Comp Sci • A', 'Further Maths • B', 'Physics • B'].map((text, i) => (
                            <div 
                            key={i}
                            className='
                            bg-foreground text-background text-center w-full rounded-md font-enorm paragraph-large
                            p-2
                            2xl:p-4
                            '>
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