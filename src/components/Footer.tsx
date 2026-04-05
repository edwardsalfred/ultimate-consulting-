import React from 'react';
import { Linkedin } from 'lucide-react';

const FooterLink = ({ text }: { text: string }) => (
  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
    {text}
  </a>
);

const Footer = () => {
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
            <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-6">
              Be the first to learn about new services and tools to help your organization thrive.
            </p>
            <form className="space-y-4">
              <input type="text" placeholder="First Name" className="w-full bg-slate-800 border border-slate-700 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Last Name" className="w-full bg-slate-800 border border-slate-700 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email Address" className="w-full bg-slate-800 border border-slate-700 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary" />
              <button type="button" className="w-full bg-white text-slate-900 rounded-full px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
                Submit
              </button>
            </form>
          </div>

          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <FooterLink text="Our Services" />
            <FooterLink text="Our Partners" />
            <FooterLink text="Our Customers" />
            <FooterLink text="Who We Are" />
            <FooterLink text="Ultimate Insights" />
          </div>

          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <FooterLink text="Careers & Culture" />
            <FooterLink text="Resources" />
            <FooterLink text="Events" />
            <FooterLink text="News" />

            <div className="mt-8 pt-8 border-t border-slate-800">
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
          <div className="flex justify-center md:justify-start">
            <a href="#" className="hover:text-white">Privacy Policy</a>
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
