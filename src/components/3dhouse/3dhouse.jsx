'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function RotatingHouse() {
  const containerRef = useRef();
  const initializedRef = useRef(false); 
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('./textur.jpg');

  useEffect(() => {
    if (!initializedRef.current) { 
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); 
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(400, 400); 
      renderer.setClearColor(0xffffff, 1);
      containerRef.current.appendChild(renderer.domElement);

      const loader = new GLTFLoader();

      loader.load(
        './house-spiral.glb',
        function (gltf) {
          const house = gltf.scene;
          scene.add(house);

          house.position.y = 0.4;

          house.traverse((child) => {
            if (child.isMesh) {
              child.material.map = texture;
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          house.rotation.x = 0.5;

          const animateHouse = () => {
            house.rotation.y += 0.005;
          };

          const animate = () => {
            requestAnimationFrame(animate);
            animateHouse();
            renderer.render(scene, camera);
          };

          animate();
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );

      renderer.shadowMap.enabled = true;
      
      const ambientLight = new THREE.AmbientLight(0xffffff, 2);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(70, 120, 180);

      scene.add(directionalLight);
      directionalLight.castShadow = true;
      
      camera.position.z = 3.5;

      initializedRef.current = true; 
    }
  }, []); 

  return <div className='' ref={containerRef} style={{ width: '400px', height: '400px' }} />;
}
