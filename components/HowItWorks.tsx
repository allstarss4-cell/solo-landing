export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Describe Your Scene",
      description:
        "Send a scene description in any language. A few words or a detailed brief — SOLO adapts to your input.",
    },
    {
      step: "02",
      title: "SOLO Generates",
      description:
        "The engine produces a complete 10-section cinematic breakdown: camera, lens, lighting, color, motion, FX, emotion, music, and final UCPL prompt.",
    },
    {
      step: "03",
      title: "Use the Prompt",
      description:
        "Copy the UCPL prompt directly into Runway, MidJourney, Pika, or any supported platform. Cinema-grade results every time.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-4">
            Workflow
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Three Steps to Cinema
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-bold text-[#C9A96E]/20 mb-4">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}