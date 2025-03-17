"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei"
import type { Mesh, Group } from "three"

// This would be replaced with actual model data in a real app
const getModelData = (patternId: string, step: number) => {
  // In a real app, this would return different models for each step
  // For now, we'll just use the duck model as a placeholder
  return {
    modelPath: "/assets/3d/duck.glb",
    initialRotation: [0, step * 0.5, 0],
    initialPosition: [0, 0, 0],
    initialScale: 2,
  }
}

function OrigamiModel({ patternId, step }: { patternId: string; step: number }) {
  const modelData = getModelData(patternId, step)
  const { scene } = useGLTF(modelData.modelPath)
  const modelRef = useRef<Group>(null)

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(
        modelData.initialRotation[0],
        modelData.initialRotation[1],
        modelData.initialRotation[2],
      )
      modelRef.current.position.set(
        modelData.initialPosition[0],
        modelData.initialPosition[1],
        modelData.initialPosition[2],
      )
      modelRef.current.scale.setScalar(modelData.initialScale)
    }
  }, [modelData])

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Add subtle animation
      modelRef.current.rotation.y += delta * 0.1
    }
  })

  return <primitive ref={modelRef} object={scene} />
}

// This component would show the folding animation
//eslint-disable-next-line
function FoldingAnimation({ patternId, step }: { patternId: string; step: number }) {
  //eslint-disable-next-line
  const meshRef = useRef<Mesh>(null)  
  //eslint-disable-next-line
  const { viewport } = useThree()

  // In a real app, this would be replaced with actual folding animation logic
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  // This is a placeholder for the actual folding animation
  // In a real app, this would be replaced with a proper paper model with folding animations
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 0.05, 2]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  )
}

export function OrigamiViewer({ patternId, step }: { patternId: string; step: number }) {
  const [showModel, setShowModel] = useState(true)

  return (
    <div className="relative h-full w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="studio" />

        {showModel ? (
          <OrigamiModel patternId={patternId} step={step} />
        ) : (
          <FoldingAnimation patternId={patternId} step={step} />
        )}

        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => setShowModel(!showModel)}
          className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground"
        >
          {showModel ? "Show Paper Folding" : "Show 3D Model"}
        </button>
      </div>
    </div>
  )
}

