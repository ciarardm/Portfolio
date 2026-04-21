import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import type { SectionId, NavItem } from "@/types"

const navItems: NavItem[] = [
  { label: "Home", id: "hero", href: "#hero" },
  { label: "Skills", id: "skills", href: "#skills" },
  { label: "Experience", id: "experience", href: "#experience" },
  { label: "Certifications", id: "certifications", href: "#certifications" },
  { label: "Contact", id: "contact", href: "#contact" },
]

const brandColors: Record<SectionId, string> = {
  hero: "#FFBE0B",
  skills: "#FB5607",
  experience: "#FF006E",
  certifications: "#8338EC",
  contact: "#3A86FF",
}

interface NavbarProps {
  activeSection: SectionId
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="glass border-b border-white/10"
        style={{ borderBottom: `1px solid rgba(255,255,255,0.08)` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="text-sm font-semibold tracking-tight text-white hover:opacity-80 transition-opacity"
            aria-label="Back to top"
          >
            <span style={{ color: brandColors[activeSection] }}>CR</span>
            <span className="text-white/70">DM</span>
          </button>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full"
                  style={{ color: isActive ? brandColors[item.id] : "rgba(255,255,255,0.6)" }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `${brandColors[item.id]}18`,
                        border: `1px solid ${brandColors[item.id]}40`,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-b border-white/10"
          >
            <nav aria-label="Mobile navigation" className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                    style={{
                      color: isActive ? brandColors[item.id] : "rgba(255,255,255,0.7)",
                      background: isActive ? `${brandColors[item.id]}12` : "transparent",
                    }}
                  >
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
