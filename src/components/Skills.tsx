import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Terminal, 
  Cloud, 
  Database, 
  Cpu, 
  Search, 
  Sparkles, 
  Flame,
  Eye
} from 'lucide-react';
import { SkillItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SkillsProps {
  skills: SkillItem[];
  theme?: 'dark' | 'light';
}

export const Skills: React.FC<SkillsProps> = ({ skills, theme = 'dark' }) => {
  const { t } = useLanguage();
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highlightsOnly, setHighlightsOnly] = useState<boolean>(false);

  const isLight = theme === 'light';

  const categoryItems = [
    { key: 'all', label: t.skills.categories.all },
    { key: 'deepLearning', label: t.skills.categories.deepLearning },
    { key: 'frameworks', label: t.skills.categories.aiFrameworks },
    { key: 'dataSignals', label: t.skills.categories.dataSignals },
    { key: 'softwareDeploy', label: t.skills.categories.softwareDeployment }
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Deep Learning & CV': <Eye className="w-4 h-4 text-cyan-500" />,
    'AI Frameworks': <Sparkles className="w-4 h-4 text-purple-500" />,
    'Data & Signals': <Database className="w-4 h-4 text-emerald-500" />,
    'Software & Deployment': <Cloud className="w-4 h-4 text-indigo-500" />,
    'Frontend': <Code2 className="w-4 h-4 text-cyan-500" />,
    'Backend': <Terminal className="w-4 h-4 text-emerald-500" />,
    'Cloud & DevOps': <Cloud className="w-4 h-4 text-indigo-500" />,
    'AI & Data': <Sparkles className="w-4 h-4 text-purple-500" />
  };

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesCat = 
        activeCategoryKey === 'all' ||
        (activeCategoryKey === 'deepLearning' && (skill.category.includes('Vision') || skill.category.includes('AI') || skill.name.includes('YOLO') || skill.name.includes('PyTorch') || skill.name.includes('OpenCV') || skill.category.includes('عميق'))) ||
        (activeCategoryKey === 'frameworks' && (skill.category.includes('Framework') || skill.name.includes('Tensor') || skill.name.includes('Scikit') || skill.name.includes('Hugging') || skill.category.includes('أطر'))) ||
        (activeCategoryKey === 'dataSignals' && (skill.category.includes('Data') || skill.name.includes('Signal') || skill.name.includes('SQL') || skill.name.includes('NumPy') || skill.name.includes('Pandas') || skill.category.includes('بيانات'))) ||
        (activeCategoryKey === 'softwareDeploy' && (skill.category.includes('Cloud') || skill.category.includes('Software') || skill.category.includes('Backend') || skill.category.includes('برمجيات') || skill.name.includes('Docker') || skill.name.includes('FastAPI') || skill.name.includes('React') || skill.name.includes('Git')));

      const matchesHighlight = !highlightsOnly || skill.highlight;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        skill.name.toLowerCase().includes(q) ||
        skill.category.toLowerCase().includes(q) ||
        (skill.description && skill.description.toLowerCase().includes(q));

      return matchesCat && matchesHighlight && matchesSearch;
    });
  }, [skills, activeCategoryKey, highlightsOnly, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
            isLight 
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
              : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300'
          }`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            {t.skills.title}
          </h2>
          <p className={`text-base sm:text-lg ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            {t.skills.subtitle}
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-3 rounded-2xl border backdrop-blur-sm transition-colors ${
          isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/60 border-slate-800'
        }`}>
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categoryItems.map((cat) => (
              <button
                key={cat.key}
                id={`skill-cat-${cat.key}`}
                onClick={() => setActiveCategoryKey(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategoryKey === cat.key
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : isLight 
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Highlights Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-48">
              <Search className={`w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 ${
                isLight ? 'text-slate-400' : 'text-slate-400'
              }`} />
              <input
                type="text"
                placeholder={t.skills.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full rounded-xl pl-8 pr-3 py-1.5 text-xs focus:outline-none transition-colors border ${
                  isLight 
                    ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500' 
                    : 'bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-indigo-500'
                }`}
              />
            </div>

            <button
              onClick={() => setHighlightsOnly(!highlightsOnly)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shrink-0 border transition-all cursor-pointer ${
                highlightsOnly
                  ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border-amber-500/40'
                  : isLight 
                    ? 'bg-slate-100 text-slate-600 border-slate-300 hover:text-slate-900' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title={t.skills.coreHighlights}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.skills.coreHighlights}</span>
            </button>
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl border transition-all space-y-3 group ${
                isLight 
                  ? 'bg-white border-slate-200 hover:border-indigo-300 shadow-xs' 
                  : 'bg-slate-900/60 border-slate-800/90 hover:border-indigo-500/40'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-xl border transition-colors ${
                    isLight 
                      ? 'bg-slate-50 border-slate-200 group-hover:border-indigo-200' 
                      : 'bg-slate-950 border-slate-800 group-hover:border-indigo-500/30'
                  }`}>
                    {categoryIcons[skill.category] || <Code2 className="w-4 h-4 text-indigo-500" />}
                  </div>
                  <div>
                    <h3 className={`text-sm sm:text-base font-bold transition-colors ${
                      isLight ? 'text-slate-900 group-hover:text-indigo-600' : 'text-white group-hover:text-indigo-300'
                    }`}>
                      {skill.name}
                    </h3>
                    <span className={`text-[11px] font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {skill.category}
                    </span>
                  </div>
                </div>

                {skill.highlight && (
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                    isLight 
                      ? 'bg-amber-50 border-amber-200 text-amber-700' 
                      : 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                  }`}>
                    {t.skills.coreMastery}
                  </span>
                )}
              </div>

              {skill.description && (
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {skill.description}
                </p>
              )}

              {/* Proficiency Level Bar */}
              <div className="space-y-1 pt-1">
                <div className={`flex justify-between text-[11px] font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  <span>{t.skills.proficiency}</span>
                  <span className={isLight ? 'text-indigo-600 font-bold' : 'text-indigo-300 font-semibold'}>{skill.level}%</span>
                </div>
                <div className={`w-full h-1.5 rounded-full overflow-hidden ${isLight ? 'bg-slate-100' : 'bg-slate-950'}`}>
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {skill.yearsOfExp && (
                <div className={`flex items-center justify-between text-[11px] pt-1 border-t font-mono ${
                  isLight ? 'border-slate-100 text-slate-500' : 'border-slate-800/60 text-slate-500'
                }`}>
                  <span>{t.skills.yearsExp}</span>
                  <span className={isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}>{skill.yearsOfExp}+</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Keyword Cloud Bottom Ribbon */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl border text-center space-y-4 transition-colors ${
          isLight 
            ? 'bg-gradient-to-r from-slate-50 via-white to-slate-50 border-slate-200' 
            : 'bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 border-slate-800'
        }`}>
          <h3 className={`text-xs font-semibold uppercase tracking-widest ${
            isLight ? 'text-indigo-600' : 'text-indigo-400'
          }`}>
            {t.skills.extendedStack}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto" dir="ltr">
            {[
              "PyTorch", "YOLOv8", "YOLO11", "OpenCV", "TensorFlow", "FastAPI", "Python 3.12", "Scikit-Learn", 
              "Pandas", "NumPy", "MLflow", "ONNX / TensorRT", "Ultralytics", "Signal Processing (FFT/Wavelets)",
              "Satellite Spectral Imagery", "NDT (Non-Destructive Testing)", "Docker", "Git / GitHub", "Linux (Ubuntu)",
              "React 19", "TypeScript", "Tailwind CSS", "REST APIs", "Matplotlib / Seaborn", "JupyterLab", "CUDA"
            ].map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-xl text-xs font-mono border transition-colors ${
                  isLight 
                    ? 'bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border-slate-200' 
                    : 'bg-slate-950/80 hover:bg-indigo-950 text-slate-300 hover:text-indigo-300 border-slate-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
