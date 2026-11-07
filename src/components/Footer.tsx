import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#1e293b]/60 bg-[#07090e] text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Core statement */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
          <span className="text-slate-300 font-medium">
            {PORTFOLIO_DATA.footer.text}
          </span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>© {PORTFOLIO_DATA.footer.year}</span>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={PORTFOLIO_DATA.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d2ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PORTFOLIO_DATA.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d2ff] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d2ff] transition-colors"
          >
            LeetCode
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.social.email}`}
            className="hover:text-[#00d2ff] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1e293b] hover:border-[#0066FF] hover:text-white transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
