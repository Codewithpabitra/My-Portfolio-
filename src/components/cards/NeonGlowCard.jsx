import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function NeonGlowCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="relative w-80 p-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 text-white overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl"></div>

      <div className="relative z-10">
        <Zap className="w-10 h-10 text-blue-400 mb-4" />

        <h3 className="text-xl font-semibold mb-2">
          Neon AI Feature
        </h3>

        <p className="text-sm text-gray-300 mb-4">
          Futuristic glowing glass UI with animated neon effects and smooth
          hover transitions.
        </p>

        <button className="px-4 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition">
          Try Now
        </button>
      </div>
    </motion.div>
  );
}