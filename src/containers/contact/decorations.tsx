"use client";

import { motion } from "framer-motion";

export default function Decorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Ana gradient arka plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>

      {/* Geometrik desenler */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-blue-300/20 dark:border-blue-500/20 rounded-full rotate-45 transform opacity-60"></div>
      <div className="absolute top-40 left-1/4 w-20 h-20 border border-indigo-300/30 dark:border-indigo-500/30 rounded-md rotate-12 transform opacity-40"></div>
      <div className="absolute bottom-60 right-60 w-16 h-16 border border-amber-300/20 dark:border-amber-500/20 rounded-md -rotate-12 transform opacity-60"></div>

      {/* Üst sol daire */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-300/20 dark:bg-blue-600/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      {/* Dinamik desen çizgileri */}
      <div className="absolute top-0 left-1/4 w-[1px] h-48 bg-gradient-to-b from-blue-300/0 via-blue-300/30 to-blue-300/0 dark:from-blue-500/0 dark:via-blue-500/20 dark:to-blue-500/0"></div>
      <div className="absolute top-0 left-2/3 w-[1px] h-32 bg-gradient-to-b from-indigo-300/0 via-indigo-300/20 to-indigo-300/0 dark:from-indigo-500/0 dark:via-indigo-500/20 dark:to-indigo-500/0"></div>

      {/* Alt sağ daire */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-indigo-300/20 dark:bg-indigo-600/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 0.9, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Orta daire */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-amber-300/15 dark:bg-amber-600/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Sol kenar süsü */}
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-blue-600/40 to-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-blue-500/30 dark:to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Sağ kenar süsü */}
      <motion.div
        className="absolute right-0 top-1/3 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-indigo-600/40 to-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-indigo-500/30 dark:to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />

      {/* Parçacıklar */}
      <ParticleGrid />
    </div>
  );
}

// Gümüş renkli süsleyici çizgi
function FloatingLine() {
  return (
    <motion.div
      className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-slate-400/30 dark:via-slate-300/20 to-transparent"
      initial={{ opacity: 0, rotate: -30, x: -100 }}
      animate={{ opacity: [0, 1, 0], x: ["0%", "100%"] }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      }}
      style={{
        top: `${30 + Math.random() * 40}%`,
      }}
    />
  );
}

// Grid içinde dağıtılmış küçük noktalar ve diğer dekoratif öğeler
function ParticleGrid() {
  return (
    <div className="absolute inset-0">
      {/* Floating noktalar */}
      <div className="grid grid-cols-6 grid-rows-4 absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => {
          // Rastgele boyut seçimi
          const size = Math.random() > 0.8 ? 2 : 1;
          // Rastgele renk seçimi
          const colors = [
            "bg-blue-600/30 dark:bg-blue-400/30",
            "bg-indigo-500/30 dark:bg-indigo-400/30",
            "bg-sky-500/30 dark:bg-sky-400/30",
          ];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

          return (
            <motion.div
              key={i}
              className={`w-${size} h-${size} rounded-full ${randomColor}`}
              initial={{
                opacity: 0,
                x: Math.random() * 20 - 10,
                y: Math.random() * 20 - 10,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                x: [
                  Math.random() * 20 - 10,
                  Math.random() * 20 - 10,
                  Math.random() * 20 - 10,
                ],
                y: [
                  Math.random() * 20 - 10,
                  Math.random() * 20 - 10,
                  Math.random() * 20 - 10,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 5 + Math.random() * 8,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.floor(i % 6) * (100 / 6) + Math.random() * 10}%`,
                top: `${Math.floor(i / 6) * (100 / 4) + Math.random() * 10}%`,
              }}
            />
          );
        })}
      </div>

      {/* Süsleyici çizgiler */}
      {Array.from({ length: 3 }).map((_, i) => (
        <FloatingLine key={i} />
      ))}
    </div>
  );
}
