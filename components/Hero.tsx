'use client'

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import Image from "next/image";
import InteractButton from "./InteractButton";

const Hero = () => {
    const headingTextRef = useRef<HTMLHeadingElement>(null);
    const paragraphTextRef = useRef<HTMLParagraphElement>(null);
    const aboveTextRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const headingWords = headingTextRef.current?.querySelectorAll('.heading-word');
        const paragraphWords = paragraphTextRef.current?.querySelectorAll('.paragraph-word');

        const tl = gsap.timeline();

        if (headingWords) {
            headingWords.forEach((word, i) => {
                const direction = i % 2 === 0 ? 15 : -15;

                tl.fromTo(
                    word,
                    { x: 200, opacity: 0, rotate: direction },
                    { x: 0, opacity: 1, rotate: 0, duration: 1, ease: "power2.out" },
                    i * 0.5
                );
            })
        }
        if (paragraphWords) {
            tl.fromTo(
                paragraphWords,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.1 }
            );
        }
        tl.add('finalFadeIn');
        if (aboveTextRef.current) {
            tl.fromTo(
                aboveTextRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.1 },
                'finalFadeIn'
            );
        }
        if (buttonRef.current) {
            tl.fromTo(
                buttonRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.1 },
                'finalFadeIn'
            );
        }
        const imageTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
        if (imageRef.current) {
            imageTl.to(imageRef.current, {
                rotation: 360,
                duration: 1,
                ease: 'power2.inOut'
            })
        }
    }, []);

    const headingText = "Hi, I'm Harrison"
    const paragraphText = "I'm a Durham university computer science undergraduate. I offer GCSE and A-Level tutoring and web development services."

    return (
        <section className='relative w-full h-screen flex justify-center items-center overflow-hidden'>
            <div className='flex flex-col w-fit text-2xl'>
                <div 
                ref={aboveTextRef}
                className="flex justify-center gap-4 under-text mb-8 text-grey"
                >
                    <Image 
                        ref={imageRef}
                        src={'/icons/inner-shadow-bottom-left.svg'}
                        alt="dot"
                        width={20}
                        height={20}
                    />
                    <p className="text-2xl">
                        Taking new Tutees and Web projects
                    </p>
                </div>
                <h1 
                ref={headingTextRef}
                className='text-9xl font-bold mb-8 glow-text flex gap-8'
                >
                    {headingText.split(' ').map((word, i) => (
                        <span key={i} className="inline-block heading-word">
                            {word}
                        </span>
                    ))}
                </h1>
                <div className='flex justify-center text-grey'>
                    <div className="w-200">
                        <p 
                        ref={paragraphTextRef}
                        className="flex gap-x-2 flex-wrap mb-8"
                        >
                            {paragraphText.split(' ').map((word, i) => (
                                <span key={i} className="inline-block paragraph-word">
                                    {word}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                <div 
                ref={buttonRef}
                className="flex justify-center mt-4"
                >
                    <InteractButton 
                        text="Contact Me"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </section>
    )
}
                {/*
                <div className='relative pt-5
                2xl:block 2xl:absolute 2xl:top-50 2xl:right-16 2xl:pt-0'>
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
                        <div 
                        className='flex justify-center cursor-pointer mt-15'
                        onClick={sendToGithub}
                        >
                            <div className='flex gap-2 items-center'>
                                <Image 
                                src={'icons/brand-github.svg'}
                                alt='construction image'
                                width={32}
                                height={32}
                                />
                                <p 
                                className='text-2xl'
                                >
                                    GitHub.com/HarrisonBaghurst
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center pt-15'>
                            <InteractButton
                            text='Contact Me'
                            onClick={() => setFormOpen(!formOpen)}
                            />
                        </div>
                    </div>
                    <div className='flex 2xl:hidden justify-evenly gap-5 items-center'>
                        <div className='flex flex-col '>
                            <p 
                            className='text-sm text-center pb-4 cursor-pointer'
                            onClick={sendToGithub}
                            >
                                View my Github
                            </p>
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
                */}
                {/*
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
                */}

export default Hero