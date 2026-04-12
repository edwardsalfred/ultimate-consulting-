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
          <p className="text-white/60 text-sm">Effective Date: April 12, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-10">
            Welcome to the Ultimate Consulting IT website. Ultimate Consulting, IT LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <Section title="1. Information We Collect">
            <p>We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, fill out a contact form, subscribe to a newsletter, or engage with our services. The types of personal information we may collect include:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Name, email address, phone number, and institution name.</li>
              <li>Information you provide when requesting a consultation or services.</li>
              <li>Automatically collected data, such as IP addresses, browser type, and operating system, gathered via cookies and tracking technologies.</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We may use the information we collect from you to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Respond to your inquiries, customer service requests, and support needs.</li>
              <li>Provide you with information about our higher education consulting services.</li>
              <li>Improve our website offerings and user experience.</li>
              <li>Send periodic emails regarding our services, updates, or related company information.</li>
            </ul>
          </Section>

          <Section title="3. How We Protect Your Information">
            <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our site.</p>
          </Section>

          <Section title="4. Sharing Your Personal Information">
            <p>We do not sell, trade, or rent user personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates for the purposes outlined above.</p>
          </Section>

          <Section title="5. Changes to This Privacy Policy">
            <p>Ultimate Consulting, IT LLC has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes. You acknowledge and agree that it is your responsibility to review this privacy policy periodically.</p>
          </Section>

          <Section title="6. Contacting Us">
            <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-800">Ultimate Consulting, IT LLC</p>
              <p>PO Box 38</p>
              <p>Lebanon, GA 30146</p>
              <p>Phone: <a href="tel:8443448248" className="text-blue-600 hover:underline">(844) 344-8248</a></p>
            </div>
          </Section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
