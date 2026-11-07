import { useState, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { ProceduralFloatingShape } from './ProceduralShape.tsx';

/**
 * GLTF Avatar loaded from public/models/avatar.glb
 */
function GlbAvatar() {
  const { scene } = useGLTF('/models/avatar.glb');
  const avatarGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (avatarGroupRef.current) {
      const t = state.clock.getElapsedTime();
      // Soft breathing idle animation and subtle head/body sway
      avatarGroupRef.current.position.y = Math.sin(t * 1.6) * 0.05 - 1.25;
      avatarGroupRef.current.rotation.y = Math.sin(t * 0.6) * 0.12;
    }
  });

  return (
    <group ref={avatarGroupRef} position={[0, -1.25, 0]}>
      <primitive object={scene} scale={1.85} />
    </group>
  );
}

/**
 * AvatarModel orchestrator:
 * Probes whether /models/avatar.glb exists on the server.
 * If present, loads it with soft idle animation.
 * If absent, gracefully falls back to ProceduralFloatingShape with no console errors.
 */
export function AvatarModel() {
  const [modelAvailable, setModelAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;

    // Probe the file via HEAD request to prevent GLTFLoader uncaught 404s
    fetch('/models/avatar.glb', { method: 'HEAD' })
      .then((res) => {
        if (!active) return;
        const exists = res.ok && res.status < 400 && res.headers.get('content-type')?.includes('octet-stream') !== false;
        setModelAvailable(exists);
      })
      .catch(() => {
        if (active) setModelAvailable(false);
      });

    return () => {
      active = false;
    };
  }, []);

  if (modelAvailable === true) {
    return <GlbAvatar />;
  }

  // Fallback while probing or when model is absent
  return <ProceduralFloatingShape />;
}
