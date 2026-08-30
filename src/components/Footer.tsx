import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Users } from 'lucide-react';
import { ProfileData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  profile: ProfileData;
  theme?: 'dark' | 'light';
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, theme = 'dark', onOpenResumeModal }) => {
  const { t } = useLanguage();
  const [visitorCount, setVisitorCount] = useState<number>(1482);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const STORAGE_KEY = 'bm_portfolio_page_views';
      const BASE_COUNT = 1482;
      const stored = localStorage.getItem(STORAGE_KEY);
      let count = stored ? parseInt(stored, 10) : BASE_COUNT;
      
      if (isNaN(count) || count < BASE_COUNT) {
        count = BASE_COUNT;
      }

      // Increment count on visit
      const newCount = count + 1;
      localStorage.setItem(STORAGE_KEY, newCount.toString());
      setVisitorCount(newCount);
    } catch (e) {
      console.warn('LocalStorage unavailable for visitor counter', e);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLight = theme === 'light';
  const currentYear = new Date().getFullYear();
  const github = profile.socials.find(s => s.icon === 'github');
  const linkedin = profile.socials.find(s => s.icon === 'linkedin');
  const twitter = profile.socials.find(s => s.icon === 'twitter');

  return (
    <footer id="site-footer" className={`border-t pt-16 pb-12 relative transition-colors ${
      isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b ${
          isLight ? 'border-slate-200' : 'border-slate-800/80'
        }`}>
          
          {/* Col 1: Brand, Bio & Visitor Social Proof Counter */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-sm shadow-indigo-600/30">
                {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'BM'}
              </div>
              <span className={`font-bold text-base tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {profile.name}
              </span>
            </div>
            <p className={`text-xs sm:text-sm max-w-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {profile.tagline}
            </p>
            
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {/* Availability Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono ${
                isLight ? 'bg-white border-slate-200 text-slate-700 shadow-xs' : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.footer.availableBadge}</span>
              </div>
            </div>

            {/* Live Social Proof / Visitors Counter Box */}
            <div 
              id="visitor-counter-box"
              className={`p-3.5 rounded-xl border flex items-center justify-between gap-4 max-w-sm transition-all ${
                isLight 
                  ? 'bg-white/80 backdrop-blur-sm border-slate-200 shadow-xs hover:border-indigo-200' 
                  : 'bg-slate-900/60 backdrop-blur-sm border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                  isLight 
                    ? 'bg-indigo-50 border-indigo-100 text-indigo-600' 
                    : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-400'
                }`}>
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5" dir="ltr">
                    <span className={`text-base font-extrabold font-mono tracking-tight ${
                      isLight ? 'text-slate-900' : 'text-white'
                    }`}>
                      {isMounted ? visitorCount.toLocaleString() : '1,482'}
                    </span>
                    <span className="text-[10px] font-mono font-medium text-emerald-500">
                      +1
                    </span>
                  </div>
                  <div className={`text-[11px] font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {t.footer.visitorCountLabel}
                  </div>
                </div>
              </div>

              <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md border text-[10px] font-mono shrink-0 ${
                isLight 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : 'bg-emerald-950/50 text-emerald-400 border-emerald-500/30'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.footer.pageViewsLabel}</span>
              </div>
            </div>

          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                {t.footer.navigationTitle}
              </h4>
              <ul className={`space-y-2 text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                <li><a href="#about" className={`transition-colors ${isLight ? 'hover:text-indigo-600' : 'hover:text-white'}`}>{t.nav.about}</a></li>
                <li><a href="#vision-playground" className={`transition-colors ${isLight ? 'hover:text-indigo-600' : 'hover:text-white'}`}>{t.nav.aiLab}</a></li>
                <li><a href="#projects" className={`transition-colors ${isLight ? 'hover:text-indigo-600' : 'hover:text-white'}`}>{t.nav.projects}</a></li>
                <li><a href="#skills" className={`transition-colors ${isLight ? 'hover:text-indigo-600' : 'hover:text-white'}`}>{t.nav.skills}</a></li>
                <li><a href="#publications" className={`transition-colors ${isLight ? 'hover:text-indigo-600' : 'hover:text-white'}`}>{t.nav.research}</a></li>
                <li><a href="#resume" className={`transition-colors ${isLight ? 'hover:text-indigo-600' : 'hover:text-white'}`}>{t.nav.resume}</a></li>
                <li><a href="#contact" className={`transition-colors ${isLight ? 'hover:text-indigo-600' : 'hover:text-white'}`}>{t.nav.contact}</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                {t.footer.profilesTitle}
              </h4>
              <ul className={`space-y-2 text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {github && (
                  <li>
                    <a href={github.url} target="_blank" rel="noopener noreferrer" className={`transition-colors flex items-center gap-1.5 ${
                      isLight ? 'hover:text-indigo-600' : 'hover:text-white'
                    }`}>
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </li>
                )}
                {linkedin && (
                  <li>
                    <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className={`transition-colors flex items-center gap-1.5 ${
                      isLight ? 'hover:text-indigo-600' : 'hover:text-white'
                    }`}>
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                )}
                {twitter && (
                  <li>
                    <a href={twitter.url} target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                      isLight ? 'hover:text-indigo-600' : 'hover:text-white'
                    }`}>
                      Twitter / X
                    </a>
                  </li>
                )}
                <li>
                  <button onClick={onOpenResumeModal} className={`transition-colors cursor-pointer ${
                    isLight ? 'hover:text-indigo-600 text-indigo-700 font-medium' : 'hover:text-indigo-400 text-indigo-300'
                  }`}>
                    {t.hero.pdfResume}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Coordinates & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              id="btn-back-to-top"
              onClick={scrollToTop}
              className={`px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all group cursor-pointer ${
                isLight 
                  ? 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-xs' 
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className={`text-start md:text-end text-xs font-mono space-y-1 ${isLight ? 'text-slate-500' : 'text-slate-500'}`} dir="ltr">
              <div>{profile.location}</div>
              <div className={isLight ? 'text-slate-700 font-medium' : 'text-slate-400'}>{profile.email}</div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isLight ? 'text-slate-500' : 'text-slate-500'
        }`}>
          <p>© {currentYear} {profile.name}. {t.footer.allRightsReserved}</p>
          <div className="flex items-center gap-2">
            <span>{t.footer.builtWith}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
