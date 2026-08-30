import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { ProfileData } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  theme?: 'dark' | 'light';
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
  onReset: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  theme = 'dark',
  onClose,
  profile,
  onSave,
  onReset
}) => {
  const [formData, setFormData] = useState<ProfileData>({ ...profile });
  const [savedToast, setSavedToast] = useState(false);
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedToast(true);
    setTimeout(() => {
      setSavedToast(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    if (window.confirm('Reset all profile details to default?')) {
      onReset();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        id="edit-profile-modal-dialog"
        className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl shadow-black overflow-hidden my-8 transition-colors ${
          isLight ? 'bg-white border-slate-200 shadow-slate-900/20' : 'bg-slate-900 border-slate-700'
        }`}
      >
        {/* Header */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-500" />
            <h3 className={`font-bold text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>Customize Portfolio Details</h3>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isLight 
                ? 'text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200' 
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Personalize your name, research focus, bio, and social coordinates. Changes apply across the site and inside the downloadable PDF resume in real time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Your Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full border rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none ${
                  isLight 
                    ? 'bg-slate-50 text-slate-900 border-slate-200 focus:border-indigo-600' 
                    : 'bg-slate-950 text-slate-100 border-slate-800 focus:border-indigo-500'
                }`}
                required
              />
            </div>

            {/* Title */}
            <div className="space-y-1.5">
              <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Professional Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={`w-full border rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none ${
                  isLight 
                    ? 'bg-slate-50 text-slate-900 border-slate-200 focus:border-indigo-600' 
                    : 'bg-slate-950 text-slate-100 border-slate-800 focus:border-indigo-500'
                }`}
                required
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Headline Tagline</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className={`w-full border rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none ${
                isLight 
                  ? 'bg-slate-50 text-slate-900 border-slate-200 focus:border-indigo-600' 
                  : 'bg-slate-950 text-slate-100 border-slate-800 focus:border-indigo-500'
              }`}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Contact Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full border rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none ${
                  isLight 
                    ? 'bg-slate-50 text-slate-900 border-slate-200 focus:border-indigo-600' 
                    : 'bg-slate-950 text-slate-100 border-slate-800 focus:border-indigo-500'
                }`}
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className={`w-full border rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none ${
                  isLight 
                    ? 'bg-slate-50 text-slate-900 border-slate-200 focus:border-indigo-600' 
                    : 'bg-slate-950 text-slate-100 border-slate-800 focus:border-indigo-500'
                }`}
              />
            </div>
          </div>

          {/* Availability Status */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Availability Status Badge</label>
            <input
              type="text"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className={`w-full border rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none ${
                isLight 
                  ? 'bg-slate-50 text-slate-900 border-slate-200 focus:border-indigo-600' 
                  : 'bg-slate-950 text-slate-100 border-slate-800 focus:border-indigo-500'
              }`}
            />
          </div>

          {/* Bio paragraph 1 */}
          <div className="space-y-1.5">
            <label className={`text-xs font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Biography Summary</label>
            <textarea
              rows={3}
              value={formData.bioParagraphs[0] || ''}
              onChange={(e) => {
                const newParagraphs = [...formData.bioParagraphs];
                newParagraphs[0] = e.target.value;
                setFormData({ ...formData, bioParagraphs: newParagraphs });
              }}
              className={`w-full border rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none resize-none ${
                isLight 
                  ? 'bg-slate-50 text-slate-900 border-slate-200 focus:border-indigo-600' 
                  : 'bg-slate-950 text-slate-100 border-slate-800 focus:border-indigo-500'
              }`}
            />
          </div>

          {/* Footer Actions */}
          <div className={`pt-4 border-t flex items-center justify-between ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <button
              type="button"
              onClick={handleReset}
              className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isLight 
                  ? 'text-slate-500 hover:text-rose-600 hover:bg-slate-100' 
                  : 'text-slate-400 hover:text-rose-400 hover:bg-slate-950'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  isLight 
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' 
                    : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {savedToast ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
                <span>{savedToast ? 'Saved!' : 'Save & Update Site'}</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

