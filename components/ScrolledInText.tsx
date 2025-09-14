'use client'

import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type';
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils';
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)


type ScrolledInTextProps  = {
    text: string;
    size: 'large' | 'regular';
    center: boolean;
}

const ScrolledInText = ({ text, size, center }: ScrolledInTextProps) => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const titleWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (titleWrapperRef.current) {
            gsap.set(titleWrapperRef.current, {opacity: 1})
        }

        if (!titleRef.current) return;

        const split = new SplitType(titleRef.current, { types: 'chars' });
        if (split.chars) {
            split.chars.forEach((char) => {
                char.classList.add("text-gradient"); 
            });
        }

        const ctx = gsap.context(() => {
            gsap.from(split.chars, {
                y: 25,
                x: (i, el, targets) => {
                    const total = targets.length - 1;
                    const progress = i / total; 
                    return 50 + (progress * -100);
                },
                scale: 0.8,
                rotate: (i, el, targets) => {
                    const total = targets.length - 1;
                    const progress = i / total; 
                    return -20 + (progress * 40);
                },
                opacity: 0,
                stagger: 0.01,
                ease: 'power1.out',
                duration: 0.25,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none reverse',
                },
            })
        }, titleRef)

        return () => {
            ctx.revert();
            split.revert();
        }

    }, [])
    
    return (
        <div ref={titleWrapperRef} className='opacity-0'>
            <h2 
            ref={titleRef}
            className={cn(
                'font-enorm text-gradient text-left',
                size === 'large' && 'main-heading',
                size === 'regular' && 'section-heading',
                center && '2xl:text-center',
            )}
            >
                {text}
            </h2>
        </div>
    )
}

export default ScrolledInText