import { PORTFOLIO_DATA } from '../data/portfolio.ts';

export function TechMarquee() {
  // Duplicate array to ensure seamless infinite looping
  const marqueeItems = [...PORTFOLIO_DATA.skillsMarquee, ...PORTFOLIO_DATA.skillsMarquee];

  return (
    <section className="py-16 border-t border-b border-[#1e293b]/60 bg-[#07090e]/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-[#00d2ff]">
          06 · Verified Tech Stack
        </span>
        <span className="text-xs font-mono text-slate-500">
          Core Languages · Embedded · Backend · Learning
        </span>
      </div>

      {/* Edge gradient masks for smooth fade-in and fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />

      {/* Endless Marquee Track */}
      <div className="flex overflow-hidden select-none py-2">
        <div className="animate-marquee flex items-center gap-4">
          {marqueeItems.map((item, index) => {
            const isLearning = item.name.includes('(Learning)');
            return (
              <div
                key={`${item.name}-${index}`}
                className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-mono font-medium flex items-center gap-3 transition-colors ${
                  isLearning
                    ? 'bg-[#0066FF]/10 text-[#38bdf8] border border-[#0066FF]/30'
                    : 'bg-[#0d121d] text-slate-200 border border-[#1e293b] hover:border-[#0066FF]/50'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span>{item.name}</span>
                <span className="text-[10px] text-slate-500 font-normal uppercase tracking-wider">
                  [{item.category}]
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
