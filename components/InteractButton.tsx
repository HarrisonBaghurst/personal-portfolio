import React from 'react'

interface InteractButtonProps {
    text: string;
    onClick: () => void;
}

const InteractButton = ({ text, onClick }: InteractButtonProps) => {
  return (
    <div 
    className="relative px-10 py-6 w-fit text-center cursor-pointer text-white text-3xl rounded-[100px] font-bold border-3 border-white overflow-hidden 
  hover:scale-[1.025] duration-200 ease-in-out
  before:absolute before:w-0 before:h-[100%] before:top-0 before:left-0 before:z-[-1] before:bg-linear-to-b before:from-blue before:to-blue-grey before:duration-200 before:skew-x-[-20deg] before:translate-x-[-20px]
  hover:before:w-[150%]"
    onClick={onClick}
    >
        {text}  
    </div>
  )
}

export default InteractButton