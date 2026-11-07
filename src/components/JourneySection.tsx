import { Calendar, Award, Code2, GraduationCap, Flag, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';

export function JourneySection() {
  const icons = [
    <Code2 size={16} key="iot" />,
    <Award size={16} key="scouts" />,
    <Calendar size={16} key="live" />,
    <GraduationCap size={16} key="manuu" />,
    <Flag size={16} key="iitb" />,
    <Users size={16} key="club" />
  ];

  return (
    <section id="journey" className="py-24 border-t border-[#1e293b]/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] mb-2">
              03 · Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              My Journey
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            The authentic path from early school circuits in Kanpur to university leadership, live payment systems, and coding community creation.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central/left spine */}
          <div
            className="absolute top-3 bottom-3 left-4 sm:left-6 w-px bg-gradient-to-b from-[#0066FF] via-[#0066FF]/40 to-[#1e293b]"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {PORTFOLIO_DATA.journey.map((item, idx) => (
              <div key={item.title} className="relative pl-12 sm:pl-16 group">
                {/* Node indicator */}
                <div className="absolute left-1.5 sm:left-3.5 top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-[#07090e] border-2 border-[#0066FF] text-[#00d2ff] flex items-center justify-center shadow-md shadow-[#0066FF]/30 group-hover:scale-115 group-hover:border-[#00d2ff] transition-all duration-200">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF] group-hover:bg-[#00d2ff]" />
                </div>

                {/* Timeline Card */}
                <div className="bg-[#0d121d] border border-[#1e293b] rounded-xl p-6 sm:p-7 hover:border-[#0066FF]/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-[#00d2ff] uppercase tracking-wider flex items-center gap-1.5">
                      {icons[idx % icons.length]}
                      <span>{item.period}</span>
                    </span>

                    {item.tag && (
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-1 group-hover:text-[#38bdf8] transition-colors">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <div className="text-xs font-medium text-slate-400 mb-3">
                      {item.subtitle}
                    </div>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
