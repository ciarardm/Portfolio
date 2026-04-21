import { motion } from "framer-motion"
import { Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroCanvas } from "@/components/three/HeroCanvas"
import { useTypingEffect } from "@/hooks/useTypingEffect"

const PHRASES = ["Software QA Engineer", "Automation Tester", "Accessibility Advocate"]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function HeroSection() {
  const typedText = useTypingEffect(PHRASES)

  const scrollToWork = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      data-section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <HeroCanvas />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.7) 80%, #0a0a0a 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        <motion.p
          {...fadeUp(0.1)}
          className="text-sm font-semibold tracking-[0.2em] uppercase"
          style={{ color: "#FFBE0B" }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none"
        >
          Ciara Rose{" "}
          <span
            className="gradient-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #FF006E, #8338EC, #3A86FF)",
            }}
          >
            Dela Masa
          </span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div {...fadeUp(0.4)} className="h-10 flex items-center justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/80">
            <span style={{ color: "#FB5607" }}>{typedText}</span>
            <span className="animate-blink ml-0.5 inline-block w-0.5 h-6 align-middle bg-orange-400" />
          </h2>
        </motion.div>

        <motion.p
          {...fadeUp(0.55)}
          className="max-w-xl text-base sm:text-lg text-white/60 leading-relaxed"
        >
          Software engineer focused on software testing with experience in Agile environments.
          Passionate about quality, accessibility, and automation.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={scrollToWork}
            size="lg"
            className="font-semibold rounded-full px-8 transition-all hover:scale-105 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #FF006E, #8338EC)",
              boxShadow: "0 0 24px rgba(255,0,110,0.4)",
              border: "none",
              color: "white",
            }}
          >
            View My Work
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="font-semibold rounded-full px-8 transition-all hover:scale-105 text-white hover:text-white"
            style={{ border: "1px solid rgba(255,255,255,0.25)", backgroundColor: "transparent" }}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.85)} className="flex items-center gap-5 mt-2">
          <a
            href="https://linkedin.com/in/ciarardm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
          >
            <span className="group-hover:text-blue-400 transition-colors">
              <LinkedinIcon size={18} />
            </span>
            <span>LinkedIn</span>
          </a>
          <span className="text-white/20">·</span>
          <a
            href="mailto:ciararosedelamasa@gmail.com"
            aria-label="Send email"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
          >
            <Mail size={18} className="group-hover:text-pink-400 transition-colors" />
            <span>Email</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float"
      >
        <ChevronDown size={22} className="text-white/30" />
      </motion.div>
    </section>
  )
}
