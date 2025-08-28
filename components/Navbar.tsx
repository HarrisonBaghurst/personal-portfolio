import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    const linkInfo = [
        {
            "text": "Contact Form",
            "icon": "messages",
        },
        {
            "text": "Menu",
            "icon": "menu-2",
        }
    ]

    return (
        <div className='fixed w-full h-fit flex justify-between items-center text-4xl z-100'>
            <div className='bg-foreground text-background py-4 px-8 rounded-br-3xl cursor-pointer'>
                <p>
                    HarrisonBaghurst.com
                </p>
            </div>
            <div className='bg-foreground text-background px-8 rounded-bl-3xl flex gap-16'>
                {linkInfo.map((link, i) => (
                    <div key={i} className='flex gap-4 items-center cursor-pointer'>
                        <Image 
                        src={`/icons/${link.icon}.svg`}
                        alt='message icon'
                        width={32}
                        height={32}
                        />
                        <div
                        className='py-4'
                        >
                            {link.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar