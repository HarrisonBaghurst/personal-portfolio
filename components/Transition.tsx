import { cn } from '@/lib/utils'
import React from 'react'

type TransitionProps = {
  flipped?: boolean;
}

const Transition = ({ flipped }: TransitionProps) => {
  const values = flipped? [80, 60, 40, 20] : [20, 40, 60, 80];

  return (
    <div className='w-full h-fit'>
      {values.map((opacity, i) => (
        <div 
          key={i}
          className={cn('h-[25px] bg-background w-full')}
          style={{ opacity: opacity / 100 }}
        >
        </div>
      ))}
    </div>
  )
}

export default Transition
