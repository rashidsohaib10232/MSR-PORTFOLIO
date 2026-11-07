import { useRef, useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolio.ts';

export function WorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = Math.min(scrollContainerRef.current.clientWidth * 0.8, 420);
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="work" className="py-24 border-t border-[#1e293b]/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] mb-2">
              04 · Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Scroll horizontally to explore
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-xl bg-[#0d121d] border border-[#1e293b] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0066FF] disabled:opacity-30 disabled:hover:border-[#1e293b] transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-xl bg-[#0d121d] border border-[#1e293b] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0066FF] disabled:opacity-30 disabled:hover:border-[#1e293b] transition-colors cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PORTFOLIO_DATA.projects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="snap-start shrink-0 w-[310px] sm:w-[370px] lg:w-[400px] rounded-2xl bg-[#0d121d] border border-[#1e293b] hover:border-[#0066FF]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Visual Header / Banner Art with Project Identity */}
                <div className="h-32 sm:h-36 rounded-xl bg-gradient-to-br from-[#07090e] via-[#0d1525] to-[#0a1120] border border-[#1e293b] p-4 flex flex-col justify-between mb-6 relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider">
                      {project.tag}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-[#00d2ff]">
                        <Sparkles size={11} /> Featured
                      </span>
                    )}
                  </div>

                  {/* Stylized typographic watermark/symbol */}
                  <div className="z-10">
                    <span className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#38bdf8] transition-colors">
                      {project.title}
                    </span>
                  </div>

                  {/* Ambient accent blob inside card banner */}
                  <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#0066FF]/20 rounded-full blur-xl group-hover:bg-[#0066FF]/35 transition-colors" />
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-[#07090e] border border-[#1e293b]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Live Link or Coming Soon */}
              <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between">
                {project.isLive && project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0052cc] flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>Visit Live Application</span>
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <div className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-slate-400 bg-[#07090e] border border-[#1e293b] flex items-center justify-center gap-2">
                    <Clock size={13} className="text-[#0066FF]" />
                    <span>Link coming soon</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
