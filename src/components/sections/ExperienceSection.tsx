import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import { experiences } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section
      id="experience"
      data-section
      className="py-24 px-4 sm:px-6 relative"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#FF006E" }}>
            Where I&apos;ve Worked
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Work{" "}
            <span
              className="gradient-text"
              style={{ backgroundImage: "linear-gradient(90deg, #FF006E, #8338EC)" }}
            >
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="absolute left-0 top-0 bottom-0 w-px origin-top hidden sm:block"
            style={{
              background: "linear-gradient(to bottom, #FF006E, #8338EC, #3A86FF)",
              marginLeft: "11px",
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative sm:pl-10"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-6 w-5 h-5 rounded-full border-2 border-pink-500 hidden sm:block"
                style={{
                  background: "#0a0a0a",
                  boxShadow: "0 0 12px rgba(255,0,110,0.6)",
                  marginLeft: "3px",
                }}
              />

              {/* Card */}
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,0,110,0.2)",
                  boxShadow: "0 4px 30px rgba(255,0,110,0.06)",
                }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase size={18} style={{ color: "#FF006E" }} />
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold mt-1" style={{ color: "#FF006E" }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-white/50 sm:text-right">
                    <span className="flex items-center gap-1 sm:justify-end">
                      <Calendar size={13} />
                      {exp.startDate} – {exp.endDate}
                    </span>
                    <span className="flex items-center gap-1 sm:justify-end">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + j * 0.05, duration: 0.4 }}
                      className="flex gap-3 text-sm text-white/70 leading-relaxed"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#FF006E" }}
                      />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px animate-gradient-shift"
        style={{
          backgroundImage: "linear-gradient(90deg, #FF006E, #8338EC, #3A86FF, #FFBE0B, #FF006E)",
        }}
      />
    </section>
  )
}
