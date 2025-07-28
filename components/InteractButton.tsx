import React from 'react'

interface InteractButtonProps {
    text: string;
    onClick: () => void;
}

const InteractButton = ({ text, onClick }: InteractButtonProps) => {
  return (
    <button 
    className="relative px-4 py-2 w-fit text-center cursor-pointer text-white text-xs rounded-[100px] font-bold border-2 border-white overflow-hidden
    hover:scale-[1.025] duration-200 ease-in-out
    before:absolute before:w-0 before:h-[100%] before:top-0 before:left-0 before:z-[-1] before:bg-linear-to-b before:from-green before:to-blue-grey before:duration-200 before:skew-x-[-20deg] before:translate-x-[-20px]
    hover:before:w-[150%]
    md:text-base
    2xl:text-2xl 2xl:px-8 2xl:py-3 2xl:border-3"
    onClick={onClick}
    >
      {text}  
    </button>
  )
}

export default InteractButton