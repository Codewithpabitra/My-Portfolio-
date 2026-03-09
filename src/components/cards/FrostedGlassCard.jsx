import { motion } from "framer-motion";
import { Apple } from "lucide-react";

export default function FrostedGlassCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="w-80 p-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl text-gray-900"
    >
      <Apple className="w-10 h-10 mb-4 text-gray-800" />

      <h3 className="text-lg font-semibold mb-2">
        Minimal Frosted Card
      </h3>

      <p className="text-sm text-gray-700 mb-4">
        Elegant frosted glass design inspired by macOS and iOS interfaces with
        subtle animations.
      </p>

      <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
        Learn More
      </button>
    </motion.div>
  );
}