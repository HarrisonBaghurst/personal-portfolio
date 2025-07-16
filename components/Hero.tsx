'use client'

import { useEffect, useRef, useState } from 'react'
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';
import InteractButton from './InteractButton';
import ContactForm from './ContactForm';
import Technologies from './Technologies';
import Navbar from './Navbar';

const Hero = () => {
    const [pageType, setPageType] = useState<'webDev' | 'tutoring'>('tutoring')

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
        <section className='relative w-full'>
            <Navbar 
            onChange={(newPageType) => setPageType(newPageType)}
            />
            <div className='px-30 pt-45'>
                <h1 className='text-9xl font-bold'>
                    Hi, I'm Harrison.
                </h1>
                <div className='text-2xl pt-8'>
                    <p>
                        I'm a full time Durham university computer science undergraduate. 
                    </p>
                    <p>
                        I offer web development services and GCSE and A-Level tutoring.
                    </p>
                </div>
                <div className='absolute top-50 right-30'>
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
                <div className='border-1 w-[70%] mt-15 rounded-3xl p-8 border-[rgba(255,255,255,0.2)] relative'>
                    {pageType === 'webDev' && (
                        <div>
                            <h2 className='text-5xl font-bold'>
                                Web Development
                            </h2>
                            <div className='text-2xl pt-8 flex flex-col gap-8'>
                                <p>
                                    Bring your ideas to life with clean, responsive websites designed to match your vision. 
                                    Whether you need a simple portfolio, a full ecommerce website or a custom web app, I offer complete development sevices using modern technologies. 
                                </p>
                                <p>
                                    All projects are built from the ground up to your specifications. 
                                    This results in pricing and development time varying largely from one project to the next. 
                                    If you would like more information or a free quote for your project, feel free to contact me to arrange a meeting. 
                                </p>
                            </div>
                            <div className='mt-10 border-2 border-[rgba(255,255,255,0.2)] bottom-8 py-4 rounded-lg w-full'>
                                <Technologies />
                            </div>
                        </div>
                    )}
                    {pageType === 'tutoring' && (
                        <div>
                            <h2 className='text-5xl font-bold'>
                                Tutoring
                            </h2>
                            <div className='text-2xl pt-8 flex flex-col gap-8'>
                                <p>
                                    Build confidence, master skills and achieve goals with 1-to-1 tuition, tailored for your child's prefered learning style.
                                    Your child's safety is my top priority, for this reason I hold an up-to-date standard DBS check, verifying that I am fully cleared to work with children.
                                    All lessons are conducted in an online video call and are usually an hour long. 
                                </p>
                                <div className='grid grid-cols-2 gap-16 pt-5'>  
                                    <div className='flex flex-col gap-8'>
                                        <div>
                                            <p className='text-4xl font-bold pb-5'>Mathematics</p>
                                            <div className='flex gap-4 pb-5'>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>GCSE</p>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>A-Level</p>
                                            </div>
                                            <p>
                                                Revise topics of your choice, get ahead with lessons or prep for exams with past papers. 
                                            </p>
                                        </div>
                                        <div>
                                            <p className='text-4xl font-bold pb-5'>Python Programming</p>
                                            <div className='flex gap-4 pb-5'>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>GCSE</p>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>A-Level</p>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>Independent</p>
                                            </div>
                                            <p>
                                                Improve your skills alongside your education or learn from basics to add programming to your toolbelt. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <p className='text-4xl font-bold'>Pricing</p>
                                        <p>
                                            I offer your first lesson free to give you the opportunity to experience my teaching style with no commitments.
                                        </p>
                                        <p>
                                            All lessons after the first: £20/hr
                                        </p>
                                        <p>
                                            Save money by purchasing multiple lessons at once:
                                        </p>
                                        <div className='flex flex-col pl-4 gap-1'>
                                            <p>
                                                • 5 hours - £95 (£19/hr)
                                            </p>
                                            <p>
                                                • 10 hours - £180 (£18/hr)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ContactForm 
            formOpen={formOpen}
            setFormOpen={() => setFormOpen(!formOpen)}
            />
        </section>
    )
}

export default Hero