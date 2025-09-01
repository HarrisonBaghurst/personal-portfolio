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
        <div className='fixed w-full h-fit flex justify-between items-center z-100 paragraph-large'>
            <div className='bg-foreground text-background cursor-pointer border-background 
            py-2 px-3 border-b-[2px] border-r-[2px] rounded-br-lg 
            2xl:py-4 2xl:px-8 2xl:border-b-[5px] 2xl:border-r-[5px] 2xl:rounded-br-3xl
            '>
                <p>
                    HarrisonBaghurst.com
                </p>
            </div>
            <div className='bg-foreground text-background cursor-pointer border-background flex 
            py-2 px-3 border-b-[2px] border-l-[2px] rounded-bl-lg gap-4 
            2xl:py-4 2xl:px-8 2xl:border-b-[5px] 2xl:border-l-[5px] 2xl:rounded-bl-3xl 2xl:gap-16
            '>
                {linkInfo.map((link, i) => (
                    <div key={i} className='flex gap-4 items-center cursor-pointer'>
                        <div className='hidden 2xl:inline'>
                            <Image 
                            src={`/icons/${link.icon}.svg`}
                            alt='message icon'
                            width={30}
                            height={30}
                            />
                        </div>
                        <div
                        className=''
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