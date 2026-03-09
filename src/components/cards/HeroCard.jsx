import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroCard() {
  const cardRef = useRef(null);
  const meshRef = useRef(null);
  const particleCanvasRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(0, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 });

  // Handle 3D tilt & mouse
  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-(y - centerY) / 12);
    rotateY.set((x - centerX) / 12);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Particle + Neural Lines Canvas
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = "rgba(99,102,241,0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // draw neural network lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(99,102,241,${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="relative w-96 rounded-3xl overflow-hidden p-1"
    >
      {/* Gradient Mesh Background */}
      <motion.div
        ref={meshRef}
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "linear-gradient(135deg,#6366f1,#06b6d4,#a855f7,#6366f1)",
          backgroundSize: "400% 400%"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Card Body */}
      <div className="relative rounded-3xl bg-neutral-950 border border-white/10 backdrop-blur-xl p-8 overflow-hidden">

        {/* Multi-layer Parallax Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
              backgroundPosition: "0 0"
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              backgroundPosition: "0 0"
            }}
          />
        </div>

        {/* Particle & Neural Lines Canvas */}
        <canvas
          ref={particleCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Cursor Spotlight Glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              250px circle at ${mouseX.get()}px ${mouseY.get()}px,
              rgba(99,102,241,0.25),
              transparent 70%
            )`
          }}
        />

        {/* Ambient Glow / Shader-like Waves */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white">Next-Level Hero Card</h3>
          <p className="text-neutral-400 mt-3 text-sm leading-relaxed">
            Cursor-follow glow, liquid gradient mesh, particle sparks, neural network lines,
            shader-like waves, and parallax grid—all interactive.
          </p>
          <button className="mt-6 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 cursor-pointer text-sm font-medium">
            Hover me
          </button>
        </div>

      </div>
    </motion.div>
  );
}