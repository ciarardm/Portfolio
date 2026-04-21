import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const contactItems = [
  {
    Icon: Mail,
    label: "Email",
    value: "ciararosedelamasa@gmail.com",
    href: "mailto:ciararosedelamasa@gmail.com",
    color: "#FFBE0B",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "09054308389",
    href: "tel:09054308389",
    color: "#FB5607",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Dasmariñas, Cavite, Philippines",
    href: null,
    color: "#FF006E",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ciarardm",
    href: "https://linkedin.com/in/ciarardm",
    color: "#3A86FF",
  },
] as const

export function ContactSection() {
  return (
    <section
      id="contact"
      data-section
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Animated gradient background blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(ellipse, rgba(131,56,236,0.12) 0%, rgba(58,134,255,0.08) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#3A86FF" }}>
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Let&apos;s{" "}
            <span
              className="gradient-text"
              style={{ backgroundImage: "linear-gradient(90deg, #3A86FF, #8338EC, #FF006E)" }}
            >
              Connect
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-base">
            Open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-3xl p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {contactItems.map((item) => {
              const { Icon, label, value, href, color } = item

              const cardContent = (
                <div
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${color}20`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-white/80 truncate">{value}</p>
                  </div>
                </div>
              )

              if (href) {
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block hover:scale-[1.02] transition-transform"
                    aria-label={`${label}: ${value}`}
                  >
                    {cardContent}
                  </a>
                )
              }
              return <div key={label}>{cardContent}</div>
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:ciararosedelamasa@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 h-9 rounded-full font-semibold text-sm text-white hover:scale-105 transition-transform"
              style={{
                background: "linear-gradient(135deg, #3A86FF, #8338EC)",
                boxShadow: "0 0 24px rgba(58,134,255,0.35)",
              }}
            >
              <Send size={15} />
              Send an Email
            </a>
            <a
              href="https://linkedin.com/in/ciarardm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 h-9 rounded-full font-semibold text-sm text-white hover:scale-105 transition-transform"
              style={{ border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "transparent" }}
            >
              <LinkedinIcon size={15} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
