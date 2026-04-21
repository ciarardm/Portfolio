import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true)
      return
    }

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleEnter = () => setIsHovering(true)
    const handleLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", handleMove)

    const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea")
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter)
      el.addEventListener("mouseleave", handleLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMove)
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter)
        el.removeEventListener("mouseleave", handleLeave)
      })
    }
  }, [mouseX, mouseY])

  if (isTouch) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] top-0 left-0"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          borderRadius: "50%",
          background: "#ffffff",
          transition: "width 0.15s, height 0.15s",
        }}
      />
      {/* Glow trail */}
      <motion.div
        className="pointer-events-none fixed z-[9998] top-0 left-0"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(131,56,236,0.5) 0%, rgba(58,134,255,0.3) 50%, transparent 70%)",
          filter: "blur(4px)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
    </>
  )
}
