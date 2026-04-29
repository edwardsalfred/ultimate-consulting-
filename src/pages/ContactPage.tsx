import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, MapPin, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GHL_FORM_ID = 'uhyE5gfBZFiQ1EtsC8qL';
const GHL_FORM_URL = `https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`;
const GHL_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

export default function ContactPage() {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.src = GHL_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

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

          {/* GHL Form Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <iframe
              src={GHL_FORM_URL}
              id={`inline-${GHL_FORM_ID}`}
              title="Contact Ultimate Consulting"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Ultimate Consulting Contact Form"
              data-height="700"
              data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
              data-form-id={GHL_FORM_ID}
              style={{ width: '100%', minHeight: 700, border: 'none', borderRadius: 10 }}
            />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
