import React from 'react'

interface InteractButtonProps {
    text: string;
    onClick: () => void;
}

const InteractButton = ({ text, onClick }: InteractButtonProps) => {
  return (
    <div 
    className="relative px-10 py-6 text-center cursor-pointer text-white text-3xl rounded-[100px] border-none font-bold bg-linear-to-b from-blue-grey to-dark-grey transition-all duration-100 after:content-[''] after:absolute after:inset-0 after:-z-10 after:w-full after:h-full after:bg-[radial-gradient(circle_farthest-corner_at_10%_20%,_rgba(255,94,247,1)_17.8%,_rgba(2,245,255,1)_100.2%)] after:blur-[15px]"
    onClick={onClick}
    >
        {text}
    </div>
  )
}

export default InteractButton