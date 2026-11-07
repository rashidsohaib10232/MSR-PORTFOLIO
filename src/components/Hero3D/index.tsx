import { useState, useEffect, lazy, Suspense } from 'react';
import avatarMobileImg from '../../assets/images/avatar_mobile_hero_1794029928102.jpg';

// Lazy-load the heavy 3D Canvas
const LazyHeroCanvas = lazy(() =>
  import('./HeroCanvas.tsx').then((mod) => ({ default: mod.HeroCanvas }))
);

export default function Hero3DContainer() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);

    const checkMobile = () => {
      const isNarrow = window.innerWidth < 768;
      const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(isNarrow || isCoarsePointer);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!hasMounted) {
    return (
      <div className="w-full h-[380px] lg:h-[500px] flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-2 border-[#0066FF]/30 border-t-[#0066FF] animate-spin" />
      </div>
    );
  }

  // Mobile mode: disable heavy 3D and display static image asset
  if (isMobile) {
    return (
      <div className="w-full max-w-[340px] mx-auto py-6 flex flex-col items-center">
        <div className="relative group">
          {/* Subtle electric blue rim aura */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#0066FF] to-[#00d2ff] opacity-40 blur-lg group-hover:opacity-70 transition duration-500" />
          
          <div className="relative rounded-2xl overflow-hidden border border-[#1e293b] bg-[#0d121d] shadow-2xl">
            <img
              src={avatarMobileImg}
              alt="Sohaib Rashid 3D Developer Avatar"
              className="w-full h-auto object-cover aspect-square"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#07090e]/80 border border-[#1e293b] text-[11px] font-mono text-[#38bdf8]">
                Sohaib Rashid · 3D Avatar
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop mode: render interactive 3D Canvas
  return (
    <div className="w-full h-[460px] lg:h-[540px] relative">
      <Suspense
        fallback={
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-[#0066FF]/30 border-t-[#0066FF] animate-spin" />
            <span className="font-mono text-xs tracking-wider">INITIALIZING 3D ENGINE...</span>
          </div>
        }
      >
        <LazyHeroCanvas />
      </Suspense>
    </div>
  );
}
