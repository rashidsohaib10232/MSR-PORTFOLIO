import { Suspense, Component, type ErrorInfo, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { AvatarModel } from './AvatarModel.tsx';
import { ProceduralFloatingShape } from './ProceduralShape.tsx';

class ThreeErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('3D canvas caught handled error, rendering procedural fallback:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function HeroCanvas() {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[520px] relative flex items-center justify-center">
      {/* Background ambient radial glow in electric blue */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-60"
        aria-hidden="true"
      >
        <div className="w-[320px] h-[320px] lg:w-[460px] lg:h-[460px] rounded-full bg-[#0066FF]/20 blur-[90px]" />
      </div>

      <ThreeErrorBoundary
        fallback={
          <div className="flex flex-col items-center justify-center text-center p-6">
            <div className="w-24 h-24 rounded-2xl bg-[#0d121d] border border-[#1e293b] flex items-center justify-center text-[#0066FF] shadow-lg shadow-[#0066FF]/10 mb-4">
              <span className="font-mono text-2xl font-bold">MSR</span>
            </div>
            <p className="text-xs text-slate-400">Interactive 3D Engine Ready</p>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 4.6], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          dpr={[1, 1.75]}
        >
          {/* Lighting Rig adhering to Three.js skill */}
          <ambientLight intensity={0.4} />
          
          {/* Cool Electric Blue Key Light */}
          <directionalLight
            position={[4, 5, 4]}
            intensity={1.4}
            color="#93c5fd"
          />

          {/* Warm/Violet Contrast Rim Light */}
          <directionalLight
            position={[-4, -2, -3]}
            intensity={0.8}
            color="#38bdf8"
          />

          {/* Deep Hemisphere Light */}
          <hemisphereLight
            args={['#0066FF', '#07090e', 0.6]}
          />

          {/* Point Light Accent at Origin */}
          <pointLight position={[0, 0, 2]} intensity={0.6} color="#00d2ff" distance={6} />

          <Suspense fallback={<ProceduralFloatingShape />}>
            <Float
              speed={1.6}
              rotationIntensity={0.3}
              floatIntensity={0.4}
              floatingRange={[-0.08, 0.08]}
            >
              <AvatarModel />
            </Float>
          </Suspense>
        </Canvas>
      </ThreeErrorBoundary>

      {/* Subtle interaction tip */}
      <div 
        className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0d121d]/70 backdrop-blur-xs border border-[#1e293b]/60 text-[11px] font-mono text-slate-400 pointer-events-none select-none tracking-wide"
      >
        3D Interactive · Drag to inspect
      </div>
    </div>
  );
}
