import { LazyMotion, domAnimation } from "framer-motion"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/layout/Navbar"
import { BackToTop } from "@/components/layout/BackToTop"
import { CustomCursor } from "@/components/cursor/CustomCursor"
import { HeroSection } from "@/components/sections/HeroSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { CertificationsSection } from "@/components/sections/CertificationsSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { useActiveSection } from "@/hooks/useActiveSection"

function App() {
  const activeSection = useActiveSection()

  return (
    <LazyMotion features={domAnimation}>
      <TooltipProvider>
        <CustomCursor />
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <footer className="py-8 text-center text-xs text-white/30 border-t border-white/5">
          <p>
            Crafted with care by{" "}
            <span className="text-white/50">Ciara Rose Dela Masa</span>
            {" "}· © {new Date().getFullYear()}
          </p>
        </footer>
        <BackToTop />
      </TooltipProvider>
    </LazyMotion>
  )
}

export default App
