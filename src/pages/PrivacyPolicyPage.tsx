import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to website
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Effective Date: April 11, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-10">
            Ultimate Consulting IT LLC ("Ultimate Consulting," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at <span className="font-medium text-gray-800">ultimateconsulting.com</span> or engage with our services.
          </p>

          <Section title="1. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><span className="font-medium text-gray-800">Contact Information:</span> Name, email address, phone number, and institution name submitted through our contact or feedback forms.</li>
              <li><span className="font-medium text-gray-800">Usage Data:</span> Pages visited, browser type, IP address, and referring URLs collected automatically via cookies and analytics tools.</li>
              <li><span className="font-medium text-gray-800">Communications:</span> Messages, requests, or inquiries you send to us directly.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Respond to inquiries and provide consulting services.</li>
              <li>Send relevant updates, newsletters, or service announcements (with your consent).</li>
              <li>Improve our website and service offerings.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </Section>

          <Section title="3. Cookies and Tracking Technologies">
            <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can configure your browser to refuse cookies, though some features of our site may not function properly as a result.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>We may use trusted third-party providers (such as analytics platforms or email services) to operate our website and communicate with you. These providers are contractually obligated to keep your information confidential and to use it only to perform services on our behalf.</p>
          </Section>

          <Section title="5. Data Security">
            <p>We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain personal information only as long as necessary to fulfill the purposes described in this policy or as required by law. When information is no longer needed, we securely delete or anonymize it.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your information.</li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at the information below.</p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>Our website is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-800">Ultimate Consulting IT LLC</p>
              <p>PO Box 38, Lebanon, GA 30146</p>
              <p>Phone: <a href="tel:8443448248" className="text-blue-600 hover:underline">(844) 344-8248</a></p>
              <p>Website: <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link></p>
            </div>
          </Section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
