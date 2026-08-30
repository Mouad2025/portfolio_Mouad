import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Award 
} from 'lucide-react';
import { ProfileData, ProjectItem, SkillItem, ExperienceItem, EducationItem, CertificationItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ResumeSectionProps {
  profile: ProfileData;
  theme?: 'dark' | 'light';
  projects: ProjectItem[];
  skills: SkillItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  onDownloadPdf: () => void;
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  profile,
  theme = 'dark',
  projects,
  skills,
  experience,
  education,
  onDownloadPdf,
  onOpenResumeModal
}) => {
  const { t, isRTL } = useLanguage();
  const [downloading, setDownloading] = useState(false);
  const isLight = theme === 'light';

  const handleDownload = () => {
    setDownloading(true);
    onDownloadPdf();
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <section id="resume" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Resume Feature Card */}
        <div className={`rounded-3xl border p-8 sm:p-12 shadow-2xl relative overflow-hidden transition-colors ${
          isLight 
            ? 'bg-gradient-to-br from-indigo-50/90 via-white to-slate-50 border-indigo-200 shadow-indigo-100/60' 
            : 'bg-gradient-to-br from-indigo-950/60 via-slate-900/90 to-slate-950 border-indigo-500/30 shadow-indigo-950/40'
        }`}>
          
          {/* Decorative subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Download & Specs */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                isLight 
                  ? 'bg-indigo-100/80 border-indigo-300 text-indigo-800' 
                  : 'bg-indigo-900/50 border-indigo-400/30 text-indigo-300'
              }`}>
                <FileText className="w-3.5 h-3.5" />
                <span>{t.resume.badge}</span>
              </div>

              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                {t.resume.title}
              </h2>

              <p className={`text-base sm:text-lg leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                {t.resume.subtitle}
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className={`flex items-center gap-2.5 text-xs sm:text-sm ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.resume.features.ats}</span>
                </div>
                <div className={`flex items-center gap-2.5 text-xs sm:text-sm ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  <ShieldCheck className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{t.resume.features.degree}</span>
                </div>
                <div className={`flex items-center gap-2.5 text-xs sm:text-sm ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{t.resume.features.credentials}</span>
                </div>
                <div className={`flex items-center gap-2.5 text-xs sm:text-sm ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  <Sparkles className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{t.resume.features.export}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  id="btn-download-resume-section"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                  <span>{downloading ? t.resume.generatingPdf : t.resume.downloadPdf}</span>
                </button>

                <button
                  id="btn-preview-resume-section"
                  onClick={onOpenResumeModal}
                  className={`px-5 py-3.5 rounded-xl font-semibold text-sm border transition-colors flex items-center gap-2 cursor-pointer ${
                    isLight 
                      ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-xs' 
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <Eye className="w-4 h-4 text-indigo-500" />
                  <span>{t.resume.interactivePreview}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Mini Live Resume Paper Card Preview */}
            <div className="lg:col-span-5" dir="ltr">
              <div 
                onClick={onOpenResumeModal}
                className={`group cursor-pointer rounded-2xl bg-white text-slate-900 p-6 sm:p-7 shadow-2xl transform transition-transform hover:-translate-y-1 duration-300 border relative overflow-hidden text-left ${
                  isLight ? 'border-slate-300 shadow-slate-200' : 'border-slate-200'
                }`}
                title={t.resume.clickToExpand}
              >
                {/* Visual Paper Overlay tag */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 font-mono text-[10px] font-semibold flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{t.resume.clickToExpand}</span>
                </div>

                {/* Paper Header */}
                <div className="border-b border-slate-300 pb-3 mb-3">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{profile.name}</h3>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide">{profile.title}</p>
                  <p className="text-[11px] text-slate-600 font-mono mt-0.5">{profile.email} • {profile.location}</p>
                </div>

                {/* Paper Highlights Preview */}
                <div className="space-y-2.5 text-xs text-slate-800">
                  <div>
                    <span className="font-bold text-[10px] uppercase text-indigo-700 block mb-0.5">Top Research Projects</span>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-700">
                      {projects.slice(0, 2).map((p, idx) => (
                        <li key={idx} className="truncate">
                          <strong>{p.title}</strong>: {p.tagline}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-[10px] uppercase text-indigo-700 block mb-0.5">Core Experience</span>
                    <p className="text-[11px] text-slate-700 font-medium">{experience[0]?.role} @ {experience[0]?.company} ({experience[0]?.period})</p>
                  </div>

                  <div>
                    <span className="font-bold text-[10px] uppercase text-indigo-700 block mb-0.5">Education</span>
                    <p className="text-[11px] text-slate-700 font-medium">{education[0]?.degree} • {education[0]?.institution}</p>
                  </div>

                  <div>
                    <span className="font-bold text-[10px] uppercase text-indigo-700 block mb-1">Key AI Stack</span>
                    <div className="flex flex-wrap gap-1">
                      {skills.slice(0, 7).map((s, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded text-[10px] bg-slate-100 font-mono text-slate-800 border border-slate-200">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
