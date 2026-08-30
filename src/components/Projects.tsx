import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Search, 
  ArrowUpRight 
} from 'lucide-react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsProps {
  projects: ProjectItem[];
  theme?: 'dark' | 'light';
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  theme = 'dark',
  onSelectProject
}) => {
  const { t, isRTL } = useLanguage();
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isLight = theme === 'light';

  const categoryItems = [
    { key: 'all', label: t.projects.categories.all },
    { key: 'aiVision', label: t.projects.categories.aiVision },
    { key: 'satelliteAi', label: t.projects.categories.satelliteAi },
    { key: 'edgeNdt', label: t.projects.categories.edgeNdt },
    { key: 'fullStack', label: t.projects.categories.fullStack }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = 
        selectedCategoryKey === 'all' ||
        (selectedCategoryKey === 'aiVision' && (project.category.includes('AI') || project.category.includes('Vision'))) ||
        (selectedCategoryKey === 'satelliteAi' && (project.title.toLowerCase().includes('satellite') || project.title.includes('أقمار') || project.tagline.toLowerCase().includes('satellite') || project.tagline.includes('الأقمار'))) ||
        (selectedCategoryKey === 'edgeNdt' && (project.title.toLowerCase().includes('pipe') || project.title.includes('أنابيب') || project.category.includes('Edge') || project.category.includes('NDT'))) ||
        (selectedCategoryKey === 'fullStack' && (project.category.includes('Web') || project.category.includes('Stack') || project.category.includes('الويب')));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.techStack.some(tech => tech.toLowerCase().includes(q));
      
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategoryKey, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
              isLight 
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
                : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300'
            }`}>
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              {t.projects.title}
            </h2>
            <p className={`text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {t.projects.subtitle}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isLight ? 'text-slate-400' : 'text-slate-400'
            }`} />
            <input
              id="projects-search-input"
              type="text"
              placeholder={t.projects.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-colors border ${
                isLight 
                  ? 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 shadow-xs' 
                  : 'bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500'
              }`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs hover:text-indigo-500 cursor-pointer ${
                  isLight ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {t.projects.clear}
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categoryItems.map((cat) => (
            <button
              key={cat.key}
              id={`filter-${cat.key}`}
              onClick={() => setSelectedCategoryKey(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategoryKey === cat.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : isLight 
                    ? 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs' 
                    : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`p-12 text-center rounded-2xl border space-y-3 ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-900/40 border-slate-800'
          }`}>
            <p className={`text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {t.projects.noProjects}
            </p>
            <button
              onClick={() => { setSelectedCategoryKey('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold cursor-pointer"
            >
              {t.projects.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isLight 
                    ? 'bg-white border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-md hover:shadow-indigo-500/10' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 shadow-lg hover:shadow-indigo-950/30'
                }`}
              >
                {/* Top Section */}
                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Badge & Timeline */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase border ${
                      isLight 
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200' 
                        : 'bg-indigo-950/70 text-indigo-300 border-indigo-500/30'
                    }`}>
                      {project.category}
                    </span>
                    <span className={`text-[11px] font-mono ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className={`text-lg sm:text-xl font-bold transition-colors tracking-tight ${
                      isLight ? 'text-slate-900 group-hover:text-indigo-600' : 'text-white group-hover:text-indigo-300'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium leading-snug ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className={`text-xs line-clamp-3 leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {project.summary}
                  </p>

                  {/* Performance Metrics preview */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className={`grid grid-cols-3 gap-2 p-2.5 rounded-xl border ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800/80'
                    }`}>
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className={`text-xs font-bold ${isLight ? 'text-indigo-600' : 'text-indigo-300'}`}>{m.value}</div>
                          <div className={`text-[9px] uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-mono border ${
                          isLight 
                            ? 'bg-slate-100 text-slate-700 border-slate-200' 
                            : 'bg-slate-800/80 text-slate-300 border-slate-700/50'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                        isLight ? 'bg-slate-100 text-slate-500' : 'bg-slate-900 text-slate-500'
                      }`}>
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                </div>

                {/* Bottom Actions Bar */}
                <div className={`px-6 py-4 border-t flex items-center justify-between ${
                  isLight ? 'bg-slate-50/80 border-slate-200' : 'bg-slate-950/60 border-slate-800/80'
                }`}>
                  <button
                    id={`btn-view-details-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{t.projects.deepDive}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        id={`btn-github-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded-lg transition-colors ${
                          isLight ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                        title={t.projects.sourceCode}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        id={`btn-live-${project.id}`}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1.5 rounded-lg transition-colors ${
                          isLight ? 'text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50' : 'text-slate-400 hover:text-indigo-300 hover:bg-slate-800'
                        }`}
                        title={t.projects.liveDemo}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
