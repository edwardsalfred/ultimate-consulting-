import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, ArrowLeft, ArrowRight, MapPin, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const isValid = firstName.trim() && lastName.trim() && email.trim() && message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (!isValid) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, institution, role, message }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navbar />
        <div className="flex items-center justify-center px-4 min-h-screen">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h2>
            <p className="text-gray-500">Thank you for reaching out. A member of our team will be in touch with you shortly.</p>
            <Link
              to="/"
              className="mt-8 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Back to homepage
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-white/60 hover:text-white transition-colors text-sm mb-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to website
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
              Let's Talk
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight">
              Ready to Modernize Your Institution?
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">
              Tell us about your goals and challenges. Our team will follow up to schedule a conversation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-0.5">Office</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      PO Box 38<br />
                      Lebanon, GA 30146
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-0.5">Phone</p>
                    <a href="tel:8443448248" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      (844) 344-8248
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-0.5">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/4ucit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      Ultimate Consulting IT
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">What to Expect</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2.5">
                  <ArrowRight className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  Response within 1 business day
                </li>
                <li className="flex items-start gap-2.5">
                  <ArrowRight className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  A brief discovery call to understand your needs
                </li>
                <li className="flex items-start gap-2.5">
                  <ArrowRight className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  A tailored proposal and next steps
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-first-name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="Jane"
                    className={`w-full border rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors ${
                      attemptedSubmit && !firstName.trim() ? 'border-red-300' : 'border-gray-200'
                    }`}
                  />
                  {attemptedSubmit && !firstName.trim() && (
                    <p className="text-red-500 text-xs mt-1">First name is required.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Smith"
                    className={`w-full border rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors ${
                      attemptedSubmit && !lastName.trim() ? 'border-red-300' : 'border-gray-200'
                    }`}
                  />
                  {attemptedSubmit && !lastName.trim() && (
                    <p className="text-red-500 text-xs mt-1">Last name is required.</p>
                  )}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="jane.smith@university.edu"
                    className={`w-full border rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors ${
                      attemptedSubmit && !email.trim() ? 'border-red-300' : 'border-gray-200'
                    }`}
                  />
                  {attemptedSubmit && !email.trim() && (
                    <p className="text-red-500 text-xs mt-1">Email is required.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="(555) 123-4567"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-colors"
                  />
                </div>
              </div>

              {/* Institution + Role */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-institution" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Institution
                  </label>
                  <input
                    id="contact-institution"
                    type="text"
                    autoComplete="organization"
                    value={institution}
                    onChange={e => setInstitution(e.target.value)}
                    placeholder="e.g. State University"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-role" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Role / Title
                  </label>
                  <input
                    id="contact-role"
                    type="text"
                    autoComplete="organization-title"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    placeholder="e.g. VP of IT"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  How Can We Help? <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell us about your institution's current systems, challenges, or initiatives you're looking for support with..."
                  className={`w-full border rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 resize-none transition-colors ${
                    attemptedSubmit && !message.trim() ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {attemptedSubmit && !message.trim() && (
                  <p className="text-red-500 text-xs mt-1">Please describe how we can help.</p>
                )}
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or call us directly.</p>
              )}

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={status === 'submitting'}
                onClick={() => setAttemptedSubmit(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
