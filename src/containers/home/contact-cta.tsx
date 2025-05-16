"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

function ContactCTA() {
  const t = useTranslations("Home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Fare efekti için mouse pozisyonunu takip et
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section
      className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-blue-400/20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundPosition: isHovering
          ? `calc(50% + ${
              (mousePosition.x - window.innerWidth / 2) * 0.02
            }px) calc(50% + ${
              (mousePosition.y - window.innerHeight / 2) * 0.02
            }px)`
          : "50% 50%",
      }}
    >
      {/* Dekoratif blur efektleri - daha belirgin ve modern */}
      <div
        className="absolute -top-20 -left-20 w-60 h-60 bg-blue-300/30 rounded-full filter blur-3xl animate-pulse-slow"
        style={{
          transform: isHovering
            ? `translate(${
                (mousePosition.x - window.innerWidth / 2) * 0.02
              }px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
            : "none",
        }}
      ></div>
      <div
        className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-400/30 rounded-full filter blur-3xl animate-pulse-slow"
        style={{
          transform: isHovering
            ? `translate(${
                (mousePosition.x - window.innerWidth / 2) * -0.02
              }px, ${(mousePosition.y - window.innerHeight / 2) * -0.02}px)`
            : "none",
          animationDelay: "2s",
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"
        style={{
          transform: isHovering
            ? `translate(calc(-50% + ${
                (mousePosition.x - window.innerWidth / 2) * 0.01
              }px), calc(-50% + ${
                (mousePosition.y - window.innerHeight / 2) * 0.01
              }px))`
            : "translate(-50%, -50%)",
        }}
      ></div>
      {/* Işık efektleri */}
      <div
        className="absolute top-0 right-0 w-40 h-40 bg-cyan-300/30 rounded-full filter blur-xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-300/30 rounded-full filter blur-xl animate-pulse-slow"
        style={{ animationDelay: "3s" }}
      ></div>
      {/* Parıltı efektleri */}
      <div className="absolute top-10 left-1/4 w-3 h-3 bg-white/80 rounded-full filter blur-sm animate-pulse-slow"></div>
      <div
        className="absolute top-20 right-1/3 w-2 h-2 bg-white/70 rounded-full filter blur-sm animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-2 h-2 bg-white/70 rounded-full filter blur-sm animate-pulse-slow"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute bottom-10 right-1/4 w-1 h-1 bg-white/90 rounded-full filter blur-sm animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 left-10 w-1 h-1 bg-white/90 rounded-full filter blur-sm animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      ></div>
      {/* Overlay gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/40 via-blue-500/20 to-indigo-600/40 backdrop-blur-sm -z-10"
        style={{
          opacity: isHovering ? 0.9 : 1,
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 drop-shadow-sm">
          {t("letsWork")}
        </h2>
        <p className="text-lg text-blue-50/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("ctaDescription")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 font-medium text-blue-700 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 border border-white/50 relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 blur group-hover:opacity-100 transition-opacity -z-10"></span>
          {t("getInTouch")}
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

export default ContactCTA;
