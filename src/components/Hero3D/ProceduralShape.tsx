import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Composite Procedural 3D Floating Tech Shape
 * 
 * Complies with Three.js skill architecture:
 * - 3–12 distinct parts across silhouette scales
 * - Varied roughness and metalness
 * - Electric blue accents (#0066FF & #00d2ff)
 * - Mouse parallax and soft harmonic idle float
 */
export function ProceduralFloatingShape() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const latticeRef = useRef<THREE.Mesh>(null);
  const innerCubeRef = useRef<THREE.Mesh>(null);

  // Pre-allocated reusable vectors for mouse parallax
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Mouse parallax interpolation
    const pointerX = state.pointer.x * 0.35;
    const pointerY = state.pointer.y * 0.35;
    targetRotation.current.x = THREE.MathUtils.damp(targetRotation.current.x, -pointerY, 4, delta);
    targetRotation.current.y = THREE.MathUtils.damp(targetRotation.current.y, pointerX, 4, delta);

    if (groupRef.current) {
      // Harmonic floating bob
      groupRef.current.position.y = Math.sin(t * 1.4) * 0.12;
      groupRef.current.rotation.x = targetRotation.current.x + Math.sin(t * 0.8) * 0.05;
      groupRef.current.rotation.y = targetRotation.current.y + t * 0.25;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.6;
      ring1Ref.current.rotation.y = t * 0.4;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.45;
      ring2Ref.current.rotation.z = t * 0.55;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.5;
    }

    if (latticeRef.current) {
      latticeRef.current.rotation.y = t * 0.35;
      latticeRef.current.rotation.z = -t * 0.2;
    }

    if (innerCubeRef.current) {
      const scale = 1 + Math.sin(t * 3) * 0.08;
      innerCubeRef.current.scale.set(scale, scale, scale);
      innerCubeRef.current.rotation.x = t * 1.1;
      innerCubeRef.current.rotation.y = t * 0.9;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Primary Solid Icosahedron Core */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.85}
          roughness={0.2}
          wireframe={false}
          flatShading
        />
      </mesh>

      {/* 2. Outer Wireframe Lattice Envelope with Electric Blue Glow */}
      <mesh ref={latticeRef}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial
          color="#0066FF"
          emissive="#0052cc"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* 3. Inner Pulsing Core Crystal */}
      <mesh ref={innerCubeRef}>
        <octahedronGeometry args={[0.48, 0]} />
        <meshStandardMaterial
          color="#00d2ff"
          emissive="#0066FF"
          emissiveIntensity={1.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* 4. Gimbal Orbital Ring Alpha */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.7, 0.035, 16, 80]} />
        <meshStandardMaterial
          color="#1e293b"
          emissive="#0066FF"
          emissiveIntensity={0.3}
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      {/* 5. Gimbal Orbital Ring Beta */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.9, 0.025, 16, 80]} />
        <meshStandardMaterial
          color="#334155"
          emissive="#00d2ff"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* 6. Orbital Satellite Nodes */}
      <group rotation={[0.4, 0.6, 0]}>
        <mesh position={[1.7, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#00d2ff" />
        </mesh>
        <mesh position={[-1.7, 0, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#0066FF" />
        </mesh>
        <mesh position={[0, 1.9, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>

      {/* 7. Soft Contact Shadow Plane Grounding */}
      <mesh position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.8, 3.8]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.38}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
