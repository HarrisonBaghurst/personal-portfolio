'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Transition from './Transition'

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Simple Portfolio Sites",
      price: "Starting at £500",
      text: "These are clean, professional websites designed to showcase your work, services or personal brand. Typically 3-7 pages, they include features like contact forms, social media integration and responsive design for mobile and desktop. Portfolio sites are ideal for freelancers, creatives or small business who want a polished online presence without extra complexity."
    },
    {
      title: "E-Commerce & Sales Sites",
      price: "Starting at £750",
      text: "These websites are built to help you sell products or services online. They include product catalogs, shopping carts, secure checkout and payment integration. E-commerce sites may also feature customer accounts, promotional tools and basic analytics. These are perfect for businesses looking to reach customers online and grow sales efficiently."
    },
    {
      title: "Complex Web Applications",
      price: "Starting at £1250",
      text: "These are fully custom websites with advanced functionality tailored to your business processes. Examples include booking systems, dashboards, interactive platforms and other software-style web applications. They are built using modern technologies for scalability, performance and security. Complex web applications are ideal for businesses with unique requirements that go beyond a standard website."
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

      <div className='p-32 grid grid-cols-2 gap-32 text-3xl h-225'>
        <div className='flex items-center'>
          <div className='flex flex-col gap-12'>  
            <div>
              <h2 className='text-8xl h-30 flex items-center font-enorm bg-gradient-to-t from-button-blue to-button-blue-dark bg-clip-text text-transparent'>
                Pricing Estimates
              </h2>
              <p className='font-bold'>
                Affordable options to get you started online
              </p>
            </div>
            <p className='text-2xl'>
              Please note that the prices listed here are rough estimates to give you an idea of what to expect.
              Every project is unique, so I provide a full, detailed pricing outline after a free consultation.
              This ensures your website or service package is tailored to your needs and budget, with no surprises along the way.
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
      </div>

      <Transition />
    </div>
  )
}

export default Pricing
