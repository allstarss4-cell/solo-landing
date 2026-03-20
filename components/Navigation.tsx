"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight text-[#2C2C2C]">
        SOLO <span className="hidden lg:inline text-sm font-normal text-[#8A8A8A] ml-2">— Cinematic Creative Director</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#5A5A5A]">
          <a href="#features" className="hover:text-[#2C2C2C] transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-[#2C2C2C] transition">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-[#2C2C2C] transition">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://t.me/SOLO_CinematicDirector_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-5 py-2.5 text-sm font-medium text-white bg-[#2C2C2C] rounded-lg hover:bg-[#3A3A3A] transition-colors"
          >
            Try Free
          </a>
        </div>
      </div>
    </nav>
  );
}