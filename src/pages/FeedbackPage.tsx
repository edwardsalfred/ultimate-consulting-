import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Monitor, Palette, Bug, Sparkles, MoreHorizontal, Send } from 'lucide-react';

type RequestType = 'Content Change' | 'Design Tweak' | 'Bug / Issue' | 'New Feature' | 'Other';
type Priority = 'Low' | 'Medium' | 'High';
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const REQUEST_TYPES: { label: RequestType; description: string; icon: React.ElementType }[] = [
  { label: 'Content Change', description: 'Update text, images, or info', icon: Monitor },
  { label: 'Design Tweak', description: 'Colors, layout, or styling', icon: Palette },
  { label: 'Bug / Issue', description: 'Something isn\'t working right', icon: Bug },
  { label: 'New Feature', description: 'Add something new', icon: Sparkles },
  { label: 'Other', description: 'Anything else', icon: MoreHorizontal },
];

const PRIORITIES: Priority[] = ['Low', 'Medium', 'High'];

export default function FeedbackPage() {
  const [businessName, setBusinessName] = useState('');
  const [requestType, setRequestType] = useState<RequestType | null>(null);
  const [priority, setPriority] = useState<Priority>('Medium');
  const [pageSection, setPageSection] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !requestType || !description) return;

    setStatus('submitting');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, requestType, priority, pageSection, description }),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Request Submitted!</h2>
          <p className="text-gray-500">Your request will be reviewed by our team and you'll see updates on its progress.</p>
          <button
            onClick={() => {
              setStatus('idle');
              setBusinessName('');
              setRequestType(null);
              setPriority('Medium');
              setPageSection('');
              setDescription('');
            }}
            className="mt-8 text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Submit another request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://4ucit.com/wp-content/uploads/2022/11/NAV-Logo-WHITE2-768x156.png"
            alt="Ultimate Consulting"
            className="h-8 invert brightness-0"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Submit a Change Request</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">Tell us what you need and we'll take care of it.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Business Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              placeholder="e.g. Diamond D Boutique"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
          </div>

          {/* Request Type */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              What Type of Change? <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {REQUEST_TYPES.map(({ label, description, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setRequestType(label)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl border-2 transition-all cursor-pointer ${
                    requestType === label
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1.5" />
                  <span className="text-xs font-semibold leading-tight">{label}</span>
                  <span className="text-[10px] text-gray-400 mt-1 leading-tight hidden sm:block">{description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Priority + Page Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Priority
              </label>
              <div className="flex rounded-xl border border-gray-200 overflow-hidden">
                {PRIORITIES.map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`flex-1 py-2.5 text-sm font-medium transition-all ${
                      priority === p
                        ? 'bg-amber-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Page / Section
              </label>
              <input
                type="text"
                value={pageSection}
                onChange={e => setPageSection(e.target.value)}
                placeholder="e.g. About, Contact"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Describe What You Need <span className="text-red-400">*</span>
            </label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              rows={5}
              placeholder="Please describe the change you'd like in as much detail as possible. Include any specific text, links, or references that will help us get it right the first time."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 resize-none"
            />
          </div>

          {/* Error */}
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting' || !businessName || !requestType || !description}
            className="w-full bg-amber-700 hover:bg-amber-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Request
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            Your request will be reviewed by our team and you'll see updates on its progress.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
