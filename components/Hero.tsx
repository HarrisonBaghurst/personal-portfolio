'use client'

import { useEffect, useRef, useState } from 'react'
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';
import InteractButton from './InteractButton';
import ContactForm from './ContactForm';

const Hero = () => {
    const [formOpen, setFormOpen] = useState(false);
    const heroTextRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        let ticking = false; 
        const handleScroll = () => {
            if(!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const translateY = -0.5 * scrollY; 
                    if(heroTextRef.current) {
                        heroTextRef.current.style.transform = `translateY(${translateY}px)`
                    }   
                    ticking = false;
                });
                ticking = true; 
            }
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='relative w-full h-screen'>
            <div className='px-[5%] pt-[10%]'>
                <h1 className='text-9xl font-bold'>
                    Hi, I'm Harrison.
                </h1>
                <div className='text-3xl pt-8 flex flex-col gap-2'>
                    <p>
                        I'm a full time Durham university computer science undergraduate. 
                    </p>
                    <p>
                        I offer web development services and GCSE and A-Level tutoring.
                    </p>
                    <p>
                        I enjoy real world projects that make a meaningful positive impact.
                    </p>
                </div>
                <div className='absolute top-[15%] right-[5%]'>
                    <TiltedCard
                    imageSrc="https://vvz9axceq1op6mal.public.blob.vercel-storage.com/IMG-20250706-WA0005%281%29%20%281%29-PrTy2YBMtfARp5lEq2nLMsYc3Sk54b.jpg"
                    altText="Photo of me"
                    containerHeight="400px"
                    containerWidth="400px"
                    imageHeight="400px"
                    imageWidth="400px"
                    rotateAmplitude={8}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                    />
                    <p className='text-3xl text-center pt-15'>
                        Harrison Baghurst
                    </p>
                    <div className='flex justify-center pt-15'>
                        <InteractButton
                        text='Contact Me'
                        onClick={() => setFormOpen(!formOpen)}
                        />
                    </div>
                </div>
                <div className='border-1 w-[70%] h-150 mt-25 rounded-3xl p-8 border-[rgba(255,255,255,0.2)]'>
                    <h2 className='text-4xl font-bold'>
                        Web Development
                    </h2>
                </div>
            </div>
            <ContactForm 
            formOpen={formOpen}
            setFormOpen={() => setFormOpen(!formOpen)}
            />
        </section>


        /*
        <section>
            <div 
            className='w-full h-screen relative overflow-x-hidden'
            >   
                <div 
                ref={heroTextRef}
                className='mt-[15dvh] flex flex-col mx-[5%]'
                >   
                    <div className='grid grid-cols-4'>
                        <div className='col-span-3 flex flex-col'>
                            <h1 className='font-poppins font-bold text-[11rem] text-center'>Harrison Baghurst</h1>
                            <div className='border-2 border-[rgba(255,255,255,0.2)] text-2xl mt-20 p-8 rounded-lg w-full flex flex-col gap-1'>
                                <p className='text-4xl pb-4'>
                                    Hi, I'm Harrison. 
                                </p>  
                                <p>
                                    I'm a full time Durham university computer science undergraduate. 
                                </p>
                                <p>
                                    I offer web development services and GCSE and A-Level tutoring.
                                </p>
                                <div className='w-full mt-16 grid grid-cols-2 gap-16'>
                                    <div className=''>
                                        <p className='text-3xl pb-4'>
                                            Web Development
                                        </p>
                                        <p>
                                            Bring your ideas to life with clean, responsive websites designed to match your vision. 
                                            Whether you need a simple portfolio, a full ecommerce website or a custom web app, I offer complete development sevices using modern technologies. 
                                        </p>
                                    </div>
                                    <div className='w-full'>
                                        <p className='text-3xl pb-4'>
                                            Tutoring
                                        </p>
                                        <p>
                                            Build confidence, master skills and achieve goals with 1-to-1 tuition, tailored for your child's prefered learning style.
                                            Your child's safety is my top priority, for this reason I hold an up-to-date standard DBS check, verifying that I am fully cleared to work with children.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-0 right-0'>
                            <TiltedCard
                            imageSrc="https://vvz9axceq1op6mal.public.blob.vercel-storage.com/IMG-20250706-WA0005%281%29%20%281%29-PrTy2YBMtfARp5lEq2nLMsYc3Sk54b.jpg"
                            altText="Photo of me"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={15}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={false}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-20'>
                        <InteractButton
                        text='Open Contact Form'
                        onClick={() => setFormOpen(!formOpen)}
                        />
                    </div>
                </div>
            </div>
            <ContactForm 
            formOpen={formOpen}
            setFormOpen={() => setFormOpen(!formOpen)}
            />
        </section>
        */
    )
}

export default Hero