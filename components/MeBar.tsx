import React from 'react'
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard'
import Image from 'next/image'

const MeBar = () => {
    return (
        <section className='mt-20 fixed text-sm right-0 rounded-t-[200px] rounded-b-2xl overflow-hidden h-12 z-50 w-[calc(100dvw-var(--spacing)*8)] flex justify-between border-1 border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl bg-[rgba(200,200,200,0.1)]
        2xl:text-2xl 2xl:w-90 2xl:h-[calc(100dvh-var(--spacing)*35)] 2xl:mt-27'>
            <div className='flex flex-col mx-4'>
                <div className='w-full mt-4 flex justify-center pb-8'>
                    <TiltedCard
                        imageSrc="https://vvz9axceq1op6mal.public.blob.vercel-storage.com/IMG-20250706-WA0005%281%29%20%281%29.jpg"
                        altText="Photo of me"
                        containerHeight="calc(var(--spacing)*82)"
                        containerWidth="calc(var(--spacing)*82)"
                        imageHeight="calc(var(--spacing)*82)"
                        imageWidth="calc(var(--spacing)*82)"
                        rotateAmplitude={8}
                        scaleOnHover={1.025}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                    />
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-4 text-base'>
                        <div className='flex gap-2 items-center'>
                            <Image 
                                src={'/icons/brand-github.svg'}
                                alt='github icon'
                                width={24}
                                height={24}
                            />
                            <p>
                                GitHub.com/HarrisonBaghurst
                            </p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Image 
                                src={'/icons/brand-linkedin.svg'}
                                alt='github icon'
                                width={24}
                                height={24}
                            />
                            <p>
                                LinkedIn.com/in/Harrison-Baghurst
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MeBar