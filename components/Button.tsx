import React from 'react'

type ButtonProps = {
    text: string;
    link: string;
}

const Button = ({ text, link }: ButtonProps) => {
    return (
        <div
        className='
        paragraph-large rounded-full font-bold border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105 w-fit
        py-2 px-4 border-[3px]
        2xl:py-4 2xl:px-8 2xl:border-[5px]
        '>
            {text}
        </div>
    )
}

export default Button