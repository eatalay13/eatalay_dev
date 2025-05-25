"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

function LoadingIndicator() {
  const [progress, setProgress] = useState(0);
  const [activeTag, setActiveTag] = useState(0);
  const t = useTranslations("Common");

  const loadingText = t("loading");

  // HTML, CSS, JS, React, API tags dizisi
  const codeTags = [
    "<div>",
    "</div>",
    "<span>",
    "{data}",
    "async()",
    "useState()",
    "<App/>",
    "fetch()",
    "return()",
    "export",
    "=>",
    "<React.Fragment>",
    "props",
    "interface",
    "component",
    "module",
  ];

  // İlerleme çubuğu animasyonu
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Tag animasyonu için
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % codeTags.length);
    }, 400);

    return () => clearInterval(interval);
  }, [codeTags.length]);
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[200px] relative overflow-hidden">
      {/* 3D Kod Uzayı Animasyonu */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          {codeTags.map((tag, index) => (
            <motion.div
              key={index}
              className={`absolute text-xs sm:text-sm font-mono ${
                index === activeTag
                  ? "text-blue-500 font-bold"
                  : "text-foreground/50"
              }`}
              initial={{
                opacity: 0,
                x: Math.random() * 500 - 250,
                y: Math.random() * 500 - 250,
                scale: 0.8,
              }}
              animate={{
                opacity: index === activeTag ? 1 : 0.5,
                scale: index === activeTag ? 1.5 : 0.8,
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                z: index === activeTag ? 100 : -100,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ana Yükleme Alanı */}
      <motion.div
        className="relative z-10 bg-white/5 dark:bg-black/20 backdrop-blur-lg rounded-xl shadow-2xl p-6 w-full max-w-md border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Matrix-benzeri kod animasyonu - üst dekoratif element */}
        <div className="absolute -top-2 -left-2 -right-2 h-16 overflow-hidden rounded-t-xl opacity-30">
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="text-[8px] font-mono text-green-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: 50,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.05,
                  repeatType: "loop",
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Merkezdeki yükleme elementi */}
        <div className="mb-4 flex items-center justify-center">
          <div className="relative w-20 h-20">
            {/* Dış Dönme Halkası */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Orta Dönme Halkası */}
            <motion.div
              className="absolute inset-2 border-4 border-transparent border-t-purple-500 border-l-purple-400 rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* İç Dönme Halkası */}
            <motion.div
              className="absolute inset-4 border-4 border-transparent border-b-green-500 border-r-green-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Merkez nokta */}
            <motion.div
              className="absolute inset-7 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Yükleme bilgisi ve progress bar */}
        <div className="text-center mb-4">
          <p className="text-sm font-medium mb-2">{loadingText}</p>

          {/* İlerleme çubuğu */}
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Yüzde göstergesi */}
          <p className="text-xs mt-1 text-foreground/60">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Fütüristik kod bloğu */}
        <div className="mt-3 text-xs font-mono text-foreground/70 bg-black/20 p-2 rounded border border-white/5 overflow-hidden">
          <motion.span
            className="flex flex-wrap gap-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-purple-400">import</span>
            <span className="text-white/70">&#123; data &#125;</span>
            <span className="text-purple-400">from</span>
            <span className="text-green-400">&apos;./api&apos;</span>
            <span>;</span>
            <span className="block w-full h-1"></span>
            <span className="text-blue-400">async</span>
            <span>function</span>
            <span className="text-yellow-400">load</span>
            <span>() &#123;</span>
            <span className="block w-full h-1"></span>
            <span className="ml-4 text-purple-400">await</span>
            <span className="text-yellow-400">fetchData</span>
            <span>(</span>
            <motion.span
              className="text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {"//"} {loadingText}
            </motion.span>
            <span>);</span>
            <span className="block w-full h-1"></span>
            <span>&#125;</span>
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

export default LoadingIndicator;
