import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Send, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  SlidersHorizontal,
  ArrowUpRight,
  Sun,
  Moon
} from 'lucide-react';
import { ProfileData } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  profile: ProfileData;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onOpenResumeModal: () => void;
  onOpenEditModal: () => void;
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  theme = 'dark',
  onToggleTheme,
  onOpenResumeModal,
  onOpenEditModal
}) => {
  const { t, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'vision-playground', 'projects', 'skills', 'publications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.aiLab, href: '#vision-playground', id: 'vision-playground' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: t.nav.research, href: '#publications', id: 'publications' },
    { name: t.nav.resume, href: '#resume', id: 'resume' },
    { name: t.nav.contact, href: '#contact', id: 'contact' }
  ];

  const githubLink = profile.socials.find(s => s.icon === 'github')?.url || 'https://github.com/Mouad2025';
  const linkedinLink = profile.socials.find(s => s.icon === 'linkedin')?.url || 'https://www.linkedin.com/in/bouhadiba-mou%C3%A2d-6914052a6?utm_source=share_via&utm_content=profile&utm_medium=member_android';

  return (
    <header 
      id="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? isLight
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
            : 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo / Brand */}
          <a 
            id="brand-logo"
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-base sm:text-lg transition-colors ${
                isLight ? 'bg-white text-indigo-700 group-hover:bg-slate-50' : 'bg-slate-950 text-white group-hover:bg-slate-900'
              }`}>
                {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'BM'}
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight flex items-center gap-1.5 text-sm sm:text-base md:text-lg leading-tight ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}>
                {profile.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title={t.nav.availableForWork} />
              </span>
              <span className={`text-[11px] font-mono hidden xl:inline-block ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                {profile.title.split('|')[0].trim()}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className={`hidden lg:flex items-center gap-0.5 px-2.5 py-1.5 rounded-full backdrop-blur-sm transition-colors ${
            isLight 
              ? 'bg-slate-100/80 border border-slate-200 shadow-xs' 
              : 'bg-slate-900/60 border border-slate-800/80'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? isLight
                      ? 'text-indigo-700 bg-white shadow-xs border border-indigo-100 font-semibold'
                      : 'text-white bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 shadow-xs'
                    : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Language / Theme Controls */}
          <div className="hidden sm:flex items-center gap-1.5 md:gap-2">
            
            {/* Language Switcher */}
            <LanguageSwitcher theme={theme} variant="dropdown" />

            {/* Theme Toggle Button */}
            {onToggleTheme && (
              <button
                id="btn-theme-toggle"
                onClick={onToggleTheme}
                className={`p-2 rounded-xl border transition-all flex items-center justify-center cursor-pointer ${
                  isLight 
                    ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs' 
                    : 'bg-slate-900 hover:bg-slate-800 text-amber-400 border-slate-800 hover:text-white'
                }`}
                title={isLight ? t.theme.switchToDark : t.theme.switchToLight}
                aria-label={t.theme.toggleTheme}
              >
                {isLight ? (
                  <Moon className="w-4 h-4 text-slate-700" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>
            )}

            {/* Quick Profile Links */}
            <a 
              id="header-github-link"
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-colors hidden md:inline-flex ${
                isLight
                  ? 'text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border-slate-200'
                  : 'text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border-slate-800'
              }`}
              aria-label="GitHub Profile (Mouad2025)"
              title="GitHub Profile (Mouad2025)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a 
              id="header-linkedin-link"
              href={linkedinLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-colors hidden md:inline-flex ${
                isLight
                  ? 'text-indigo-600 hover:text-indigo-800 bg-white hover:bg-indigo-50 border-slate-200'
                  : 'text-indigo-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border-slate-800'
              }`}
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Customize Live Portfolio Button */}
            <button
              id="btn-customize-portfolio"
              onClick={onOpenEditModal}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-xl border transition-colors hidden xl:flex items-center gap-1.5 cursor-pointer ${
                isLight
                  ? 'text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border-slate-200'
                  : 'text-slate-300 hover:text-white bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
              title={t.nav.editProfile}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-500" />
              <span>{t.nav.editProfile}</span>
            </button>

            {/* View / Download PDF Resume button */}
            <button
              id="header-btn-resume"
              onClick={onOpenResumeModal}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 shadow-xs cursor-pointer ${
                isLight
                  ? 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border-indigo-200'
                  : 'text-indigo-200 bg-indigo-950/60 hover:bg-indigo-900/60 border-indigo-500/30 hover:border-indigo-500/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-indigo-500" />
              <span>{t.nav.resumePdf}</span>
            </button>

            {/* Contact CTA */}
            <a
              id="header-btn-contact"
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.nav.contact}</span>
            </a>
          </div>

          {/* Mobile Actions Button */}
          <div className="flex sm:hidden items-center gap-1">
            {/* Language selector */}
            <LanguageSwitcher theme={theme} variant="dropdown" />

            {/* Theme Toggle */}
            {onToggleTheme && (
              <button
                id="btn-mobile-theme-toggle"
                onClick={onToggleTheme}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  isLight ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-900 border-slate-800 text-amber-400'
                }`}
                aria-label={t.theme.toggleTheme}
                title={isLight ? t.theme.switchToDark : t.theme.switchToLight}
              >
                {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            )}

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border focus:outline-none cursor-pointer ${
                isLight 
                  ? 'text-slate-700 hover:text-slate-900 bg-white border-slate-200' 
                  : 'text-slate-400 hover:text-white bg-slate-900/90 border-slate-800'
              }`}
              aria-label={t.nav.menu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 ${
          isLight ? 'bg-white/95 border-slate-200' : 'bg-slate-950/95 border-slate-800'
        }`}>
          
          {/* Mobile Language Selection Row */}
          <div className="flex items-center justify-between py-1">
            <span className={`text-xs font-semibold ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {t.language.chooseLanguage}:
            </span>
            <LanguageSwitcher theme={theme} variant="buttons" />
          </div>

          <div className={`grid grid-cols-2 gap-2 pb-2 border-b border-t pt-3 ${
            isLight ? 'border-slate-200' : 'border-slate-800/80'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? isLight
                      ? 'text-indigo-700 bg-indigo-50 border border-indigo-200 font-semibold'
                      : 'text-indigo-300 bg-indigo-950/50 border border-indigo-500/30'
                    : isLight
                      ? 'text-slate-700 hover:bg-slate-100'
                      : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className={`w-3 h-3 opacity-50 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className={`w-full py-2.5 px-4 text-center rounded-xl border text-sm font-medium flex items-center justify-center gap-2 cursor-pointer ${
                isLight
                  ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-200'
              }`}
            >
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>{t.resume.interactivePreview}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-indigo-600/30"
            >
              <Send className="w-4 h-4" />
              <span>{t.nav.getInTouch}</span>
            </a>
          </div>

          <div className={`flex items-center justify-center gap-4 pt-3 ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg ${isLight ? 'hover:text-slate-900 hover:bg-slate-100' : 'hover:text-white hover:bg-slate-900'}`}>
              <Github className="w-5 h-5" />
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg ${isLight ? 'hover:text-indigo-600 hover:bg-indigo-50' : 'hover:text-white hover:bg-slate-900'}`}>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className={`p-2 rounded-lg ${isLight ? 'hover:text-slate-900 hover:bg-slate-100' : 'hover:text-white hover:bg-slate-900'}`}>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
