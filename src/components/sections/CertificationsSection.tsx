import { useRef } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { Award, BookOpen, GraduationCap, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { trainings, education } from "@/data/certifications"
import type { Training } from "@/types"

function TiltCard({ training, index }: { training: Training; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const Icon = training.type === "certification" ? Award : BookOpen

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className="relative rounded-2xl p-5 flex flex-col gap-3 h-full"
      whileHover={{ boxShadow: `0 0 32px ${training.color}50` }}
    >
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${training.color}30`,
          pointerEvents: "none",
        }}
      />
      <div
        className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${training.color}20`, border: `1px solid ${training.color}40` }}
      >
        <Icon size={20} style={{ color: training.color }} />
      </div>
      <div className="relative z-10">
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: training.color }}
        >
          {training.type}
        </span>
        <h3 className="text-sm font-semibold text-white mt-1 leading-snug">{training.name}</h3>
      </div>
    </motion.div>
  )
}

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      data-section
      className="py-24 px-4 sm:px-6 relative"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Top gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px animate-gradient-shift"
        style={{
          backgroundImage: "linear-gradient(90deg, #8338EC, #3A86FF, #FFBE0B, #FB5607, #8338EC)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Trainings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#8338EC" }}>
            Learning &amp; Growth
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Certifications &amp;{" "}
            <span
              className="gradient-text"
              style={{ backgroundImage: "linear-gradient(90deg, #8338EC, #3A86FF)" }}
            >
              Trainings
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {trainings.map((t, i) => (
            <TiltCard key={t.name} training={t} index={i} />
          ))}
        </div>

        <Separator className="my-12 bg-white/10" />

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#3A86FF" }}>
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span
              className="gradient-text"
              style={{ backgroundImage: "linear-gradient(90deg, #3A86FF, #8338EC)" }}
            >
              Education
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(58,134,255,0.06)",
            border: "1px solid rgba(58,134,255,0.25)",
            boxShadow: "0 0 40px rgba(58,134,255,0.08)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(58,134,255,0.15)", border: "1px solid rgba(58,134,255,0.3)" }}
            >
              <GraduationCap size={22} style={{ color: "#3A86FF" }} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">
                {education.degree} in {education.field}
              </h3>
              <p className="text-sm font-medium mt-0.5" style={{ color: "#3A86FF" }}>
                {education.institution} – {education.campus}
              </p>
              <p className="text-sm text-white/50 mt-1">
                {education.startYear} – {education.endYear}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Users size={14} className="text-white/40 flex-shrink-0" />
                <span className="text-sm text-white/60 italic">{education.activity}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px animate-gradient-shift"
        style={{
          backgroundImage: "linear-gradient(90deg, #3A86FF, #8338EC, #FF006E, #3A86FF)",
        }}
      />
    </section>
  )
}
