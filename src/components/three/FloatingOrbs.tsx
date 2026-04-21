import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

const BRAND_COLORS = ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF"]

type OrbData = {
  position: [number, number, number]
  radius: number
  color: string
  speed: number
  offset: number
  xDrift: number
}

function Orb({ data }: { data: OrbData }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const initialY = data.position[1]
  const initialX = data.position[0]

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    meshRef.current.position.y = initialY + Math.sin(t * data.speed + data.offset) * 0.6
    meshRef.current.position.x = initialX + Math.cos(t * data.speed * 0.7 + data.offset) * data.xDrift
    meshRef.current.rotation.x = t * 0.2
    meshRef.current.rotation.y = t * 0.3
  })

  return (
    <mesh ref={meshRef} position={data.position}>
      <sphereGeometry args={[data.radius, 32, 32]} />
      <meshStandardMaterial
        color={data.color}
        emissive={data.color}
        emissiveIntensity={0.6}
        roughness={0.1}
        metalness={0.3}
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}

export function FloatingOrbs() {
  const orbs = useMemo<OrbData[]>(() => {
    const seed = [
      [-4.2, 1.8, -3], [3.5, -1.2, -4], [-1.8, -2.5, -2.5], [2.2, 2.8, -3.5],
      [-3.0, 0.4, -5], [4.0, 1.0, -4.5], [0.5, -3.0, -3], [-2.5, 3.0, -4],
      [1.5, 1.5, -2], [-0.5, -1.0, -5.5],
    ]
    return seed.map((pos, i) => ({
      position: pos as [number, number, number],
      radius: 0.18 + (i % 5) * 0.12,
      color: BRAND_COLORS[i % BRAND_COLORS.length],
      speed: 0.3 + (i % 4) * 0.15,
      offset: i * 0.9,
      xDrift: 0.1 + (i % 3) * 0.08,
    }))
  }, [])

  return (
    <>
      {orbs.map((orb, i) => (
        <Orb key={i} data={orb} />
      ))}
    </>
  )
}
