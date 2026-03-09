import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function UltraCard() {

  const ref = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(0, { stiffness: 120, damping: 18 })
  const rotateY = useSpring(0, { stiffness: 120, damping: 18 })

  const handleMove = (e) => {

    const rect = ref.current.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set(x)
    mouseY.set(y)

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    rotateX.set(-(y - centerY) / 12)
    rotateY.set((x - centerX) / 12)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900
      }}
      className="relative w-96 rounded-2xl p-1 overflow-hidden"
    >

      {/* Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(120deg,#6366f1,#06b6d4,#a855f7,#6366f1)"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Card */}
      <div className="relative rounded-2xl bg-neutral-950 border border-white/10 backdrop-blur-xl p-8 overflow-hidden">

        {/* Moving Grid */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px"
          }}
          animate={{
            backgroundPosition: ["0px 0px", "30px 30px"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Cursor Spotlight */}
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

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10">

          <h3 className="text-xl font-semibold text-white">
            Premium Interactive Card
          </h3>

          <p className="text-neutral-400 mt-3 text-sm leading-relaxed">
            Cursor spotlight, magnetic tilt, animated grid and gradient border.
            Built with React, Tailwind and Framer Motion.
          </p>

          <button className="mt-6 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 text-sm font-medium cursor-pointer text-white">
            Get Started
          </button>

        </div>
      </div>

    </motion.div>
  )
}