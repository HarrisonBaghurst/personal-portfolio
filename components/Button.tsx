'use client'

import React from 'react'

import { useModal } from "@/context/ModalContext"

type ButtonProps = {
    text: string;
    link: string | (() => void);
}

const Button = ({ text, link }: ButtonProps) => {
    const { openModal } = useModal();
    
    return (
        <button
        className='
        paragraph-large rounded-full font-bold bg-light-blue text-foreground border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105 w-fit focus:outline-none focus:ring-4 focus:ring-button-blue select-none
        py-2 px-4 border-[3px]
        2xl:py-4 2xl:px-8 2xl:border-[5px]
        '
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.blur();
            if (typeof link !== "string") {
                link();
                return;
            }
            if (link === 'contact form') {
                openModal();
            }
            if (link[0] !== '/') {
                const sectionElement = document.getElementById(link)
                const yOffset = -100
                if (sectionElement) {
                    const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
                return
            }
        }}
        >
            {text}
        </button>
    )
}

export default Button