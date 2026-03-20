import {
  Camera,
  Palette,
  Music,
  Zap,
  Globe,
  Layers,
  Sparkles,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "10-Section Output",
    description:
      "Complete cinematic breakdown: camera, lens, lighting, color, motion, FX, emotion, composition, texture, and music score.",
  },
  {
    icon: Sparkles,
    title: "UCPL Language",
    description:
      "Unified Cinematic Prompt Language — proprietary prompt architecture for consistent, professional-grade results.",
  },
  {
    icon: Camera,
    title: "LUX Mode",
    description:
      "Premium brand aesthetics inspired by Apple, Dior, A24. Luxury-grade lighting, color, and motion grammar.",
  },
  {
    icon: Target,
    title: "9 AI Platforms",
    description:
      "One prompt engine optimized for Runway, Pika, Luma, Haiper, Sora, MidJourney, DALL-E 3, Flux, and Leonardo.",
  },
  {
    icon: Palette,
    title: "Color & Lighting System",
    description:
      "Professional color grading, lighting setups, and atmospheric effects from curated cinematic dictionaries.",
  },
  {
    icon: Music,
    title: "Music Score Direction",
    description:
      "Complete music guidance: tone, instrumentation, pacing, and emotional arc matched to your scene.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description:
      "From idea to production-ready prompt in 3 seconds. Full technical breakdown included.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description:
      "Input in English, Ukrainian, or Russian. Final UCPL prompt always in professional English.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#FAF8F5]" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            Director-Level Prompts in Seconds
          </h2>
          <p className="text-[#5A5A5A] max-w-2xl mx-auto">
            SOLO replaces hours of manual prompt engineering with a structured
            cinematic breakdown that professional cinematographers would
            recognize.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#C9A96E]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-gray-100 flex items-center justify-center mb-4 group-hover:border-[#C9A96E]/30 transition">
                <f.icon className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <h3 className="text-[15px] font-semibold text-[#2C2C2C] mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}