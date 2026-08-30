import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Zap, 
  Server, 
  ShieldCheck, 
  Activity
} from 'lucide-react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  theme?: 'dark' | 'light';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  theme = 'dark',
  onClose
}) => {
  const { t, isRTL } = useLanguage();
  const [activeView, setActiveView] = useState<'overview' | 'architecture' | 'metrics'>('overview');
  const isLight = theme === 'light';

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div 
        id="project-detail-modal"
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden my-8 transition-colors ${
          isLight ? 'bg-white border-slate-200 shadow-slate-900/20' : 'bg-slate-900 border-slate-700/80 shadow-black/80'
        }`}
      >
        {/* Modal Header */}
        <div className={`px-6 py-5 border-b flex items-start justify-between gap-4 ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider border ${
                isLight 
                  ? 'bg-indigo-100 text-indigo-700 border-indigo-200' 
                  : 'bg-indigo-950/80 text-indigo-300 border-indigo-500/30'
              }`}>
                {project.category}
              </span>
              <span className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>• {project.timeline}</span>
              <span className={`text-xs font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>• {project.role}</span>
            </div>
            <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {project.title}
            </h3>
          </div>

          <button
            id="btn-close-project-modal"
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isLight 
                ? 'text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 border-slate-200' 
                : 'text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border-slate-800'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className={`px-6 pt-3 border-b flex items-center gap-4 ${
          isLight ? 'bg-slate-100/70 border-slate-200' : 'bg-slate-950/40 border-slate-800/80'
        }`}>
          <button
            onClick={() => setActiveView('overview')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeView === 'overview'
                ? 'text-indigo-600 border-indigo-600'
                : isLight ? 'text-slate-600 border-transparent hover:text-slate-900' : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            {t.projects.modal.problemScope}
          </button>
          <button
            onClick={() => setActiveView('architecture')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeView === 'architecture'
                ? 'text-indigo-600 border-indigo-600'
                : isLight ? 'text-slate-600 border-transparent hover:text-slate-900' : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            {t.projects.modal.architecture}
          </button>
          <button
            onClick={() => setActiveView('metrics')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeView === 'metrics'
                ? 'text-indigo-600 border-indigo-600'
                : isLight ? 'text-slate-600 border-transparent hover:text-slate-900' : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            {t.projects.modal.metrics}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Tab 1: Overview */}
          {activeView === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>{t.projects.modal.problemScope}</h4>
                <p className={`text-sm sm:text-base leading-relaxed ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>{t.projects.modal.keyFeatures}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/60 border-slate-800/80'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={`text-xs ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Full View */}
              <div>
                <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>{t.projects.modal.techStack}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className={`px-3 py-1 rounded-lg font-mono text-xs border ${
                        isLight 
                          ? 'bg-slate-100 text-indigo-700 border-slate-200' 
                          : 'bg-slate-950 text-indigo-300 border-slate-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture */}
          {activeView === 'architecture' && (
            <div className="space-y-5">
              <div className={`p-4 rounded-xl border space-y-3 ${
                isLight ? 'bg-indigo-50/50 border-indigo-200' : 'bg-slate-950/80 border-indigo-500/20'
              }`}>
                <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                  <Server className="w-4 h-4" />
                  <span>{t.projects.modal.architecture}</span>
                </div>
                {project.architectureHighlights ? (
                  <ul className={`space-y-2 text-xs sm:text-sm ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    {project.architectureHighlights.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <Zap className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-1" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Engineered with modular neural processing pipelines and optimized CUDA acceleration.
                  </p>
                )}
              </div>

              <div className={`p-4 rounded-xl border space-y-2 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/50 border-slate-800'
              }`}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>Fault-Tolerance & Model Validation</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className={`flex items-center gap-2 text-xs ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>K-fold cross-validation & data augmentation</span>
                  </div>
                  <div className={`flex items-center gap-2 text-xs ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    <Activity className="w-4 h-4 text-cyan-500" />
                    <span>Inference latency profiling & benchmarking</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Metrics */}
          {activeView === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border text-center space-y-1 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                  }`}>
                    <div className="text-xl sm:text-2xl font-bold text-indigo-600">{metric.value}</div>
                    <div className={`text-xs font-medium ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-950/60 border-slate-800 text-slate-300'
              }`}>
                <strong>Research & Industry Impact:</strong> Achieved high accuracy on benchmark testing sets while optimizing runtime latency to support real-world edge devices and industrial inspection workflows.
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar with Links */}
        <div className={`px-6 py-4 border-t flex items-center justify-between ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/90 border-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                  isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
              >
                <ExternalLink className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
              isLight ? 'bg-slate-200 hover:bg-slate-300 text-slate-700' : 'bg-slate-900 hover:bg-slate-800 text-slate-400'
            }`}
          >
            {t.projects.modal.close}
          </button>
        </div>

      </div>
    </div>
  );
};
