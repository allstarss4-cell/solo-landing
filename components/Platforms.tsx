export default function Platforms() {
  const platforms = [
    { name: "Runway", type: "Video" },
    { name: "Pika", type: "Video" },
    { name: "Luma", type: "Video" },
    { name: "Haiper", type: "Video" },
    { name: "Sora", type: "Video" },
    { name: "MidJourney", type: "Image" },
    { name: "DALL-E 3", type: "Image" },
    { name: "Flux", type: "Image" },
    { name: "Leonardo", type: "Image" },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#8A8A8A] mb-8">
          Optimized for 9 leading AI platforms
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#3A3A3A]">
                {p.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#C9A96E] font-medium">
                {p.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}