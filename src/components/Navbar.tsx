import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#07090e]/85 backdrop-blur-md border-b border-[#1e293b]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-[#0066FF] transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
          <span>{PORTFOLIO_DATA.personal.name}</span>
        </a>

        {/* Zone 2: 4-5 Concise Single-line Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#about"
            className="hover:text-[#00d2ff] transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#what-i-do"
            className="hover:text-[#00d2ff] transition-colors whitespace-nowrap shrink-0"
          >
            What I Do
          </a>
          <a
            href="#journey"
            className="hover:text-[#00d2ff] transition-colors whitespace-nowrap shrink-0"
          >
            Journey
          </a>
          <a
            href="#work"
            className="hover:text-[#00d2ff] transition-colors whitespace-nowrap shrink-0"
          >
            Work
          </a>
          <a
            href="#certificates"
            className="hover:text-[#00d2ff] transition-colors whitespace-nowrap shrink-0"
          >
            Certificates
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Resume Quick Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 hover:text-white border border-[#1e293b] hover:border-[#0066FF]/60 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Resume
          </button>
          <a
            href={`mailto:${PORTFOLIO_DATA.social.email}`}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0052cc] shadow-sm shadow-[#0066FF]/25 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-5 bg-[#0d121d] border-b border-[#1e293b] flex flex-col gap-4 text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-[#00d2ff] py-1"
          >
            About
          </a>
          <a
            href="#what-i-do"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-[#00d2ff] py-1"
          >
            What I Do
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-[#00d2ff] py-1"
          >
            Journey
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-[#00d2ff] py-1"
          >
            Work
          </a>
          <a
            href="#certificates"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-300 hover:text-[#00d2ff] py-1"
          >
            Certificates
          </a>
          <div className="pt-3 border-t border-[#1e293b] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-center py-2 text-xs font-mono font-medium text-slate-200 border border-[#1e293b] rounded-lg"
            >
              View Resume
            </button>
            <a
              href={`mailto:${PORTFOLIO_DATA.social.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-semibold text-white bg-[#0066FF] rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
