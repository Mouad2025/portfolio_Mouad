import React, { useState, useEffect, useMemo } from 'react';
import { initialProfile } from './data/portfolioData';
import { ProfileData, ProjectItem } from './types';
import { generatePdfResume } from './utils/generatePdfResume';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { getLocalizedPortfolioData } from './translations/portfolioDataTranslations';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionPlayground } from './components/VisionPlayground';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Publications } from './components/Publications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

function AppContent() {
  const { language, isRTL } = useLanguage();

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'light' || saved === 'dark') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    } catch (e) {
      console.warn('Failed to load theme preference', e);
    }
    return 'dark';
  });

  // Localized dataset based on current selected language (English, Arabic, French)
  const localizedData = useMemo(() => {
    return getLocalizedPortfolioData(language);
  }, [language]);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Synchronize document theme class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch (e) {
      console.warn('Failed to save theme to localStorage', e);
    }
  }, [theme]);

  // Synchronize document title with engineer's name
  useEffect(() => {
    document.title = `${initialProfile.name} — ${initialProfile.title}`;
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleDownloadResume = () => {
    generatePdfResume({
      profile: initialProfile,
      projects: localizedData.projects,
      skills: localizedData.skills,
      experience: localizedData.experience,
      education: localizedData.education,
      certifications: localizedData.certifications
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white' 
        : 'bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white'
    } flex flex-col font-sans`}>
      
      {/* Fixed Navigation with Dark/Light mode toggle and Language Switcher */}
      <Navbar
        profile={initialProfile}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          profile={initialProfile}
          theme={theme}
          onDownloadResume={handleDownloadResume}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Biography & Experience Section */}
        <About
          profile={initialProfile}
          theme={theme}
          experience={localizedData.experience}
          education={localizedData.education}
          certifications={localizedData.certifications}
          testimonials={localizedData.testimonials}
        />

        {/* Live Computer Vision Inference & Diagnostics Lab */}
        <VisionPlayground
          theme={theme}
        />

        {/* Projects Showcase Section */}
        <Projects
          projects={localizedData.projects}
          theme={theme}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Skills & Ecosystem Section */}
        <Skills 
          skills={localizedData.skills} 
          theme={theme}
        />

        {/* Academic Works & Research Publications Section */}
        <Publications
          publications={localizedData.publications}
          theme={theme}
          onDownloadResume={handleDownloadResume}
        />

        {/* Dedicated PDF Resume Download Section */}
        <ResumeSection
          profile={initialProfile}
          theme={theme}
          projects={localizedData.projects}
          skills={localizedData.skills}
          experience={localizedData.experience}
          education={localizedData.education}
          certifications={localizedData.certifications}
          onDownloadPdf={handleDownloadResume}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Contact Form & Professional Coordinates */}
        <Contact 
          profile={initialProfile} 
          theme={theme}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={initialProfile}
        theme={theme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        theme={theme}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        theme={theme}
        onClose={() => setResumeModalOpen(false)}
        profile={initialProfile}
        projects={localizedData.projects}
        skills={localizedData.skills}
        experience={localizedData.experience}
        education={localizedData.education}
        certifications={localizedData.certifications}
        onDownloadPdf={handleDownloadResume}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
