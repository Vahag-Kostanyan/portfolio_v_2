import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';

function AnimatedTorusKnot() {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });
  return (
    <TorusKnot ref={mesh} args={[1, 0.4, 128, 32]}>
      <meshStandardMaterial attach="material" color="#00ffe7" />
    </TorusKnot>
  );
}

const HeroCanvas = () => (
  <Canvas camera={{ position: [0, 0, 4] }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
    <ambientLight intensity={0.7} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <AnimatedTorusKnot />
  </Canvas>
);

export default HeroCanvas; 