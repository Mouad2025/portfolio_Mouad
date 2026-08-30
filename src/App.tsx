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
import { EditProfileModal } from './components/EditProfileModal';

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

  const [customProfile, setCustomProfile] = useState<ProfileData | null>(() => {
    try {
      const saved = localStorage.getItem('user_portfolio_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load profile from localStorage', e);
    }
    return null;
  });

  // If user edited profile locally in modal, use that, otherwise use localized profile
  const activeProfile = useMemo(() => {
    return customProfile || localizedData.profile;
  }, [customProfile, localizedData.profile]);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

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
    document.title = `${activeProfile.name} — ${activeProfile.title}`;
  }, [activeProfile.name, activeProfile.title]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleDownloadResume = () => {
    generatePdfResume({
      profile: activeProfile,
      projects: localizedData.projects,
      skills: localizedData.skills,
      experience: localizedData.experience,
      education: localizedData.education,
      certifications: localizedData.certifications
    });
  };

  const handleSaveProfile = (updated: ProfileData) => {
    setCustomProfile(updated);
    try {
      localStorage.setItem('user_portfolio_profile', JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save profile to localStorage', e);
    }
  };

  const handleResetProfile = () => {
    setCustomProfile(null);
    try {
      localStorage.removeItem('user_portfolio_profile');
    } catch (e) {
      console.warn('Failed to clear profile in localStorage', e);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white' 
        : 'bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white'
    } flex flex-col font-sans`}>
      
      {/* Fixed Navigation with Dark/Light mode toggle and Language Switcher */}
      <Navbar
        profile={activeProfile}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onOpenEditModal={() => setEditModalOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          profile={activeProfile}
          theme={theme}
          onDownloadResume={handleDownloadResume}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* Biography & Experience Section */}
        <About
          profile={activeProfile}
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
          profile={activeProfile}
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
          profile={activeProfile} 
          theme={theme}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={activeProfile}
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
        profile={activeProfile}
        projects={localizedData.projects}
        skills={localizedData.skills}
        experience={localizedData.experience}
        education={localizedData.education}
        certifications={localizedData.certifications}
        onDownloadPdf={handleDownloadResume}
      />

      <EditProfileModal
        isOpen={editModalOpen}
        theme={theme}
        onClose={() => setEditModalOpen(false)}
        profile={activeProfile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
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
