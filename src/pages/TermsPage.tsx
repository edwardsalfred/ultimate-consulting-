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

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/60 text-sm">Effective Date: April 11, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-10">
            These Terms and Conditions ("Terms") govern your use of the website operated by Ultimate Consulting IT LLC ("Ultimate Consulting," "we," "us," or "our") and any services we provide. By accessing our website or engaging our services, you agree to these Terms. Please read them carefully.
          </p>

          <Section title="1. Use of the Website">
            <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site. Prohibited activities include:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Transmitting any unauthorized or unsolicited advertising or promotional material.</li>
              <li>Attempting to gain unauthorized access to any part of the site or its related systems.</li>
              <li>Using the site in any way that could damage, disable, or impair its functionality.</li>
            </ul>
          </Section>

          <Section title="2. Intellectual Property">
            <p>All content on this website — including text, graphics, logos, and images — is the property of Ultimate Consulting IT LLC or its content suppliers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
          </Section>

          <Section title="3. Services and Engagements">
            <p>Any consulting services provided by Ultimate Consulting are governed by a separate written agreement or statement of work executed between the parties. These Terms do not create a professional services agreement or any obligation for us to provide services.</p>
            <p>We reserve the right to decline any engagement at our discretion.</p>
          </Section>

          <Section title="4. Disclaimer of Warranties">
            <p>This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>To the fullest extent permitted by law, Ultimate Consulting IT LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or our services — even if we have been advised of the possibility of such damages.</p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>Our website may contain links to third-party websites for your convenience. These links do not constitute an endorsement of those sites. We have no control over their content and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </Section>

          <Section title="7. Indemnification">
            <p>You agree to indemnify and hold harmless Ultimate Consulting IT LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of your use of this website or violation of these Terms.</p>
          </Section>

          <Section title="8. Governing Law">
            <p>These Terms are governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Georgia.</p>
          </Section>

          <Section title="9. Changes to These Terms">
            <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the website after changes constitutes your acceptance of the revised Terms.</p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have questions about these Terms, please contact us:</p>
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
