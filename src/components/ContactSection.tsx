import { useState } from 'react';
import { Mail, Linkedin, Github, Code, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#1e293b]/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] mb-2">
              07 · Connect
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Let's Build Together
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Open to software engineering internships, technical collaborations, and hackathon teams. Direct email and profiles below.
          </p>
        </div>

        {/* Contact Banner Card */}
        <div className="rounded-3xl bg-[#0d121d] border border-[#1e293b] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side: Email & Direct Mailto */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-[#00d2ff] tracking-wider uppercase block mb-3">
                Direct Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                Have a project or opportunity in mind?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl">
                I am actively seeking software internships, collaborative IoT builds, and technical discussions. Drop me a note and I'll respond promptly.
              </p>

              {/* Email badge with mailto and copy */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.social.email}`}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0052cc] shadow-md shadow-[#0066FF]/25 flex items-center gap-2.5 transition-all"
                >
                  <Mail size={16} />
                  <span>{PORTFOLIO_DATA.social.email}</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-[#07090e] border border-[#1e293b] hover:border-[#0066FF]/60 flex items-center gap-2 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#00d2ff]" />
                      <span className="text-[#00d2ff]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right side: Verified Social & Code Hubs */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Engineering Profiles
              </span>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#07090e] border border-[#1e293b] hover:border-[#0066FF]/60 flex items-center justify-between text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 text-[#00d2ff] flex items-center justify-center">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">LinkedIn</div>
                    <div className="text-xs text-slate-400">/in/sohaib-rashid-msr</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LeetCode */}
              <a
                href={PORTFOLIO_DATA.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#07090e] border border-[#1e293b] hover:border-[#0066FF]/60 flex items-center justify-between text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 text-[#00d2ff] flex items-center justify-center">
                    <Code size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">LeetCode</div>
                    <div className="text-xs text-slate-400">leetcode.com/u/MSRP1/</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#07090e] border border-[#1e293b] hover:border-[#0066FF]/60 flex items-center justify-between text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 text-[#00d2ff] flex items-center justify-center">
                    <Github size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">GitHub</div>
                    <div className="text-xs text-slate-400">github.com/sohaibrashid-msr</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-500 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
