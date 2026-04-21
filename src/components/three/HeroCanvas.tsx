import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { FloatingOrbs } from "./FloatingOrbs"

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <fog attach="fog" args={["#0a0a0a", 8, 20]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#8338EC" />
        <pointLight position={[-5, -3, 3]} intensity={1.5} color="#3A86FF" />
        <pointLight position={[0, 3, 2]} intensity={1} color="#FF006E" />
        <Suspense fallback={null}>
          <FloatingOrbs />
        </Suspense>
      </Canvas>
    </div>
  )
}
