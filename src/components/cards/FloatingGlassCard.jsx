import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function FloatingGlassCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const rotateX = (y / card.height - 0.5) * 20;
    const rotateY = (x / card.width - 0.5) * -20;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="w-80 p-6 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl text-white transition-transform"
    >
      <Sparkles className="w-10 h-10 mb-4 text-purple-400" />

      <h3 className="text-xl font-semibold mb-2">
        AI Powered Feature
      </h3>

      <p className="text-sm text-gray-200 mb-4">
        Experience smooth futuristic UI with floating glass effects and
        beautiful animations.
      </p>

      <button className="px-4 py-2 rounded-xl bg-linear-to-r from-purple-500 to-blue-500 hover:scale-105 transition">
        Explore
      </button>
    </motion.div>
  );
}