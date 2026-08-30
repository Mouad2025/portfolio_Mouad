import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  theme?: 'dark' | 'light';
  variant?: 'dropdown' | 'buttons' | 'compact';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  theme = 'dark',
  variant = 'dropdown'
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isLight = theme === 'light';

  const languages: { code: Language; label: string; nativeName: string; flag: string }[] = [
    { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'Arabic', nativeName: 'العربية', flag: '🇩🇿' }
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'buttons') {
    return (
      <div 
        id="language-switcher-buttons"
        className={`inline-flex p-1 rounded-xl border ${
          isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'
        }`}
      >
        {languages.map(lang => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              id={`lang-btn-${lang.code}`}
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? isLight
                    ? 'bg-white text-indigo-700 shadow-xs border border-indigo-100'
                    : 'bg-indigo-600 text-white shadow-xs'
                  : isLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
              title={lang.nativeName}
            >
              <span>{lang.flag}</span>
              <span>{lang.nativeName}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        id="btn-language-selector"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
          isLight
            ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs'
            : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={t.language.chooseLanguage}
      >
        <Globe className="w-3.5 h-3.5 text-indigo-500" />
        <span className="hidden sm:inline font-mono uppercase">{currentLang.code}</span>
        <span className="inline sm:hidden">{currentLang.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          id="language-dropdown-menu"
          className={`absolute right-0 mt-2 w-44 rounded-xl border shadow-xl py-1.5 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 ${
            isLight
              ? 'bg-white/95 border-slate-200 shadow-slate-900/10'
              : 'bg-slate-900/95 border-slate-800 shadow-black/60'
          }`}
        >
          <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
            isLight ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {t.language.chooseLanguage}
          </div>

          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                id={`lang-option-${lang.code}`}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'bg-indigo-50 text-indigo-700 font-bold'
                      : 'bg-indigo-950/70 text-indigo-300 font-bold'
                    : isLight
                      ? 'text-slate-700 hover:bg-slate-100'
                      : 'text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <div>
                    <div className="leading-none">{lang.nativeName}</div>
                    <div className={`text-[10px] font-normal ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {lang.label}
                    </div>
                  </div>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-indigo-500" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
