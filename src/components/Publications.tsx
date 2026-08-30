import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Copy, 
  Check, 
  ExternalLink, 
  Search, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp,
  Terminal,
  BookmarkCheck
} from 'lucide-react';
import { PublicationItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PublicationsProps {
  publications: PublicationItem[];
  theme?: 'dark' | 'light';
  onDownloadResume?: () => void;
}

export const Publications: React.FC<PublicationsProps> = ({
  publications,
  theme = 'dark'
}) => {
  const { t, isRTL } = useLanguage();
  const [selectedTypeKey, setSelectedTypeKey] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedBibId, setCopiedBibId] = useState<string | null>(null);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'pub-pipeguard-thesis': true
  });

  const isLight = theme === 'light';

  const typeOptions = [
    { key: 'all', label: t.publications.types.all },
    { key: 'masterThesis', label: t.publications.types.thesis },
    { key: 'spaceAgency', label: t.publications.types.spaceAgency },
    { key: 'conference', label: t.publications.types.conference },
    { key: 'preprint', label: t.publications.types.preprint }
  ];

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyBibtex = (pub: PublicationItem) => {
    if (!pub.bibtex) return;
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedBibId(pub.id);
    setTimeout(() => setCopiedBibId(null), 2500);
  };

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesType = 
        selectedTypeKey === 'all' ||
        (selectedTypeKey === 'masterThesis' && (pub.type.includes('Thesis') || pub.type.includes('Thèse') || pub.type.includes('ماجستير'))) ||
        (selectedTypeKey === 'spaceAgency' && (pub.type.includes('Space') || pub.type.includes('Spatiale') || pub.type.includes('الفضاء'))) ||
        (selectedTypeKey === 'conference' && (pub.type.includes('Conference') || pub.type.includes('Conférence') || pub.type.includes('مؤتمر'))) ||
        (selectedTypeKey === 'preprint' && (pub.type.includes('Preprint') || pub.type.includes('Prétirage') || pub.type.includes('مسبقة')));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.abstract.toLowerCase().includes(q) ||
        pub.venue.toLowerCase().includes(q) ||
        pub.keywords.some(k => k.toLowerCase().includes(q));
      
      return matchesType && matchesSearch;
    });
  }, [publications, selectedTypeKey, searchQuery]);

  return (
    <section id="publications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
              isLight 
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
                : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300'
            }`}>
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.publications.badge}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              {t.publications.title}
            </h2>
            <p className={`text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {t.publications.subtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isLight ? 'text-slate-400' : 'text-slate-400'
            }`} />
            <input
              type="text"
              placeholder={t.publications.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-colors border ${
                isLight 
                  ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 shadow-xs' 
                  : 'bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500'
              }`}
            />
          </div>
        </div>

        {/* Type Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {typeOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedTypeKey(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedTypeKey === opt.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : isLight 
                    ? 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs' 
                    : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub) => {
            const isExpanded = !!expandedAbstracts[pub.id];

            return (
              <div
                key={pub.id}
                id={`pub-${pub.id}`}
                className={`p-6 sm:p-8 rounded-2xl border transition-all space-y-4 ${
                  isLight 
                    ? 'bg-white border-slate-200 shadow-xs hover:border-indigo-300' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 shadow-lg'
                }`}
              >
                {/* Header: Type, Venue & Year */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide border ${
                      isLight 
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200' 
                        : 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40'
                    }`}>
                      {pub.type}
                    </span>
                    <span className={`text-xs font-mono font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {pub.venue}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono self-start sm:self-auto ${
                    isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-950 text-slate-300 border border-slate-800'
                  }`}>
                    {pub.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-lg sm:text-xl font-bold tracking-tight leading-snug ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  {pub.title}
                </h3>

                {/* Authors */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>{pub.authors.join(', ')}</span>
                </div>

                {/* Abstract Accordion */}
                <div className={`rounded-xl p-4 text-xs sm:text-sm leading-relaxed border transition-colors ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-950 border-slate-800/80 text-slate-300'
                }`}>
                  <div className="flex items-center justify-between font-bold text-xs uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400">
                    <span>{t.publications.abstract}</span>
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer font-normal text-xs"
                    >
                      <span>{isExpanded ? t.publications.collapse : t.publications.expand}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  
                  <p className={isExpanded ? '' : 'line-clamp-2'}>
                    {pub.abstract}
                  </p>
                </div>

                {/* Keywords Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className={`text-xs mr-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{t.publications.topics}</span>
                  {pub.keywords.map((kw, kIdx) => (
                    <span
                      key={kIdx}
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${
                        isLight 
                          ? 'bg-slate-100 text-slate-700 border-slate-200' 
                          : 'bg-slate-800/80 text-slate-300 border-slate-700/50'
                      }`}
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: BibTeX, GitHub Code, Read Paper */}
                <div className={`pt-3 border-t flex flex-wrap items-center justify-between gap-3 ${
                  isLight ? 'border-slate-200' : 'border-slate-800/80'
                }`}>
                  <div className="flex items-center gap-2">
                    {pub.bibtex && (
                      <button
                        onClick={() => handleCopyBibtex(pub)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                          copiedBibId === pub.id
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                            : isLight 
                              ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300' 
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                        title="Copy BibTeX Citation"
                      >
                        {copiedBibId === pub.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-indigo-500" />}
                        <span>{copiedBibId === pub.id ? t.publications.bibtexCopied : t.publications.copyBibtex}</span>
                      </button>
                    )}

                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
                          isLight 
                            ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300' 
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{t.publications.sourceCode}</span>
                      </a>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <span>{t.publications.inquirePdf}</span>
                    <ExternalLink className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Academic Profile Footnote */}
        <div className={`mt-12 p-6 rounded-2xl border text-center space-y-2 ${
          isLight ? 'bg-indigo-50/50 border-indigo-200 text-slate-700' : 'bg-indigo-950/30 border-indigo-500/20 text-slate-300'
        }`}>
          <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
            <BookmarkCheck className="w-4 h-4" />
            <span>{t.publications.collabNotice}</span>
          </div>
          <p className="text-xs max-w-2xl mx-auto leading-relaxed">
            {t.publications.collabSub}
          </p>
        </div>

      </div>
    </section>
  );
};
