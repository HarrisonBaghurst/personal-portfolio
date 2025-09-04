'use client'

import React, { useEffect, useRef, useState } from 'react'

type ExpandingSelectorProps = {
    options: { title: string, subtitle?: (string | null), text: string}[];
}

const ExpandingSelector = ({ options }: ExpandingSelectorProps) => {
    const [activeCard, setActiveCard] = useState<number>(0)
    const [heights, setHeights] = useState<number[]>([])
    const contentRefs = useRef<HTMLDivElement[]>([])
    
    useEffect(() => {
        const newHeights = contentRefs.current.map((el) => el?.scrollHeight || 0)
        setHeights(newHeights)
    }, [])
    
    return (
        <div className='flex items-center'>
            <div className='
            flex flex-col text-background
            gap-6
            2xl:gap-12
            '>
                {options.map((option, i) => (
                <div
                    key={i}
                    onMouseEnter={() => setActiveCard(i)}
                    className="
                    bg-foreground rounded-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden select-none
                    p-6
                    2xl:p-8
                    ">
                        <div className="flex justify-between items-center">
                            <h3 className="paragraph-large font-enorm">{option.title}</h3>
                            <h3 className="paragraph-large text-end">{option.subtitle}</h3>
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
                        <p className="paragraph-small">{option.text}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ExpandingSelector