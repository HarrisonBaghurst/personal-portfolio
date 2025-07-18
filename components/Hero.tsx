'use client'

import { useEffect, useRef, useState } from 'react'
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';
import InteractButton from './InteractButton';
import ContactForm from './ContactForm';
import Technologies from './Technologies';

interface HeroProps {
    pageType: 'webDev' | 'tutoring';
}

const Hero = ({ pageType }: HeroProps) => {
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
        <section className='relative w-full pb-4 2xl:pb-8'>
            <div className='px-4 pt-25
            2xl:px-30 2xl:pt-45'>
                <div className='flex justify-center pb-5 font-bold 2xl:pb-10'>
                    <p className='text-sm 2xl:text-2xl border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px] w-fit'>
                        Website under construction
                    </p>
                </div>
                <h1 className='text-4xl font-bold
                2xl:text-9xl'>
                    Hi, I'm Harrison.
                </h1>
                <div className='text-sm pt-4
                2xl:text-2xl 2xl:pt-8'>
                    <p>
                        I'm a full time Durham university computer science undergraduate. 
                    </p>
                    <p>
                        I offer web development services and GCSE and A-Level tutoring.
                    </p>
                </div>
                <div className='relative pt-5
                2xl:block 2xl:absolute 2xl:top-50 2xl:right-30 2xl:pt-0'>
                    <div className='hidden 2xl:block'>
                        <TiltedCard
                        imageSrc="https://vvz9axceq1op6mal.public.blob.vercel-storage.com/IMG-20250706-WA0005%281%29%20%281%29.jpg"
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
                    <div className='flex 2xl:hidden justify-evenly gap-5 items-center'>
                        <div className='flex flex-col '>
                            <p className='text-sm text-center pb-4'>Github Link</p>
                            <InteractButton
                            text='Contact Me'
                            onClick={() => setFormOpen(!formOpen)}
                            />
                        </div>
                        <TiltedCard
                        imageSrc="https://vvz9axceq1op6mal.public.blob.vercel-storage.com/IMG-20250706-WA0005%281%29%20%281%29.jpg"
                        altText="Photo of me"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={8}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                        />
                    </div>
                    
                </div>
                <div className='border-1 w-[100%] mt-10 rounded-3xl p-5 border-[rgba(255,255,255,0.2)] relative
                2xl:w-[70%] 2xl:mt-15 2xl:p-8'>
                    {pageType === 'webDev' && (
                        <div>
                            <h2 className='text-3xl font-bold
                            2xl:text-5xl'>
                                Web Development
                            </h2>
                            <div className='text-sm pt-8 flex flex-col gap-8
                            2xl:text-2xl'>
                                <p>
                                    Bring your ideas to life with clean, responsive websites designed to match your vision. 
                                    Whether you need a simple portfolio, a full ecommerce website or a custom web app, I offer complete development sevices using modern technologies. 
                                </p>
                                <div className='flex flex-col'>
                                    <p className='text-2xl pb-2 font-bold
                                    2xl:text-4xl 2xl:pb-4'>
                                        Services
                                    </p>
                                    <div className='flex gap-2 flex-wrap
                                    2xl:gap-4'>
                                        {['Custom web design & development', 'Responsive design for all devices', 'E-commerce solutions', 'Web apps & dashboards']
                                        .map((text, index) => (
                                            <p 
                                            className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'
                                            key={index}
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-2xl pb-2 font-bold
                                    2xl:text-4xl 2xl:pb-4'>
                                        My Process
                                    </p>
                                    <p>
                                        Start with a free consultation and get a quote for your project. 
                                        The project may be split into stages depending on the scale.
                                        I will give you ways to monitor the projects development as I work and I am happy to recieve ongoing suggestions as I progress. 
                                        At the end of the project or each stage I will factor in time to make any changes you might require.
                                        I will also have a contracted time after the projects completion to fix any issues that might arise.
                                        I will guide you through the launch of your project or host the project for you if you wish.
                                    </p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-2xl pb-2 font-bold
                                    2xl:text-4xl 2xl:pb-4'>
                                        Pricing
                                    </p>
                                    <p>
                                        All projects are built from the ground up to your specifications. 
                                        This results in pricing and development time varying largely from one project to the next. 
                                        If you would like more information or a free quote for your project, feel free to contact me to arrange a meeting. 
                                        Payments are made at the begining of your project or at the start of each stage if the poject is split into stages.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-10 border-2 border-[rgba(255,255,255,0.2)] bottom-8 py-4 rounded-lg w-full'>
                                <Technologies />
                            </div>
                        </div>
                    )}
                    {pageType === 'tutoring' && (
                        <div>
                            <h2 className='text-3xl font-bold
                            2xl:text-5xl'>
                                Tutoring
                            </h2>
                            <div className='text-sm pt-8 flex flex-col gap-8
                            2xl:text-2xl'>
                                <p>
                                    Build confidence, master skills and achieve goals with 1-to-1 tuition, tailored for your child's prefered learning style.
                                    Your child's safety is my top priority, for this reason I hold an up-to-date standard DBS check, verifying that I am fully cleared to work with children.
                                    All lessons are conducted in an online video call and are usually an hour long. 
                                </p>
                                <div className='flex flex-col gap-8 pt-0
                                2xl:grid 2xl:grid-cols-2 2xl:pt-5 2xl:gap-16'>  
                                    <div className='flex flex-col gap-8'>
                                        <div>
                                            <p className='text-2xl font-bold pb-2
                                            2xl:text-4xl 2xl:pb-5'>Mathematics</p>
                                            <div className='flex gap-2 pb-2
                                            2xl:gap-4 2xl:pb-5'>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>GCSE</p>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>A-Level</p>
                                            </div>
                                            <p>
                                                Revise topics of your choice, get ahead with lessons or prep for exams with past papers. 
                                            </p>
                                        </div>
                                        <div>
                                            <p className='text-2xl font-bold pb-2
                                            2xl:text-4xl 2xl:pb-5'>Python Programming</p>
                                            <div className='flex gap-2 pb-2
                                            2xl:gap-4 2xl:pb-5'>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>GCSE</p>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>A-Level</p>
                                                <p className='border-2 border-[rgba(255,255,255,0.2)] px-3 py-1 rounded-[100px]'>Independent</p>
                                            </div>
                                            <p>
                                                Improve your skills alongside your education or learn from basics to add programming to your toolbelt. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3
                                    2xl:gap-5'>
                                        <p className='text-2xl font-bold
                                        2xl:text-4xl'>Pricing</p>
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