import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const NEWSLETTER_FORM_ID = 'XvNwejXMxFvyI8Nm4yxI';
const NEWSLETTER_FORM_URL = `https://api.leadconnectorhq.com/widget/form/${NEWSLETTER_FORM_ID}`;
const GHL_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

const FooterLink = ({ text, href }: { text: string; href?: string }) => (
  <a href={href || "#"} className="text-gray-400 hover:text-primary transition-colors">
    {text}
  </a>
);

const Footer = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${GHL_EMBED_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.src = GHL_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <img
              src="https://4ucit.com/wp-content/uploads/2022/11/NAV-Logo-WHITE2-768x156.png"
              alt="Ultimate Consulting"
              className="h-12 mb-8"
              referrerPolicy="no-referrer"
            />
            <iframe
              src={NEWSLETTER_FORM_URL}
              id={`inline-${NEWSLETTER_FORM_ID}`}
              title="Ultimate Insights Newsletter Opt-In"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Ultimate Insights – Newsletter Opt-In"
              data-height="525"
              data-layout-iframe-id={`inline-${NEWSLETTER_FORM_ID}`}
              data-form-id={NEWSLETTER_FORM_ID}
              style={{ width: '100%', minHeight: 525, border: 'none', borderRadius: 10 }}
            />
          </div>

          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <FooterLink text="Our Services" href="/#services" />
            <FooterLink text="Our Customers" href="/higher-education" />
            <FooterLink text="Who We Are" href="/who-we-are" />
            <FooterLink text="Ultimate Insights" href="/insights" />
          </div>

          <div className="md:col-span-4 flex flex-col space-y-4">
            <div>
              <p className="text-gray-400 mb-4">
                PO Box 38,<br />
                Lebanon, GA, 30146<br />
                <a href="tel:8443448248" className="hover:text-primary">(844) 344-8248</a>
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/4ucit/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col space-y-6 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </div>
            <span className="text-gray-500 text-center md:text-right">
              created by{' '}
              <a href="https://www.chatbotboy.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Chatbot Boy AI
              </a>
            </span>
          </div>
          <p className="text-xs leading-relaxed text-gray-500 text-center md:text-left">
            COPYRIGHT © 2026 ULTIMATE CONSULTING LLC. ALL RIGHTS RESERVED - REFERENCES TO ELLUCIAN, SCT, SUNGARD, DATATEL AND BANNER ARE FEDERAL REGISTERED TRADEMARKS OF ELLUCIAN / SUNGARD DATA SYSTEMS, INC. ORACLE AND PEOPLESOFT ARE REGISTERED TRADEMARKS OF ORACLE AND/OR ITS AFFILIATES. OTHER NAMES MAY BE TRADEMARKS OF THEIR RESPECTIVE OWNERS. ULTIMATE CONSULTING IT LLC IS NOT AFFILIATED WITH ELLUCIAN, SUNGARD DATA SYSTEMS, INC., ORACLE, NOR PEOPLESOFT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
