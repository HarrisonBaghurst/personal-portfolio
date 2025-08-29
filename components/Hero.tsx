import React from 'react'
import Transition from './Transition'

const Hero = () => {
    return (
        <section>
            <div className='h-screen w-full text-4xl relative'>
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='flex flex-col gap-6 w-fit'>
                        <h1 className='text-9xl font-enorm bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                            Hi, I'm Harrison
                        </h1>
                        <div className='flex justify-center'>
                            <div className='flex gap-4 font-bold'>
                                Your next Web Developer & Tutor
                            </div>
                        </div>
                        <div className='flex justify-center pt-12 gap-12'>
                            {['Web Development', 'Tutoring Services'].map((text, i) => (
                                <div
                                key={i}
                                className='py-4 px-8 rounded-full font-bold border-[5px] border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105'
                                >
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Transition />
        </section>
    )
}

export default Hero