"use client";

import { useEffect, useState } from "react";

interface ConsoleTextProps {
  children: string;
  prefix?: string;
  delay?: number;
}

export default function ConsoleText({
  children,
  prefix = "",
  delay = 100,
}: ConsoleTextProps) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= children.length) {
        setText(children.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(cursorInterval);
    };
  }, [children, delay]);

  return (
    <div className="font-code bg-editor-line p-4 rounded-md">
      <span className="text-editor-text">{prefix} </span>
      <span className="text-editor-variable">{text}</span>
      {showCursor && <span className="text-editor-text">▋</span>}
    </div>
  );
}
