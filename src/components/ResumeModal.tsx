import { useState, useEffect } from 'react';
import { X, Download, Mail, ExternalLink, GraduationCap, Award, Code, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [resumeFileExists, setResumeFileExists] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    let active = true;
    fetch(`/${PORTFOLIO_DATA.personal.resumeFileName}`, { method: 'HEAD' })
      .then((res) => {
        if (!active) return;
        setResumeFileExists(res.ok && res.status < 400);
      })
      .catch(() => {
        if (active) setResumeFileExists(false);
      });

    return () => {
      active = false;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] bg-[#0d121d] border border-[#1e293b] rounded-2xl flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#1e293b] flex items-start justify-between bg-[#07090e]/60">
          <div>
            <div className="text-xs font-mono text-[#00d2ff] uppercase tracking-wider mb-1">
              Curriculum Vitae
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {PORTFOLIO_DATA.personal.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {PORTFOLIO_DATA.personal.education} · {PORTFOLIO_DATA.personal.location}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1e293b] transition-colors cursor-pointer"
            aria-label="Close Resume"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed">
          {/* Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Summary
            </h3>
            <p className="bg-[#07090e] p-4 rounded-xl border border-[#1e293b] text-slate-200">
              {PORTFOLIO_DATA.personal.aboutBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <GraduationCap size={15} className="text-[#0066FF]" />
              <span>Education</span>
            </h3>
            <div className="p-4 rounded-xl bg-[#07090e] border border-[#1e293b]">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <span className="font-semibold text-white">B.Tech in Computer Science</span>
                <span className="text-xs font-mono text-[#38bdf8]">2026</span>
              </div>
              <div className="text-xs text-slate-400">Maulana Azad National Urdu University (MANUU), Hyderabad</div>
            </div>
          </div>

          {/* Key Shipped Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Code size={15} className="text-[#0066FF]" />
              <span>Key Projects Shipped</span>
            </h3>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.filter((p) => p.isLive).slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#07090e] border border-[#1e293b]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">{proj.title} — {proj.tag}</span>
                    <span className="text-[11px] font-mono text-emerald-400">Live</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0d121d] border border-[#1e293b] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honours */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Award size={15} className="text-[#0066FF]" />
              <span>Honours & Leadership</span>
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#00d2ff] shrink-0 mt-0.5" />
                <span><strong className="text-white">Rajya Puraskar:</strong> Governor Award by The Bharat Scouts & Guides.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#00d2ff] shrink-0 mt-0.5" />
                <span><strong className="text-white">College Ambassador:</strong> Techfest IIT Bombay (2026).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#00d2ff] shrink-0 mt-0.5" />
                <span><strong className="text-white">Founder:</strong> MANUU Coding Club community and website.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#1e293b] flex flex-wrap items-center justify-between gap-4 bg-[#07090e]/60">
          <div className="text-xs font-mono text-slate-400">
            {resumeFileExists ? (
              <span className="text-emerald-400">PDF file ready for download</span>
            ) : (
              <span>Add <code className="text-[#00d2ff]">{PORTFOLIO_DATA.personal.resumeFileName}</code> to public/ to download PDF</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {resumeFileExists ? (
              <a
                href={`/${PORTFOLIO_DATA.personal.resumeFileName}`}
                download
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0052cc] flex items-center gap-2 transition-colors"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>
            ) : null}

            <a
              href={`mailto:${PORTFOLIO_DATA.social.email}?subject=Interview%20/%20Opportunity%20Inquiry%20-%20Sohaib%20Rashid`}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-[#1e293b] hover:bg-[#283548] flex items-center gap-2 transition-colors"
            >
              <Mail size={14} />
              <span>Contact Sohaib</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
