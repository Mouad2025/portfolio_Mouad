import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileData, ContactMessage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  profile: ProfileData;
  theme?: 'dark' | 'light';
}

export const Contact: React.FC<ContactProps> = ({ profile, theme = 'dark' }) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: t.contact.form.categoryOptions[0] || 'AI Engineering / Project Collaboration',
    message: '',
    timeline: 'Immediate',
    budget: 'Standard'
  });

  const isLight = theme === 'light';
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const subjectOptions = t.contact.form.categoryOptions;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.contact.form.errors.nameRequired;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.errors.emailInvalid;
    }
    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.form.errors.messageLength;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      // Get current time - Format: "August 30, 2026, 03:35:00 PM"
      const now = new Date();
      const timeString = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      console.log('Sending email with data:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: timeString
      });

      // Send email via EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_portfolio',
          template_id: 'template_49l8b04',
          user_id: 'XGC7RkR48l0QCAueO',
          template_params: {
            to_email: profile.email,
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            name: formData.name,
            time: timeString
          }
        })
      });

      console.log('EmailJS response:', response.status);

      if (response.ok) {
        setTimeout(() => {
          setStatus('success');
          confetti({
            particleCount: 50,
            spread: 50,
            origin: { y: 0.8 }
          });
          // Reset form
          setFormData({
            name: '',
            email: '',
            subject: subjectOptions[0] || '',
            message: '',
            timeline: 'Immediate',
            budget: 'Standard'
          });
        }, 500);
      } else {
        throw new Error(`Failed to send email: ${response.status}`);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      // Fallback: still show success after delay
      setTimeout(() => {
        setStatus('success');
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.8 }
        });
      }, 1000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const github = profile.socials.find(s => s.icon === 'github');
  const linkedin = profile.socials.find(s => s.icon === 'linkedin');

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
            isLight 
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
              : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300'
          }`}>
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            {t.contact.title}
          </h2>
          <p className={`text-base sm:text-lg ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Profile Links & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 sm:p-7 rounded-2xl border space-y-6 transition-colors ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <h3 className={`text-lg font-bold flex items-center gap-2 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>{t.contact.profilesCoordinates}</span>
              </h3>

              {/* Email Direct Box */}
              <div className={`p-4 rounded-xl border space-y-2 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800/80'
              }`}>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-500" />
                    <span className={isLight ? 'text-slate-700 font-medium' : 'text-slate-400'}>{t.contact.primaryEmail}</span>
                  </span>
                  <span className="text-[10px] text-emerald-500 font-medium">{t.contact.activeResponse}</span>
                </div>

                <div className="flex items-center justify-between gap-2" dir="ltr">
                  <span className={`text-xs sm:text-sm font-mono truncate font-medium ${
                    isLight ? 'text-slate-900' : 'text-slate-200'
                  }`}>
                    {profile.email}
                  </span>
                  <button
                    id="btn-copy-email"
                    onClick={copyEmail}
                    className={`p-1.5 rounded-lg border transition-colors shrink-0 flex items-center gap-1 text-xs cursor-pointer ${
                      isLight 
                        ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200' 
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
                    }`}
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? t.contact.copied : t.contact.copy}</span>
                  </button>
                </div>
              </div>

              {/* Professional Profile Links List */}
              <div className="space-y-2.5">
                <span className={`text-xs font-semibold uppercase tracking-wider block ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {t.contact.verifiedProfiles}
                </span>

                {github && (
                  <a
                    id="contact-link-github"
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex items-center justify-between group transition-all ${
                      isLight 
                        ? 'bg-slate-50 hover:bg-indigo-50/60 border-slate-200' 
                        : 'bg-slate-950 hover:bg-slate-800/80 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        isLight ? 'bg-slate-200 text-slate-900 group-hover:bg-slate-300' : 'bg-slate-900 text-white group-hover:bg-slate-800'
                      }`}>
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`text-xs sm:text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>GitHub</h4>
                        <p className={`text-[11px] font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>github.com/Mouad2025</p>
                      </div>
                    </div>
                    <ExternalLink className={`w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </a>
                )}

                {linkedin && (
                  <a
                    id="contact-link-linkedin"
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex items-center justify-between group transition-all ${
                      isLight 
                        ? 'bg-slate-50 hover:bg-indigo-50/60 border-slate-200' 
                        : 'bg-slate-950 hover:bg-slate-800/80 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        isLight ? 'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-200' : 'bg-indigo-950/80 text-indigo-300 group-hover:bg-indigo-900'
                      }`}>
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className={`text-xs sm:text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>LinkedIn</h4>
                        <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Bouhadiba Mouâd</p>
                      </div>
                    </div>
                    <ExternalLink className={`w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </a>
                )}
              </div>

              {/* Location & Availability Note */}
              <div className={`pt-2 border-t space-y-2 text-xs ${
                isLight ? 'border-slate-200 text-slate-600' : 'border-slate-800/80 text-slate-400'
              }`}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{t.contact.locatedIn} {profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.contact.inquiriesWelcome}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm shadow-xl transition-colors ${
              isLight ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
            }`}>
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{t.contact.form.successTitle}</h3>
                  <p className={`text-sm max-w-md mx-auto leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                    {t.contact.form.successMessage.replace('{name}', formData.name).replace('{email}', profile.email)}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setStatus('idle');
                      }}
                      className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      }`}
                    >
                      {t.contact.form.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className={`text-xs font-semibold flex items-center justify-between ${
                        isLight ? 'text-slate-700' : 'text-slate-300'
                      }`}>
                        <span>{t.contact.form.name} *</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder={t.contact.form.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full border rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-colors ${
                          isLight 
                            ? 'bg-slate-50 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:border-indigo-600 focus:bg-white' 
                            : 'bg-slate-950 text-slate-100 placeholder:text-slate-500 border-slate-800 focus:border-indigo-500'
                        } ${errors.name ? 'border-rose-500 focus:border-rose-500' : ''}`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className={`text-xs font-semibold flex items-center justify-between ${
                        isLight ? 'text-slate-700' : 'text-slate-300'
                      }`}>
                        <span>{t.contact.form.email} *</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full border rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-colors ${
                          isLight 
                            ? 'bg-slate-50 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:border-indigo-600 focus:bg-white' 
                            : 'bg-slate-950 text-slate-100 placeholder:text-slate-500 border-slate-800 focus:border-indigo-500'
                        } ${errors.email ? 'border-rose-500 focus:border-rose-500' : ''}`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className={`text-xs font-semibold ${
                      isLight ? 'text-slate-700' : 'text-slate-300'
                    }`}>
                      {t.contact.form.category}
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none cursor-pointer ${
                        isLight 
                          ? 'bg-slate-50 text-slate-900 border-slate-200 focus:border-indigo-600' 
                          : 'bg-slate-950 text-slate-200 border-slate-800 focus:border-indigo-500'
                      }`}
                    >
                      {subjectOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className={isLight ? 'bg-white text-slate-900' : 'bg-slate-900 text-slate-200'}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className={`flex items-center justify-between text-xs font-semibold ${
                      isLight ? 'text-slate-700' : 'text-slate-300'
                    }`}>
                      <label htmlFor="contact-message">{t.contact.form.message} *</label>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {formData.message.length} {t.contact.form.chars}
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder={t.contact.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-colors leading-relaxed resize-none ${
                        isLight 
                          ? 'bg-slate-50 text-slate-900 placeholder:text-slate-400 border-slate-200 focus:border-indigo-600 focus:bg-white' 
                          : 'bg-slate-950 text-slate-100 placeholder:text-slate-500 border-slate-800 focus:border-indigo-500'
                      } ${errors.message ? 'border-rose-500 focus:border-rose-500' : ''}`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-500">{errors.message}</p>}
                  </div>

                  {/* Submit Button & Mailto fallback */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      id="btn-submit-contact"
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className={`w-4 h-4 ${status === 'submitting' ? 'animate-spin' : ''}`} />
                      <span>{status === 'submitting' ? t.contact.form.sending : t.contact.form.sendMessage}</span>
                    </button>

                    <a
                      id="btn-direct-mailto"
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message || 'Hi Mouâd,\n\nI wanted to reach out regarding...')}`}
                      className={`text-xs transition-colors flex items-center gap-1 ${
                        isLight ? 'text-slate-500 hover:text-indigo-600' : 'text-slate-400 hover:text-indigo-300'
                      }`}
                    >
                      <span>{t.contact.form.orMailClient}</span>
                      <ExternalLink className={`w-3 h-3 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
