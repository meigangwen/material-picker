'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useProgress, Html } from '@react-three/drei'
import { Suspense } from 'react'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

export default function App() {
    return (
        <Canvas shadows camera={{ position: [2.25, 1, 2.25] }}>
            <Suspense fallback={<Loader />}>
                <Environment
                preset="forest"
                background
                ground={{
                height: 2,
                radius: 115,
                scale: 100
                }}
                />
                
                <OrbitControls target={[1.5, 0.8, 1.5]} minPolarAngle={0} maxPolarAngle={Math.PI / 2 + Math.PI / 12} />
            </Suspense>
        </Canvas>
    )
}