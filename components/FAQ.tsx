'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Transition from './Transition'

const FAQ = () => {
  const questions = [
    {
      question: "How long does it take?",
      answer: "Project timelines very based on size and complexity. Simple portfolio sites usually take 2-4 weeks, e-commerce sites 8-12 weeks and complex web applications may take longer. A detailed timeline is provided after we discuss your project."
    },
    {
      question: "Can I update my website myself?",
      answer: "Depending on the project, you may be able to make changes yourself. E-commerce sites include admin tools for updating listings and web applications may feature dashboards for managing content. These requirements are discussed during planning. The source code is availiable throughout and after the project but I recommend requesting changes through me to ensure everything functions correctly."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes. I can revamp your existing site to improve design, performance and functionality using modern tools and techniques."
    },
    {
      question: "How do I get started?",
      answer: "Simply reach out via the contact form and we will arrange a free consultation. We'll discuss your goals, review options and create a plan tailored to your needs.",
    }
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
              <h2 className='text-8xl h-30 flex items-center font-enorm bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                Common Questions
              </h2>
              <p className='font-bold'>
                Everything you need to know before starting your project
              </p>
            </div>
            <p className='text-2xl'>
              This section addresses the most common questions clients have about my web development and online services.
              These answers are designed to help you understand the process, make informed decisions and feel confident moving forward with your project.
              If you have any further queries feel free to contact me for an answer.
            </p>
            <div className='w-fit py-4 px-8 rounded-full font-bold border-[5px] border-button-blue hover:bg-button-blue-dark hover:text-background duration-500 cursor-pointer hover:scale-105'>
              Contact Me
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex flex-col gap-12 text-background'>
            {questions.map((question, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(i)}
                className={cn(
                  "bg-foreground p-8 rounded-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                )}
              >
                <h3 className="text-4xl font-enorm">{question.question}</h3>
                <div
                  ref={(el) => { contentRefs.current[i] = el! }}
                  style={{
                    height: activeCard === i ? heights[i] || 0 : 0,
                    opacity: activeCard === i ? 1 : 0,
                    marginTop: activeCard === i ? '1rem' : '0',
                    transition: 'height 0.5s ease, opacity 0.5s ease, margin 0.5s ease'
                  }}
                >
                  <p className="text-2xl">{question.answer}</p>
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

export default FAQ
