'use client'

import React, { useEffect, useRef, useState } from 'react'
import Transition from './Transition'
import { cn } from '@/lib/utils'
import ScrolledInText from './ScrolledInText'

const HowItWorks = () => {
const pricingOptions = [
    {
      title: "Lesson format",
      text: "Lessons are delivered online using video conferencing tools, with screen sharing and a digital whiteboard to make explanations clear and interactive. Sessions typically last an hour but can be extended if needed to cover more complex topics. After each lesson, I can provide practice questions or notes to help reinforce what we've covered."
    },
    {
      title: "Flexibility",
      text: "I understand that schedules can change, so lessons can be rearranged if needed. If you're unable to attend a session, just let me know in advance and we'll find a suitable alternative time. This flexible approach ensures that you learning fits smoothly around your other commitments."
    },
    {
      title: "Payment options",
      text: "Payments can be made securely by bank transfer or PayPal. You can choose to pay per lesson, or save by purchasing a block of lessons in advance. All payment details are provided clearly with no hidden fees."
    },
    {
      title: "Getting started",
      text: "Getting started is simple. Just reach out through the contact form to arrange your first lesson. We'll discuss your goals, current level and any specific areas you'd like to focus on. From there, we'll set up your first session and begin building a plan tailored to your needs."
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

      <div className='p-32 grid grid-cols-2 gap-32 text-3xl h-250'>
        <div className='flex items-center'>
        <div className='flex flex-col gap-12'>  
            <div>
              <ScrolledInText 
              text='How It Works'
              size='regular'
              center={false}
              />
            <p className='font-bold'>
                Simple, flexible and tailored to you
            </p>
            </div>
            <p className='text-2xl'>
                All lesson take place online, making them convenient and accessible wherever you are. 
                Sessions are typically one hour long, with the option to extend if needed. 
                Before starting, we'll discuss your goals and current level to create a personalised learning plan. 
                Each lesson combines clear explanations, worked examples and practice questions, ensuring you fully understand the material. 
                Whether you're preparing for exams or learning programming as a new skill, the pace and focus of lessons are always tailored to you.
            </p>
            <div className='w-fit py-4 px-8 rounded-full font-bold border-[5px] border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105'>
            Contact Me
            </div>
        </div>
        </div>
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
                <h3 className="text-4xl font-enorm">{option.title}</h3>
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
      </div>

      <Transition />
    </div>
  )
}

export default HowItWorks