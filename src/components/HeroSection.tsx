import { useState, useEffect, useRef } from 'react';
import { ArrowDown, FileText, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import gsap from 'gsap';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';
import Hero3DContainer from './Hero3D/index.tsx';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Rotating roles with smooth interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // GSAP text reveal animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-reveal-kicker',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          headlineRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.4'
        )
        .fromTo(
          subtextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const activeRole = PORTFOLIO_DATA.personal.roles[currentRoleIndex];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-20"
        style={{
          backgroundImage: `radial-gradient(#0066FF 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
        aria-hidden="true"
      />

      {/* Top ambient radial spotlight */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#0066FF]/10 blur-[140px] pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography, rotating roles, CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Unboxed clean metadata kicker (anti-slop, zero pills) */}
          <div className="hero-reveal-kicker flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-5">
            <span className="flex items-center gap-1.5 text-[#38bdf8]">
              <Sparkles size={13} className="text-[#00d2ff]" />
              <span>Available for 2026 Opportunities</span>
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-slate-500" />
              <span>Kanpur / Hyderabad</span>
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1">
              <GraduationCap size={13} className="text-slate-500" />
              <span>MANUU CS</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#38bdf8]">{PORTFOLIO_DATA.personal.name}</span>
          </h1>

          {/* Rotating Roles Block */}
          <div className="h-12 sm:h-14 mb-6 flex items-center overflow-hidden">
            <div className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-slate-200 flex items-center gap-2.5">
              <span className="text-slate-400 font-normal">I build as a</span>
              <span
                key={activeRole}
                className="text-[#00d2ff] underline decoration-[#0066FF]/60 decoration-2 underline-offset-4 animate-in fade-in slide-in-from-bottom-2 duration-300 inline-block font-mono font-medium"
              >
                {activeRole}
              </span>
            </div>
          </div>

          {/* Lead Copy */}
          <p
            ref={subtextRef}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-9 font-normal"
          >
            {PORTFOLIO_DATA.personal.aboutBio}
          </p>

          {/* Actions: View Projects & Resume */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#0066FF] hover:bg-[#0052cc] shadow-lg shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-[#0d121d] hover:bg-[#141c2e] border border-[#1e293b] hover:border-[#0066FF]/60 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <FileText size={16} className="text-[#38bdf8]" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Interactive Canvas / Mobile Static Image */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <Hero3DContainer />
        </div>
      </div>
    </section>
  );
}
