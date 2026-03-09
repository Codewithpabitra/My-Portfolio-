import { useRef } from "react";

export default function GlowCard() {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.background = `radial-gradient(
      100px circle at ${x}px ${y}px,
      rgba(99,102,241,0.35),
      transparent 60%
    )`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => (glowRef.current.style.opacity = "1")}
      onMouseLeave={() => (glowRef.current.style.opacity = "0")}
      className="relative w-100 h-100 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 overflow-hidden cursor-pointer"
    >
      {/* Mouse Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 blur-2xl "
      />

      {/* Dot Grid */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(#ffffff22_1px,transparent_1px)] 
        [background-size:10px_10px]
        [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
        opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        <div>
        <h3 class="text-2xl font-semibold tracking-tight text-sky-500">
      Hello World
    </h3>
    <p class="text-lg text-neutral-400 mt-2 leading-relaxed">
      This is the description of the card. The text appears above the dotted grid background.
    </p>
    </div>
    <div>
        <button className='px-4 py-2 bg-sky-500 rounded-xl text-white text-shadow-xs cursor-pointer hover:bg-sky-600 transition-colors duration-200'>Hover me</button>
    </div>
      </div>
    </div>
  );
}