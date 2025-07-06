import React from 'react'
import StarBorder from './blocks/Animations/StarBorder/StarBorder';
import SpotlightCard from './blocks/Components/SpotlightCard/SpotlightCard';

interface InteractButtonProps {
    text: string;
    className: string;
}

const InteractButton = ({ text, className }: InteractButtonProps) => {
  return (
    <StarBorder
    as="button"
    color="cyan"
    className='text-2xl font-bold'
    speed="2.5s"
    thickness={3}
    >
        <SpotlightCard className="h-full w-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            {text}
        </SpotlightCard>
    </StarBorder>
  )
}

export default InteractButton