import { Check } from "lucide-react";

const tiers = [
  {
    name: "FREE",
    price: "$0",
    period: "",
    description: "Try cinematic AI direction",
    features: [
      "2 previews per day",
      "Human Explanation",
      "Final Prompt (preview)",
      "Telegram bot access",
    ],
    cta: "Start Free",
    ctaLink: "https://t.me/SOLO_CinematicDirector_bot",
    highlighted: false,
  },
  {
    name: "BASIC",
    price: "$9",
    period: "/mo",
    description: "Clean cinematic direction",
    features: [
      "100 generations / month",
      "Visual Core breakdown",
      "Full Final Prompt",
      "Quick Image Prompt",
      "Multi-language support",
    ],
    cta: "Start Basic",
    ctaLink: "#",
    highlighted: false,
  },
  {
    name: "PRO",
    price: "$29",
    period: "/mo",
    description: "Professional cinematic control",
    features: [
      "Everything in BASIC",
      "500 generations / month",
      "Full Technical Breakdown",
      "Sound & Music direction",
      "Quick Video Prompt",
      "Reels / TikTok mode",
      "Platform adaptation",
      "API access",
    ],
    cta: "Start Pro",
    ctaLink: "#",
    highlighted: true,
  },
  {
    name: "LUX",
    price: "$59",
    period: "/mo",
    description: "Luxury-grade creative direction",
    features: [
      "Everything in PRO",
      "1,500 generations / month",
      "Texture & Materiality",
      "Composition & Spatial",
      "Optical Fx & Artifacts",
      "LUX Mode (Apple, Dior, A24)",
      "Brand aesthetic presets",
      "Priority queue",
    ],
    cta: "Start LUX",
    ctaLink: "#",
    highlighted: false,
  },
  {
    name: "AGENCY",
    price: "$149",
    period: "/mo",
    description: "Studio & agency powerhouse",
    features: [
      "Everything in LUX",
      "Unlimited generations",
      "Multi-shot sequences (5 shots)",
      "RAW prompt mode",
      "White-label API",
      "Team collaboration",
      "Dedicated support",
    ],
    cta: "Contact",
    ctaLink: "mailto:hello@solo-engine.com",
    highlighted: false,
  },
];
export default function Pricing() {
  return (
    <section className="py-24 bg-[#FAF8F5]" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            Simple, Transparent Plans
          </h2>
          <p className="text-[#5A5A5A]">
            Start free. Upgrade when ready. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-7 transition-all duration-300 ${
                tier.highlighted
                  ? "ring-2 ring-[#C9A96E] shadow-xl"
                  : "border border-gray-100 hover:shadow-lg"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-[#2C2C2C] text-white text-[10px] uppercase tracking-wider font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-lg font-bold text-[#2C2C2C]">
                  {tier.name}
                </h3>
                <p className="text-xs text-[#8A8A8A] mt-1">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-[#2C2C2C]">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-[#8A8A8A] text-sm">{tier.period}</span>
                )}
              </div>

              <a
                href={tier.ctaLink}
                target={tier.ctaLink.startsWith("http") ? "_blank" : undefined}
                rel={
                  tier.ctaLink.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`block w-full py-3 rounded-lg font-medium text-sm text-center mb-6 transition-colors ${
                  tier.highlighted
                    ? "bg-[#2C2C2C] text-white hover:bg-[#3A3A3A]"
                    : "bg-[#FAF8F5] text-[#2C2C2C] hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tier.cta}
              </a>

              <ul className="space-y-3">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A96E] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#5A5A5A]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#8A8A8A] mt-10">
          All plans include access to all 9 AI platform integrations. Payments
          processed securely via Stripe.
        </p>
      </div>
    </section>
  );
}