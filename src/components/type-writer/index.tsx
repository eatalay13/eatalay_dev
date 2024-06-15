'use client';

import React, { useEffect, useState } from 'react';

interface TypewriterProps {
    strings: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenStrings?: number;
}

const TypewriterComponent: React.FC<TypewriterProps> = ({
    strings,
    typingSpeed = 150,
    deletingSpeed = 100,
    delayBetweenStrings = 1500,
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleType = () => {
            const currentString = strings[currentStringIndex];
            setDisplayedText((prev) =>
                isDeleting ? currentString.substring(0, prev.length - 1) : currentString.substring(0, prev.length + 1)
            );

            if (!isDeleting && displayedText === currentString) {
                setTimeout(() => setIsDeleting(true), delayBetweenStrings);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
            }
        };

        const timeout = setTimeout(
            handleType,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentStringIndex, strings, typingSpeed, deletingSpeed, delayBetweenStrings]);

    return <div className="typewriter">{displayedText}_</div>;
};

export default TypewriterComponent;