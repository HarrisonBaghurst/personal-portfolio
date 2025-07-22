'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const [pageTypeIndex, setPageTypeIndex] = useState<number>(0)
    const buttonsRef = useRef<HTMLButtonElement[]>([])

    const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 })

    useEffect(() => {
        const activeButton = buttonsRef.current[pageTypeIndex]
        if (activeButton) {
            const { offsetTop, clientHeight } = activeButton
            setIndicatorStyle({ top: offsetTop, height: clientHeight })
        }
    }, [pageTypeIndex])

    const navItems = ['Home', 'Contact Form', 'Web Development', 'Tutoring', 'About Me']

    return (
        <section className='mt-20 fixed text-sm mx-4 rounded-2xl overflow-hidden h-12 z-50 w-[calc(100dvw-var(--spacing)*8)] flex justify-between border-1 border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl bg-[rgba(200,200,200,0.1)]
        2xl:mx-4 2xl:text-2xl 2xl:w-[15%] 2xl:h-[calc(100dvh-var(--spacing)*35)] 2xl:mt-27'>

            <div className='flex flex-col gap-4 p-8 w-full relative'>

                <motion.div
                    layout
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute left-4 w-[calc(100%-var(--spacing)*8)] rounded-2xl border-1 border-[rgba(255,255,255,0.3)] backdrop-filter backdrop-blur-xl bg-[rgba(200,200,200,0.1)]"
                    style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
                />

                <div className='mb-10 flex justify-end'>
                    Collapse
                </div>

                {navItems.map((name, index) => (
                    <button
                        key={index}
                        ref={(el) => {
                            if (el) buttonsRef.current[index] = el
                        }}
                        className='cursor-pointer flex justify-left p-2 relative z-10 text-left'
                        type='button'
                        onClick={() => setPageTypeIndex(index)}
                    >
                        <p>{name}</p>
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Sidebar
