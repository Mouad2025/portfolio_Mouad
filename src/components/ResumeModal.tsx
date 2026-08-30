import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText 
} from 'lucide-react';
import { ProfileData, ProjectItem, SkillItem, ExperienceItem, EducationItem, CertificationItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  theme?: 'dark' | 'light';
  onClose: () => void;
  profile: ProfileData;
  projects: ProjectItem[];
  skills: SkillItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  onDownloadPdf: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  theme = 'dark',
  onClose,
  profile,
  projects,
  skills,
  experience,
  education,
  certifications,
  onDownloadPdf
}) => {
  const { t } = useLanguage();
  const [copiedPlaintext, setCopiedPlaintext] = useState(false);
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlaintext = () => {
    const text = `
${profile.name.toUpperCase()}
${profile.title}
Email: ${profile.email} | Phone: ${profile.phone || 'N/A'} | Location: ${profile.location}
Website: ${profile.website}

SUMMARY
${profile.bioParagraphs.join('\n\n')}

TECHNICAL SKILLS
• AI & Deep Learning: ${skills.filter(s => s.category === 'AI & Deep Learning').map(s => s.name).join(', ')}
• Computer Vision & Processing: ${skills.filter(s => s.category === 'Computer Vision & Signal Processing').map(s => s.name).join(', ')}
• Data Science & Backend: ${skills.filter(s => s.category === 'Data Science & Backend').map(s => s.name).join(', ')}
• Tools & Methodologies: ${skills.filter(s => s.category === 'DevOps & Research Tools').map(s => s.name).join(', ')}

PROFESSIONAL EXPERIENCE & RESEARCH
${experience.map(e => `
${e.role.toUpperCase()} | ${e.company} | ${e.location} | ${e.period}
${e.description}
Achievements:
${e.achievements.map(a => `- ${a}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`).join('\n')}

SELECTED RESEARCH & PROJECTS
${projects.slice(0, 3).map(p => `
${p.title} (${p.category})
${p.summary}
Stack: ${p.techStack.join(', ')}
`).join('\n')}

EDUCATION
${education.map(ed => `${ed.degree} - ${ed.institution} (${ed.period})\nHonors: ${ed.honors || 'N/A'}`).join('\n')}

KEY CERTIFICATIONS
${certifications.map(c => `- ${c.name} (${c.issuer}, ${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedPlaintext(true);
    setTimeout(() => setCopiedPlaintext(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        id="ats-resume-modal-dialog"
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl shadow-black overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh] ${
          isLight ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-700'
        }`}
      >
        
        {/* Top Control Bar (Hidden during print) */}
        <div className={`no-print px-5 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 shrink-0 ${
          isLight ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-500" />
            <span className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {t.resume.interactivePreview}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">
              ATS Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-modal-copy-plaintext"
              onClick={copyPlaintext}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
                isLight 
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300' 
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
              title="Copy plain-text formatted resume to clipboard"
            >
              {copiedPlaintext ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPlaintext ? t.contact.copied : 'Copy Plaintext'}</span>
            </button>

            <button
              id="btn-modal-print-resume"
              onClick={handlePrint}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
                isLight 
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300' 
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
              title="Print or Save via Browser PDF dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              id="btn-modal-download-pdf"
              onClick={onDownloadPdf}
              className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.resume.downloadPdf}</span>
            </button>

            <button
              id="btn-close-resume-modal"
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors ml-1 cursor-pointer ${
                isLight 
                  ? 'text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200' 
                  : 'text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800'
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Paper Sheet View */}
        <div className={`p-4 sm:p-8 overflow-y-auto flex justify-center ${
          isLight ? 'bg-slate-200/80' : 'bg-slate-950/90'
        }`}>
          
          <div 
            id="printable-resume-paper"
            dir="ltr"
            className="resume-printable w-full max-w-[800px] bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl space-y-6 text-left"
          >
            {/* Resume Header */}
            <div className="border-b-2 border-indigo-600 pb-4 space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {profile.name}
              </h1>
              <h2 className="text-sm font-bold text-indigo-700 uppercase tracking-wide">
                {profile.title}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
                <span>{profile.email}</span>
                <span>•</span>
                <span>{profile.phone || '+213 555 000 000'}</span>
                <span>•</span>
                <span>{profile.location}</span>
                <span>•</span>
                <span>github.com/Mouad2025</span>
                <span>•</span>
                <span>linkedin.com/in/bouhadiba-mouâd</span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                Academic & Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {profile.bioParagraphs.slice(0, 2).join(' ')}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                Technical Proficiencies
              </h3>
              <div className="space-y-1 text-xs text-slate-700">
                <p>
                  <strong className="text-slate-900">AI & Deep Learning:</strong>{' '}
                  {skills.filter(s => s.category.includes('AI') || s.category.includes('الذكاء') || s.category.includes('IA')).map(s => s.name).join(', ')}
                </p>
                <p>
                  <strong className="text-slate-900">Computer Vision & Signal Processing:</strong>{' '}
                  {skills.filter(s => s.category.includes('Vision') || s.category.includes('الرؤية') || s.category.includes('Visual')).map(s => s.name).join(', ')}
                </p>
                <p>
                  <strong className="text-slate-900">Data Science & Backend:</strong>{' '}
                  {skills.filter(s => s.category.includes('Data') || s.category.includes('Données') || s.category.includes('البيانات')).map(s => s.name).join(', ')}
                </p>
                <p>
                  <strong className="text-slate-900">DevOps & Research Tools:</strong>{' '}
                  {skills.filter(s => s.category.includes('DevOps') || s.category.includes('Tools') || s.category.includes('Outils') || s.category.includes('الأدوات')).map(s => s.name).join(', ')}
                </p>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                Professional Experience & Research
              </h3>

              {experience.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-bold text-sm text-slate-900">{exp.role}</span>
                      <span className="text-indigo-700 font-semibold text-xs ml-2">@ {exp.company}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500">
                    <strong>Tech:</strong> {exp.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Featured Projects */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
                Selected Research & Applied Projects
              </h3>
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="space-y-0.5 text-xs text-slate-700">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="text-slate-500 font-normal">{proj.timeline}</span>
                  </div>
                  <p>{proj.summary}</p>
                  <p className="text-[11px] text-indigo-700 font-medium">Stack: {proj.techStack.join(', ')}</p>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Education</h3>
                {education.map((edu) => (
                  <div key={edu.id} className="text-xs text-slate-700">
                    <p className="font-bold text-slate-900">{edu.degree}</p>
                    <p>{edu.institution} ({edu.period})</p>
                    {edu.honors && <p className="text-slate-500 italic">{edu.honors}</p>}
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Certifications</h3>
                <ul className="text-xs text-slate-700 space-y-1">
                  {certifications.map((cert, idx) => (
                    <li key={idx}>
                      <strong>{cert.name}</strong> – {cert.issuer} ({cert.date})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
