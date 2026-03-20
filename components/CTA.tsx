"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Подключить email-сервис
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <section className="py-24 gradient-dark text-white relative grain-overlay">
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C9A96E] font-medium mb-6">
          Get Started
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Direct Like a Pro?
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Join creators and studios who have transformed their AI workflow with
          SOLO. Start with 2 free previews daily.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#C9A96E] text-[15px]"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 bg-[#C9A96E] text-[#2C2C2C] rounded-lg font-medium text-[15px] hover:bg-[#D4B87A] transition-colors flex items-center gap-2 justify-center disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join Early Access"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>
        ) : (
          <div className="p-4 bg-white/10 border border-white/20 rounded-lg max-w-md mx-auto">
            <p className="text-white font-medium text-sm">
              Welcome to SOLO. Check your email.
            </p>
          </div>
        )}

        <p className="text-gray-500 text-xs mt-4">
          No credit card required.
        </p>
      </div>
    </section>
  );
}