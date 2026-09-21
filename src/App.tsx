import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certificate } from './components/Certificate';
import { Goal } from './components/Goal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificateModal, ProjectModal } from './components/Modals';
import { ProjectItem } from './types';
import { triggerCVDownload } from './utils/downloadCV';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  // ScrollSpy to keep active navigation link in sync
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'certificate',
      'goal',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    triggerCVDownload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-lavender-dark selection:bg-lavender-200 selection:text-lavender-dark">
      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onDownloadCV={handleDownloadCV}
      />

      {/* Main Content Sections matching the reference design */}
      <main className="flex-grow">
        {/* 1. Hero Section with Arch Portrait, Orbital Badges, and Stats */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onConnect={() => scrollToSection('contact')}
        />

        {/* 2. Who I Am / About Me with Handwritten Signature Quote */}
        <AboutMe />

        {/* 3. Expertise & Abilities / Highlighted Skills */}
        <Skills />

        {/* 4. Selected Works / My Projects */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Academic Journey / Education & Training Timeline */}
        <Education />

        {/* 6. Credentials / Professional Certificate with Preview */}
        <Certificate
          onViewFullCertificate={() => setCertModalOpen(true)}
        />

        {/* 7. Vision & Mission / My Goal */}
        <Goal />

        {/* 8. Get In Touch / Contact Me */}
        <Contact />
      </main>

      {/* Footer with Copyright and Socials */}
      <Footer />

      {/* Interactive Modals */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
