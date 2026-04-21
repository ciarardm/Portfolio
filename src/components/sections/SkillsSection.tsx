import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { skillGroups } from "@/data/skills"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      data-section
      className="py-24 px-4 sm:px-6 relative"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Animated gradient divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px animate-gradient-shift"
        style={{
          backgroundImage: "linear-gradient(90deg, #FFBE0B, #FB5607, #FF006E, #8338EC, #3A86FF, #FFBE0B)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#FB5607" }}>
            What I Know
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Skills &amp;{" "}
            <span
              className="gradient-text"
              style={{ backgroundImage: "linear-gradient(90deg, #FB5607, #FF006E, #8338EC)" }}
            >
              Expertise
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 0 28px ${group.color}40`,
                transition: { duration: 0.2 },
              }}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${group.color}30`,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: group.color, boxShadow: `0 0 8px ${group.color}80` }}
                />
                <h3 className="text-sm font-semibold text-white/90">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item.name}
                    variant="outline"
                    className="text-xs font-medium rounded-full border-white/10 text-white/70 bg-white/5"
                  >
                    {item.name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px animate-gradient-shift"
        style={{
          backgroundImage: "linear-gradient(90deg, #3A86FF, #8338EC, #FF006E, #FB5607, #FFBE0B, #3A86FF)",
        }}
      />
    </section>
  )
}
