'use client'

import React, { useEffect, useState } from 'react'

interface TypedTextProps {
    text: string; 
    minTime: number;
    maxTime: number; 
    className: string; 
    startTimeout: number;
    onEnd: () => void;
}

const TypedText = ({text, minTime, maxTime, className, startTimeout, onEnd}: TypedTextProps) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => { 
        let currentIndex = 0; 
        const type = () => {
            if (currentIndex < text.length) {
                currentIndex++;  
                setDisplayedText(() => text.substring(0, currentIndex)); 
                setTimeout(type, Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime);
            }
            else {
                onEnd();
            }
        }
        setTimeout(type, startTimeout)

        return () => {
            currentIndex = text.length;
        }
    }, [maxTime, minTime]);

    return (
        <div className={className}>
            {displayedText}
            {displayedText !== text && <span className="text-grey animate-pulse">_</span>}
        </div>
    )
}

export default TypedText