import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InsaneGlowCard() {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(0, { stiffness: 120, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-(y - centerY) / 15);
    rotateY.set((x - centerX) / 15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800
      }}
      className="relative w-80 h-80 rounded-xl border border-neutral-800 bg-neutral-900 p-6 overflow-hidden"
    >
      {/* Animated Gradient Grid */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px"
        }}
        animate={{
          backgroundPosition: ["0px 0px", "24px 24px"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            250px circle at ${mouseX.get()}px ${mouseY.get()}px,
            rgba(99,102,241,0.35),
            transparent 70%
          )`
        }}
      />

      {/* Soft ambient glow */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between">
        <div>
            <h3 className="text-lg font-semibold text-white">
          Insane Glow Card
        </h3>

        <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
          Magnetic tilt, animated grid, and cursor-follow glow powered by
          Framer Motion.
        </p>
        </div>
        <div>
        <button className='px-4 py-2 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10 rounded-xl text-white text-shadow-xs cursor-pointer '>Hover me</button>
    </div>
      </div>
    </motion.div>
  );
}