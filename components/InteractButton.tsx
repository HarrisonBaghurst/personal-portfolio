import React from 'react'

interface InteractButtonProps {
    text: string;
    onClick: () => void;
}

const InteractButton = ({ text, onClick }: InteractButtonProps) => {
  return (
    <div 
    className="relative px-4 py-2 w-fit text-center cursor-pointer text-white text-md rounded-[100px] font-bold border-2 border-white overflow-hidden 
    hover:scale-[1.025] duration-200 ease-in-out
    before:absolute before:w-0 before:h-[100%] before:top-0 before:left-0 before:z-[-1] before:bg-linear-to-b before:from-blue before:to-blue-grey before:duration-200 before:skew-x-[-20deg] before:translate-x-[-20px]
    hover:before:w-[150%]
    2xl:text-3xl 2xl:px-10 2xl:py-6 2xl:border-3"
    onClick={onClick}
    >
        {text}  
    </div>
  )
}

export default InteractButton