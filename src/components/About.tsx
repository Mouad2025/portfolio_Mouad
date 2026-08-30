import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ChevronRight
} from 'lucide-react';
import { ProfileData, ExperienceItem, EducationItem, CertificationItem, TestimonialItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  profile: ProfileData;
  theme?: 'dark' | 'light';
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  testimonials: TestimonialItem[];
}

export const About: React.FC<AboutProps> = ({
  profile,
  theme = 'dark',
  experience,
  education,
  certifications,
  testimonials
}) => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications' | 'testimonials'>('experience');
  const isLight = theme === 'light';

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
            isLight 
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
              : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300'
          }`}>
            <User className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            {t.about.title}
          </h2>
          <p className={`text-base sm:text-lg ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {t.about.subtitle}
          </p>
        </div>

        {/* Top Split: Bio Story & Engineering Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Bio Text Column */}
          <div className={`lg:col-span-7 space-y-5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border transition-colors ${
            isLight 
              ? 'bg-white border-slate-200 shadow-sm' 
              : 'bg-slate-900/50 border-slate-800/80'
          }`}>
            <h3 className={`text-xl font-bold flex items-center gap-2 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <span>{t.about.researchFocus}</span>
            </h3>

            <div className={`space-y-4 text-base leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {profile.bioParagraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competencies Checklist */}
            <div className={`pt-4 border-t space-y-2.5 ${
              isLight ? 'border-slate-200' : 'border-slate-800/80'
            }`}>
              <h4 className={`text-xs font-semibold uppercase tracking-wider ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}>
                {t.about.coreMethods}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profile.highlights.map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-2 text-xs sm:text-sm ${
                    isLight ? 'text-slate-700' : 'text-slate-300'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights: Quick Facts & Methodology */}
          <div className="lg:col-span-5 space-y-4">
            <div className={`p-6 rounded-2xl border shadow-sm transition-colors ${
              isLight
                ? 'bg-white border-indigo-100 shadow-indigo-100/50'
                : 'bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80 border-indigo-500/20'
            }`}>
              <h4 className={`text-base font-bold mb-3 flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                <Building2 className="w-4 h-4 text-indigo-500" />
                <span>{t.about.pillarsTitle}</span>
              </h4>
              <ul className={`space-y-3 text-xs sm:text-sm ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                <li className="flex items-start gap-2.5">
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                    isLight ? 'bg-indigo-100 text-indigo-700' : 'bg-indigo-900/70 text-indigo-300'
                  }`}>1</span>
                  <span><strong>{t.about.pillars.p1Title}</strong> {t.about.pillars.p1Desc}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                    isLight ? 'bg-indigo-100 text-indigo-700' : 'bg-indigo-900/70 text-indigo-300'
                  }`}>2</span>
                  <span><strong>{t.about.pillars.p2Title}</strong> {t.about.pillars.p2Desc}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                    isLight ? 'bg-indigo-100 text-indigo-700' : 'bg-indigo-900/70 text-indigo-300'
                  }`}>3</span>
                  <span><strong>{t.about.pillars.p3Title}</strong> {t.about.pillars.p3Desc}</span>
                </li>
              </ul>
            </div>

            {/* Quick Location snippet */}
            <div className={`p-5 rounded-2xl border text-xs flex items-center justify-between transition-colors ${
              isLight 
                ? 'bg-slate-100/80 border-slate-200 text-slate-600' 
                : 'bg-slate-900/40 border-slate-800 text-slate-400'
            }`}>
              <div>
                <span className={`font-semibold block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  {t.about.basedIn}
                </span>
                <span>{t.about.openRemote}</span>
              </div>
              <a 
                href="#contact" 
                className={`px-3 py-1.5 rounded-xl transition-colors text-xs font-medium cursor-pointer shrink-0 ${
                  isLight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xs'
                    : 'bg-slate-800 text-indigo-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {t.about.reachOut}
              </a>
            </div>
          </div>

        </div>

        {/* Tabbed Experience, Education, Certifications */}
        <div className="space-y-8">
          {/* Tabs Navigation */}
          <div className={`flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl border max-w-2xl mx-auto backdrop-blur-md transition-colors ${
            isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900/80 border-slate-800'
          }`}>
            <button
              id="tab-experience"
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{t.about.tabs.experience}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                activeTab === 'experience' ? 'bg-indigo-700 text-white' : 'bg-slate-200 dark:bg-slate-800'
              }`}>{experience.length}</span>
            </button>

            <button
              id="tab-education"
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.about.tabs.education}</span>
            </button>

            <button
              id="tab-certifications"
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{t.about.tabs.certifications}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                activeTab === 'certifications' ? 'bg-indigo-700 text-white' : 'bg-slate-200 dark:bg-slate-800'
              }`}>{certifications.length}</span>
            </button>

            <button
              id="tab-testimonials"
              onClick={() => setActiveTab('testimonials')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'testimonials'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Quote className="w-4 h-4" />
              <span>{t.about.tabs.testimonials}</span>
            </button>
          </div>

          {/* Tab 1: Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {experience.map((exp) => (
                <div 
                  key={exp.id}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all space-y-4 ${
                    isLight 
                      ? 'bg-white border-slate-200 shadow-xs hover:border-indigo-200' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className={`text-lg font-bold tracking-tight ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}>{exp.role}</h4>
                      <div className="flex items-center gap-2 font-semibold text-sm">
                        <span className="text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                        <span className={isLight ? 'text-slate-300' : 'text-slate-600'}>•</span>
                        <span className={`text-xs font-normal ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-mono border ${
                        isLight 
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200' 
                          : 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30'
                      }`}>
                        {exp.period}
                      </span>
                      <span className={`px-2 py-1 rounded-md text-xs ${
                        isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Bullet achievements */}
                  <div className="space-y-2">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${
                      isLight ? 'text-slate-500' : 'text-slate-400'
                    }`}>{t.about.keyImpact}</span>
                    <ul className={`space-y-2 text-xs sm:text-sm ${
                      isLight ? 'text-slate-600' : 'text-slate-300'
                    }`}>
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <ChevronRight className={`w-4 h-4 text-indigo-500 shrink-0 mt-0.5 ${isRTL ? 'rotate-180' : ''}`} />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className={`flex flex-wrap items-center gap-1.5 pt-2 border-t ${
                    isLight ? 'border-slate-200' : 'border-slate-800/80'
                  }`}>
                    <span className={`text-xs mr-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{t.about.stack}</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`px-2.5 py-0.5 rounded-md text-xs font-mono border ${
                          isLight 
                            ? 'bg-slate-50 text-slate-700 border-slate-200' 
                            : 'bg-slate-950 text-slate-300 border-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Education */}
          {activeTab === 'education' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className={`p-6 sm:p-7 rounded-2xl border space-y-4 ${
                    isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{edu.degree}</h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{edu.field}</p>
                      <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{edu.institution} • {edu.location}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-md text-xs font-mono self-start border ${
                      isLight 
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200' 
                        : 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30'
                    }`}>
                      {edu.period}
                    </span>
                  </div>

                  {edu.honors && (
                    <div className={`p-3 rounded-xl border text-xs sm:text-sm ${
                      isLight 
                        ? 'bg-indigo-50/50 border-indigo-200 text-indigo-900' 
                        : 'bg-indigo-950/30 border-indigo-500/20 text-indigo-200'
                    }`}>
                      <strong>{t.about.honors}</strong> {edu.honors}
                    </div>
                  )}

                  {edu.courses && (
                    <div className="space-y-2">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}>{t.about.specializedModules}</span>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, cIdx) => (
                          <span 
                            key={cIdx} 
                            className={`px-2.5 py-1 rounded-md text-xs border ${
                              isLight 
                                ? 'bg-slate-50 text-slate-700 border-slate-200' 
                                : 'bg-slate-950 text-slate-300 border-slate-800'
                            }`}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Certifications */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-colors ${
                    isLight 
                      ? 'bg-white border-slate-200 hover:border-indigo-300 shadow-xs' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                      isLight ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-indigo-950/80 border-indigo-500/30 text-indigo-400'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className={`text-base font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{cert.name}</h4>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className={`text-[11px] font-mono ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>ID: {cert.credentialId}</p>
                    )}
                  </div>
                  <div className={`flex items-center justify-between text-xs pt-3 border-t ${
                    isLight ? 'border-slate-200 text-slate-500' : 'border-slate-800/80 text-slate-400'
                  }`}>
                    <span>{t.about.issued} {cert.date}</span>
                    <span className="text-emerald-500 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {t.about.verified}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Testimonials */}
          {activeTab === 'testimonials' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((test) => (
                <div 
                  key={test.id}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 relative ${
                    isLight ? 'bg-white border-slate-200 shadow-xs' : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <Quote className={`w-8 h-8 absolute top-4 right-4 pointer-events-none ${
                    isLight ? 'text-indigo-200' : 'text-indigo-500/20'
                  }`} />
                  <p className={`text-xs sm:text-sm leading-relaxed italic relative z-10 ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    "{test.text}"
                  </p>
                  <div className={`flex items-center gap-3 pt-3 border-t ${
                    isLight ? 'border-slate-200' : 'border-slate-800/80'
                  }`}>
                    <img 
                      src={test.avatar} 
                      alt={test.name} 
                      className="w-10 h-10 rounded-full object-cover border border-indigo-500/30"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className={`text-xs sm:text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{test.name}</h5>
                      <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">{test.role}, {test.company}</p>
                      <p className={`text-[10px] ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>{test.relationship}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
