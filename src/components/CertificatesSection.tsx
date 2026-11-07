import { useState, useEffect } from 'react';
import { Award, ExternalLink, X, FileCheck, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA, type CertificateItem } from '../data/portfolio.ts';

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [fileExists, setFileExists] = useState<boolean | null>(null);

  // Probe file existence when modal opens
  useEffect(() => {
    if (!selectedCert || !selectedCert.fileName) {
      setFileExists(false);
      return;
    }

    let active = true;
    const targetUrl = `/certificates/${selectedCert.fileName}`;

    fetch(targetUrl, { method: 'HEAD' })
      .then((res) => {
        if (!active) return;
        setFileExists(res.ok && res.status < 400);
      })
      .catch(() => {
        if (active) setFileExists(false);
      });

    return () => {
      active = false;
    };
  }, [selectedCert]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="py-24 border-t border-[#1e293b]/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] mb-2">
              05 · Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Certifications & Honours
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Click on any credential card to inspect certificate details, skills gained, and verified documents.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="rounded-2xl bg-[#0d121d] border border-[#1e293b] hover:border-[#0066FF]/60 p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 text-[#00d2ff] border border-[#0066FF]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Award size={20} />
                  </div>
                  {cert.year && (
                    <span className="text-xs font-mono text-slate-400">
                      {cert.year}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-[#38bdf8] transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs text-[#00d2ff] font-medium mb-3">
                  {cert.issuer}
                </div>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                <span>View Certificate</span>
                <ExternalLink size={13} className="text-[#0066FF] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Popup Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-xl bg-[#0d121d] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1e293b] transition-colors"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/15 text-[#00d2ff] border border-[#0066FF]/30 flex items-center justify-center">
                <FileCheck size={20} />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00d2ff] uppercase tracking-wider">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            {/* Skills Gained */}
            {selectedCert.skillsGained && (
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Skills & Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skillsGained.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#07090e] border border-[#1e293b] text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* File Status Container */}
            <div className="p-4 rounded-xl bg-[#07090e] border border-[#1e293b] mb-6">
              {fileExists === true ? (
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#38bdf8]">
                    Verified document available: {selectedCert.fileName}
                  </span>
                  <a
                    href={`/certificates/${selectedCert.fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0052cc] transition-colors flex items-center gap-1.5"
                  >
                    <span>Open File</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              ) : (
                <div className="flex items-start gap-3 text-left">
                  <AlertCircle size={18} className="text-[#38bdf8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white font-mono">
                      File coming soon
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Place <code className="text-[#00d2ff] font-mono">{selectedCert.fileName}</code> inside <code className="text-slate-300 font-mono">public/certificates/</code> to load the digital copy directly here.
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-[#1e293b]/50 hover:bg-[#1e293b] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
