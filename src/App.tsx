import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { WhatIDoSection } from './components/WhatIDoSection.tsx';
import { JourneySection } from './components/JourneySection.tsx';
import { WorkSection } from './components/WorkSection.tsx';
import { CertificatesSection } from './components/CertificatesSection.tsx';
import { TechMarquee } from './components/TechMarquee.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#e2e8f0] relative overflow-hidden selection:bg-[#0066FF]/30 selection:text-white">
      {/* Subtle Desktop-Only Custom Cursor */}
      <CustomCursor />

      {/* Top Bar Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <AboutSection />
        <WhatIDoSection />
        <JourneySection />
        <WorkSection />
        <CertificatesSection />
        <TechMarquee />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
