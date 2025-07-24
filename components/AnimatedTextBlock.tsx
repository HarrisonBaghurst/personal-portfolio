import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

interface AnimatedTextBlockProps {
    headingText: string;
    paragraphText: string;
    headingClassName: string;
    paragraphClassName: string;
}

const AnimatedTextBlock = ({headingText, paragraphText, headingClassName, paragraphClassName}: AnimatedTextBlockProps) => {
    const headingTextRef = useRef<HTMLHeadingElement>(null);
    const paragraphTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const headingWords = headingTextRef.current?.querySelectorAll('.heading-word');
        const paragraphWords = paragraphTextRef.current?.querySelectorAll('.paragraph-word');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headingTextRef.current,
                start: 'top 90%',
                once: true,
            }
        });

        if (headingWords) {
            headingWords.forEach((word, i) => {
                const direction = i % 2 === 0 ? 15 : -15;

                tl.fromTo(
                    word,
                    { x: 200, opacity: 0, rotate: direction },
                    { x: 0, opacity: 1, rotate: 0, duration: 0.5, ease: "power2.out" },
                    i * 0.15
                );
            })
        }
        if (paragraphWords) {
            tl.fromTo(
                paragraphWords,
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.025},
            );
        }
    }, [])

    return (
        <div className='flex flex-col gap-8'>
            <h3 
            ref={headingTextRef}
            className={headingClassName}
            >
                {headingText.split(' ').map((word, i) => (
                    <span key={i} className="inline-block heading-word">
                        {word}
                    </span>
                ))}
            </h3>
            <p
            ref={paragraphTextRef}
            className={paragraphClassName}
            >
                {paragraphText.split(' ').map((word, i) => (
                    <span key={i} className="inline-block paragraph-word">
                        {word}
                    </span>
                ))}
            </p>
        </div>
    )
}

export default AnimatedTextBlock