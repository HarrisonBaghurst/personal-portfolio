import Hero from '@/components/Hero'
import Tutoring from '@/components/Tutoring'
import WebDev from '@/components/WebDev'
import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-col bg-[radial-gradient(circle_at_50%_50dvh,transparent_20dvw,var(--color-button-blue)_80dvw)] text-3xl'>
            <Hero />
            <WebDev />
            <Tutoring />
        </div>
    )
}

export default Page
