"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function ScrollProgressBar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  const updateScrollValues = useCallback(() => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const currentScrollY = window.scrollY;

    // Sadece değerler değiştiyse state güncellemesi yapıyoruz
    if (currentScrollY !== scrollY) {
      setScrollY(currentScrollY);
    }

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      // Yüzdelik değer değiştiyse güncelliyoruz (1 decimal hassasiyetle)
      if (Math.abs(scrolled - scrollProgress) > 0.1) {
        setScrollProgress(scrolled);
      }
    }

    ticking.current = false;
  }, [scrollY, scrollProgress]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        // requestAnimationFrame ile render döngüsüyle senkronize oluyoruz
        window.requestAnimationFrame(() => {
          updateScrollValues();
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateScrollValues]);

  return (
    <div className="absolute bottom-0.5 left-0 w-full h-[3px] bg-transparent overflow-hidden rounded-lg">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 transition-all duration-300 ease-out rounded-lg shadow-lg"
        style={{
          width: `${scrollProgress}%`,
          opacity: scrollY > 10 ? 1 : 0,
        }}
      />
    </div>
  );
}

export default ScrollProgressBar;
