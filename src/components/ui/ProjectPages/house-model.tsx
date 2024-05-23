'use client'
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Object3D } from 'three';

interface GLTFResult {
    scene: Object3D;
}

function House() {
    const houseRef = useRef<Object3D>();
    const { scene } = useGLTF('/untitled.glb') as GLTFResult;

    useEffect(() => {
        if (houseRef.current) {
            houseRef.current.rotation.x = Math.PI / 32; // Neige das Haus leicht zu dir
            houseRef.current.scale.set(0.75, 0.75, 0.75); // Skaliere das Haus auf 10%
        }
    }, []);

    useFrame(() => {
        if (houseRef.current) {
            houseRef.current.rotation.y += 0.002; // Langsame Drehung um die Y-Achse
        }
    });

    return <primitive ref={houseRef} object={scene} />;
}
function CameraSetup() {
    const { camera } = useThree();
    useEffect(() => {
        camera.position.set(0, 0, 10); // Setze die Kamera-Position höher und weiter weg
    }, [camera]);
    return null;
}

function HouseModel() {
    return (
        <div className='w-[380px] h-[380px] justify-center flex'>
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight 
                    position={[5, 5, 5]}
                    intensity={1.6} 
                />
                <House />
                <CameraSetup />
                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Infinity}
                    maxAzimuthAngle={Infinity}
                />
            </Canvas>
        </div>
    );
}

export default HouseModel;
