import { GraduationCap, MapPin, CheckCircle2, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio.ts';

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-[#1e293b]/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] mb-2">
              01 · About
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Engineering Foundations & Drive
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Hands-on builder bridging physical embedded hardware with internet-scale software and applied machine intelligence.
          </p>
        </div>

        {/* Narrative & Metric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-[#0d121d] border border-[#1e293b] rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 leading-snug">
              B.Tech Computer Science student at MANUU Hyderabad, originally from Kanpur.
            </h3>

            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                My curiosity started back in Class 9 when I first wired together microcontrollers and realized software can manipulate physical circuits. Over the years, that expanded into full-stack development, database architecture, and deploying real merchant tools.
              </p>
              <p>
                In 2025, I shipped a live digital storefront with integrated, real-time UPI payments—handling actual financial transactions and instant digital fulfillment.
              </p>
              <p className="text-[#38bdf8] font-medium pt-2">
                Today, I am systematically sharpening my Data Structures & Algorithms (DSA) and studying Machine Learning fundamentals with the dedicated aim of becoming an AI/ML Engineer.
              </p>
            </div>

            {/* Unboxed Metadata Highlights (Anti-slop) */}
            <div className="mt-8 pt-8 border-t border-[#1e293b] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin size={14} className="text-[#0066FF]" />
                From Kanpur, Uttar Pradesh
              </span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap size={14} className="text-[#0066FF]" />
                B.Tech CS · MANUU Hyderabad
              </span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span className="flex items-center gap-1.5 text-[#00d2ff]">
                <Target size={14} />
                Aspiring AI/ML Engineer
              </span>
            </div>
          </div>

          {/* Quick Pillars Right Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#0d121d]/70 border border-[#1e293b] hover:border-[#0066FF]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 text-[#00d2ff] flex items-center justify-center shrink-0 border border-[#0066FF]/20">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Production Web Deployment</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Proven track record building and launching live responsive applications with real-time backends (Supabase), serverless functions, and third-party APIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0d121d]/70 border border-[#1e293b] hover:border-[#0066FF]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 text-[#00d2ff] flex items-center justify-center shrink-0 border border-[#0066FF]/20">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Authentic Fintech Integration</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Designed and deployed a functioning UPI merchant checkout pipeline handling QR dynamic links and order completion.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0d121d]/70 border border-[#1e293b] hover:border-[#0066FF]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 text-[#00d2ff] flex items-center justify-center shrink-0 border border-[#0066FF]/20">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">Hardware & Automation</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Practical experience designing IoT circuits, ESP32 web servers, and physical automation modules running in real home settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
