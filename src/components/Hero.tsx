import React, { useState } from 'react';
import { 
  Download, 
  ArrowRight, 
  MapPin, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  Contact as ContactIcon,
  Scan,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { ProfileData } from '../types';
import { downloadVCard } from '../utils/vcard';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  profile: ProfileData;
  theme?: 'dark' | 'light';
  onDownloadResume: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  theme = 'dark',
  onDownloadResume
}) => {
  const { t, isRTL } = useLanguage();
  const [activeCodeTab, setActiveCodeTab] = useState<'stack' | 'arch' | 'status'>('stack');
  const [copiedCmd, setCopiedCmd] = useState(false);

  const isLight = theme === 'light';

  const terminalCode = {
    stack: `// AI & Vision Engineer Configuration Matrix
const researcher = {
  name: "${profile.name}",
  specialization: "AI, Deep Learning & Computer Vision",
  degree: "Master 2 AIDSS (Artificial Intelligence)",
  coreFrameworks: ["PyTorch", "TensorFlow", "OpenCV", "Ultralytics YOLOv8"],
  predictiveModels: ["LSTM", "CNN", "Autoencoders", "Transformer-based Vision"],
  domains: ["Industrial NDT & Pipeline Inspection", "Satellite Remote Sensing"],
  status: "🟢 Available for Research & Senior AI Roles"
};

export default researcher;`,
    arch: `// PipeGuard AI Pipeline - Real-Time Anomaly Inference
export async function detectDefects(videoStreamFrame: Tensor): Promise<DetectionResult> {
  const preprocessed = preprocessFrame(videoStreamFrame, { size: [640, 640], normalize: true });
  const [boxes, scores, classes] = await yoloModel.predict(preprocessed);
  
  // Cross-reference with temporal acoustic sensor telemetry
  const riskIndex = computeCompositeFailureRisk(boxes, sensorFeed.currentMetrics());
  
  return {
    defectDetected: scores.max() > 0.88,
    boundingBoxes: boxes,
    classification: "Corrosion_Crack_Level_3",
    inferenceLatency: "14.2ms (GPU Accelerated)"
  };
}`,
    status: `System Diagnostic & Capabilities:
[OK] PyTorch CUDA Runtime: Active (RTX 4090 / Cloud Cluster)
[OK] OpenCV & Computer Vision Pipelines: Loaded
[OK] Satellite Multi-Spectral Engine: ASAL AlSat Compatible
[OK] ATS Resume Engine: Formatted & Download Ready
[OK] Contact Gateway: Ready for Research Inquiries`
  };

  const copyContactCommand = () => {
    navigator.clipboard.writeText(`npx contact-engineer --email ${profile.email}`);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2500);
  };

  const github = profile.socials.find(s => s.icon === 'github') || { url: 'https://github.com/Mouad2025' };
  const linkedin = profile.socials.find(s => s.icon === 'linkedin') || { url: 'https://www.linkedin.com/in/bouhadiba-mou%C3%A2d-6914052a6?utm_source=share_via&utm_content=profile&utm_medium=member_android' };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle background glow effect */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[130px] rounded-full pointer-events-none -z-10 ${
        isLight ? 'bg-indigo-400/20' : 'bg-indigo-600/15'
      }`} />
      <div className={`absolute top-1/3 right-10 w-[400px] h-[250px] blur-[100px] rounded-full pointer-events-none -z-10 ${
        isLight ? 'bg-cyan-400/15' : 'bg-cyan-600/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium shadow-xs backdrop-blur-md border ${
              isLight 
                ? 'bg-white/90 border-slate-200 text-slate-700' 
                : 'bg-slate-900/90 border-slate-800 text-slate-300'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 font-semibold">{profile.status}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                {t.hero.greeting} <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">{profile.name}</span>
              </h1>
              <p className={`text-xl sm:text-2xl font-semibold tracking-tight ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}>
                {profile.title}
              </p>
            </div>

            {/* Tagline / Bio summary */}
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {profile.tagline}
            </p>

            {/* Location & Quick Specs */}
            <div className={`flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm pt-1 ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className={`w-1 h-1 rounded-full ${isLight ? 'bg-slate-300' : 'bg-slate-700'} hidden sm:block`} />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{t.hero.specs.degree}</span>
              </div>
              <div className={`w-1 h-1 rounded-full ${isLight ? 'bg-slate-300' : 'bg-slate-700'} hidden sm:block`} />
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t.hero.specs.specialization}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                id="hero-btn-explore-projects"
                href="#projects"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>

              <a
                id="hero-btn-ai-lab"
                href="#vision-playground"
                className={`px-4 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 shadow-xs group cursor-pointer ${
                  isLight
                    ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
                    : 'bg-indigo-950/60 hover:bg-indigo-900 text-indigo-300 border-indigo-500/30'
                }`}
              >
                <Scan className="w-4 h-4 text-indigo-400" />
                <span>{t.hero.liveVisionLab}</span>
              </a>

              <button
                id="hero-btn-download-pdf"
                onClick={onDownloadResume}
                className={`px-5 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 shadow-xs group cursor-pointer ${
                  isLight 
                    ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 hover:border-slate-400' 
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border-slate-700 hover:border-slate-600'
                }`}
                title={t.hero.pdfResume}
              >
                <Download className="w-4 h-4 text-indigo-500 group-hover:-translate-y-0.5 transition-transform" />
                <span>{t.hero.pdfResume}</span>
              </button>

              <button
                id="hero-btn-download-vcard"
                onClick={() => downloadVCard(profile)}
                className={`px-4 py-3 rounded-xl font-medium text-xs border transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                    : 'bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800'
                }`}
                title={t.hero.saveVCard}
              >
                <ContactIcon className="w-3.5 h-3.5 text-cyan-500" />
                <span>{t.hero.saveVCard}</span>
              </button>
            </div>

            {/* Social Links & Terminal Command */}
            <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${
              isLight ? 'border-slate-200' : 'border-slate-800/80'
            }`}>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium mr-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{t.hero.connect}</span>
                
                <a
                  id="hero-social-github"
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isLight 
                      ? 'bg-white text-slate-700 hover:text-black hover:bg-slate-100 border-slate-200' 
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                  }`}
                  title="GitHub Profile (Mouad2025)"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  id="hero-social-linkedin"
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    isLight 
                      ? 'bg-white text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 border-slate-200' 
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                  }`}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  id="hero-social-mail"
                  href={`mailto:${profile.email}`}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isLight 
                      ? 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-slate-200' 
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                  }`}
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Quick CLI copy widget */}
              <button
                id="btn-copy-cli-contact"
                onClick={copyContactCommand}
                className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all group cursor-pointer ${
                  isLight 
                    ? 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-xs' 
                    : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
                title="Click to copy quick contact command"
              >
                <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                <span dir="ltr">npx contact-engineer</span>
                {copiedCmd ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Terminal */}
          <div className="lg:col-span-5" dir="ltr">
            <div className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-colors ${
              isLight 
                ? 'border-slate-200 bg-slate-900 shadow-indigo-500/10' 
                : 'border-slate-800 bg-slate-950/90 shadow-indigo-950/40'
            }`}>
              
              {/* Window Header */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">vision_pipeline.ts</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800/80 text-[11px] font-medium">
                  <button
                    onClick={() => setActiveCodeTab('stack')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeCodeTab === 'stack'
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t.hero.terminalTabs.stack}
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('arch')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeCodeTab === 'arch'
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t.hero.terminalTabs.pipeline}
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('status')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeCodeTab === 'status'
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t.hero.terminalTabs.status}
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto max-h-[360px]">
                <pre className="text-indigo-300">
                  <code>{terminalCode[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span>PyTorch • CUDA 12.2 • UTF-8</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Python 3.11</span>
                </div>
              </div>

            </div>

            {/* Quick stats floating cards underneath */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4" dir={isRTL ? 'rtl' : 'ltr'}>
              {profile.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl border text-center transition-colors ${
                    isLight 
                      ? 'bg-white border-slate-200 shadow-xs hover:border-indigo-300' 
                      : 'bg-slate-900/60 border-slate-800/90 hover:border-indigo-500/30'
                  }`}
                >
                  <div className={`text-base sm:text-lg font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>{stat.value}</div>
                  <div className={`text-[11px] font-medium leading-tight mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
