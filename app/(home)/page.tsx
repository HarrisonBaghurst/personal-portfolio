import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Tutoring from '@/components/Tutoring'
import WebDev from '@/components/WebDev'
import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-col w-full overflow-hidden
        bg-[radial-gradient(circle_at_50%_50dvh,transparent_20dvh,var(--color-button-blue)_80dvh)]
        2xl:bg-[radial-gradient(circle_at_50%_50dvh,transparent_20dvw,var(--color-button-blue)_80dvw)]
        '>
            <Hero />
            <WebDev />
            <Tutoring />
            <Footer />
        </div>
    )
}

export default Page
