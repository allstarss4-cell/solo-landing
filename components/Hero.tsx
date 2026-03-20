"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Подключить реальный email-сервис (Mailchimp, ConvertKit, Loops)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FAF8F5] overflow-hidden grain-overlay">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#C9A96E] rounded-full opacity-[0.04] blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#2C2C2C] rounded-full opacity-[0.03] blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Tagline */}
        <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium mb-8 animate-fade-in-up">
          The Symbiosis of Artificial Intelligence and High Art
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C2C2C] mb-6 leading-[1.1] tracking-tight animate-fade-in-up animation-delay-200">
          Cinema-Grade Prompts
          <br />
          <span className="text-brass">for AI Creators</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#5A5A5A] mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          SOLO generates professional cinematic breakdowns for{" "}
          <span className="text-[#2C2C2C] font-medium">
            Runway, MidJourney, Pika, Luma, Sora
          </span>{" "}
          and 4 more platforms. From idea to director-level scene in seconds.
        </p>

        {/* Email Form */}
        <div className="animate-fade-in-up animation-delay-600">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-6"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-lg border border-gray-200 bg-white focus:border-[#C9A96E] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/20 text-[15px]"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 bg-[#2C2C2C] text-white rounded-lg font-medium text-[15px] hover:bg-[#3A3A3A] transition-colors flex items-center gap-2 justify-center disabled:opacity-50"
              >
                {loading ? "Joining..." : "Join Early Access"}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>
          ) : (
            <div className="mb-6 p-4 bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded-lg max-w-lg mx-auto">
              <p className="text-[#2C2C2C] font-medium text-sm">
                Welcome to SOLO. Check your email for access.
              </p>
            </div>
          )}
          <p className="text-[#8A8A8A] text-xs">
            Free tier included. No credit card required.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-20">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#2C2C2C]">
              9
            </div>
            <div className="text-xs text-[#8A8A8A] mt-1">AI Platforms</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#2C2C2C]">
              10
            </div>
            <div className="text-xs text-[#8A8A8A] mt-1">Output Sections</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#2C2C2C]">
              3s
            </div>
            <div className="text-xs text-[#8A8A8A] mt-1">Generation</div>
          </div>
        </div>
      </div>
    </section>
  );
}