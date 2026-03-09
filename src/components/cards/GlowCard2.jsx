import { useRef } from "react";

export default function GlowCard2() {
  const cardRef = useRef(null);
  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gridRef.current.style.maskImage = `radial-gradient(
      200px circle at ${x}px ${y}px,
      white,
      transparent
    )`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative w-80 h-80 rounded-xl border border-neutral-800 bg-neutral-900 p-6 overflow-hidden"
    >

        <div className="absolute inset-0 bg-indigo-500/10 blur-3xl" />
      {/* Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0
        bg-[radial-gradient(#60a5fa_1px,transparent_1px)]
        [background-size:10px_10px]
         [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
        opacity-60
        transition-all duration-200
        will-change-[mask-image]"
      />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between">
        <div>
            <h3 className="text-lg font-semibold text-sky-500">
          Hello World
        </h3>
        <p className="text-sm text-neutral-400 mt-2">
          The background grid glows where your mouse moves.
        </p>
        </div>
        <div>
        <button className='px-4 py-2 bg-sky-500 rounded-xl text-white text-shadow-xs cursor-pointer hover:bg-sky-600 transition-colors duration-200'>Hover me</button>
    </div>
      </div>
    </div>
  );
}