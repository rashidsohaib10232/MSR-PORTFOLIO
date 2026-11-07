import { Code, Cpu, BookOpen, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';

export function WhatIDoSection() {
  const [developCard, iotCard] = PORTFOLIO_DATA.whatIDo;

  return (
    <section id="what-i-do" className="py-24 border-t border-[#1e293b]/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] mb-2">
              02 · Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              What I Do
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Two distinct focus areas: Full-stack web platforms and hardware-level IoT embedded systems.
          </p>
        </div>

        {/* Two Structured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Develop */}
          <div className="rounded-2xl bg-[#0d121d] border border-[#1e293b] p-8 sm:p-10 flex flex-col justify-between hover:border-[#0066FF]/60 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0066FF]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0066FF]/10 transition-colors" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 text-[#00d2ff] border border-[#0066FF]/25 flex items-center justify-center mb-6">
                <Code size={24} />
              </div>

              <div className="text-xs font-mono text-[#00d2ff] mb-1 tracking-wider uppercase">
                {developCard.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
                {developCard.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {developCard.description}
              </p>

              {/* Core Verified Skills */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Layers size={13} className="text-[#0066FF]" />
                  <span>Core Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {developCard.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-[#07090e] border border-[#1e293b] hover:border-[#0066FF]/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills marked as Learning */}
              {developCard.learningSkills && developCard.learningSkills.length > 0 && (
                <div className="pt-4 border-t border-[#1e293b]/70">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-3 flex items-center gap-1.5">
                    <BookOpen size={13} className="text-[#00d2ff]" />
                    <span>Currently Learning</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developCard.learningSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-[#38bdf8] bg-[#0066FF]/10 border border-[#0066FF]/30"
                      >
                        {skill} <span className="text-[10px] opacity-75 font-normal ml-1">· Learning</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Highlight */}
            {developCard.highlight && (
              <div className="mt-8 pt-5 border-t border-[#1e293b] text-xs font-mono text-slate-400">
                <span className="text-slate-500">Milestone:</span> {developCard.highlight}
              </div>
            )}
          </div>

          {/* Card 2: IoT & Hardware */}
          <div className="rounded-2xl bg-[#0d121d] border border-[#1e293b] p-8 sm:p-10 flex flex-col justify-between hover:border-[#0066FF]/60 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0066FF]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0066FF]/10 transition-colors" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 text-[#00d2ff] border border-[#0066FF]/25 flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>

              <div className="text-xs font-mono text-[#00d2ff] mb-1 tracking-wider uppercase">
                {iotCard.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
                {iotCard.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {iotCard.description}
              </p>

              {/* Core Verified Skills */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Layers size={13} className="text-[#0066FF]" />
                  <span>Hardware & Embedded Tech</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {iotCard.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-[#07090e] border border-[#1e293b] hover:border-[#0066FF]/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills marked as Learning */}
              {iotCard.learningSkills && iotCard.learningSkills.length > 0 && (
                <div className="pt-4 border-t border-[#1e293b]/70">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-3 flex items-center gap-1.5">
                    <BookOpen size={13} className="text-[#00d2ff]" />
                    <span>Currently Learning</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {iotCard.learningSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-[#38bdf8] bg-[#0066FF]/10 border border-[#0066FF]/30"
                      >
                        {skill} <span className="text-[10px] opacity-75 font-normal ml-1">· Learning</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Highlight */}
            {iotCard.highlight && (
              <div className="mt-8 pt-5 border-t border-[#1e293b] text-xs font-mono text-slate-400">
                <span className="text-slate-500">Live Hardware:</span> {iotCard.highlight}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
