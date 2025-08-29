'use client'

import React, { useEffect, useRef, useState } from 'react'
import Transition from './Transition'
import { cn } from '@/lib/utils'

const TutoringPricing = () => {
const pricingOptions = [
    {
      title: "Book individual lessons",
      price: "£20 / hr",
      text: "Perfect if you'd like felxibility without commitment. Individulal lessons are priced at £20 per hour, allowing you to book sessions as and when you need them. This option is idea if you want to try out tutoring before committing to a block or if you're looking for occasional support to target specific topics."
    },
    {
      title: "Save with block payments",
      price: "£18 / hr",
      text: "If you are looking for regular support, block bookings are a more cost-effective option. You can purchase a block of 5 lessons at £19 per hour or a block of 10 lessons at £18 per hour. Blocks give you consistency in your learning while saving on the hourly rate, making them a great choice for long-term exam preparation or steady progress in maths and programming."
    },
  ]

  const [activeCard, setActiveCard] = useState<number>(0)
  const [heights, setHeights] = useState<number[]>([])
  const contentRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const newHeights = contentRefs.current.map((el) => el?.scrollHeight || 0)
    setHeights(newHeights)
  }, [])

  return (
    <div className='bg-light-blue'>
      <Transition flipped={true} />

      <div className='p-32 grid grid-cols-2 gap-32 text-3xl h-200'>
        <div className='flex items-center'>
          <div className='flex flex-col gap-12 text-background'>
            {pricingOptions.map((option, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(i)}
                className={cn(
                  "bg-foreground p-8 rounded-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-4xl font-enorm">{option.title}</h3>
                  <h3 className="text-3xl">{option.price}</h3>
                </div>
                <div
                  ref={(el) => { contentRefs.current[i] = el! }}
                  style={{
                    height: activeCard === i ? heights[i] || 0 : 0,
                    opacity: activeCard === i ? 1 : 0,
                    marginTop: activeCard === i ? '1rem' : '0',
                    transition: 'height 0.5s ease, opacity 0.5s ease, margin 0.5s ease'
                  }}
                >
                  <p className="text-2xl">{option.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex flex-col gap-12'>  
            <div>
              <h2 className='text-8xl h-30 flex items-center font-enorm bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                Lesson Pricing
              </h2>
              <p className='font-bold'>
                Invest in your learning with straightforward pricing
              </p>
            </div>
            <p className='text-2xl'>
              I believe quality tutoring should be clear and accessible. 
              My pricing is straightforward, with flexible options to suit different learning needs -
              Whether you're preparing for exams, building confidence in a subject or developing new skills.
            </p>
            <div className='w-fit py-4 px-8 rounded-full font-bold border-[5px] border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105'>
              Contact Me
            </div>
          </div>
        </div>
      </div>

      <Transition />
    </div>
  )
}

export default TutoringPricing
