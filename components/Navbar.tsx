import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <section 
        className='fixed text-2xl items-center px-[5%] h-15 z-100 w-full flex justify-center border-b-1 border-[rgba(255,255,255,0.1)] backdrop-filter backdrop-blur-xl gap-[3%]'
        >   
            <div className='flex gap-2 items-center'>
                <Image 
                src={'/icons/device-desktop.svg'}
                alt='app icon'
                width={32}
                height={32}
                />
                <p>Web Design</p>
            </div>
            <div className='flex gap-2 items-center'>
                <Image 
                src={'/icons/book-2.svg'}
                alt='app icon'
                width={32}
                height={32}
                />
                <p>Tutoring</p>
            </div>
            <div className='flex gap-2 items-center'>
                <Image 
                src={'/icons/mail.svg'}
                alt='app icon'
                width={32}
                height={32}
                />
                <p>Contact Form</p>
            </div>
        </section>
    )
}

export default Navbar