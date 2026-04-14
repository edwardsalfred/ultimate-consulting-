import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, GraduationCap, Briefcase, UserCheck, BookOpen,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: GraduationCap,
    title: 'Tailored End-User Training',
    summary:
      'We deliver structured, interactive virtual and on-site training sessions customized to your institution\u2019s academic cycle. From coaching faculty on Banner 9 Self-Service grading to training HR teams on PeopleSoft Contract Pay conversions (10- and 12-month pay cycles), we ensure your users understand both the "how" and the "why". We also provide hands-on training for technical tools, such as building and scheduling jobs in Ellucian Data Connect.',
  },
  {
    icon: Briefcase,
    title: 'Functional Leadership & Interim Management',
    summary:
      'For institutions facing critical leadership gaps, we provide strategic oversight. This includes supplying Interim Financial Aid Managers to oversee critical packaging and disbursement operations, or designating functional leads ("Czars") to guide governance and alignment for multi-campus system rollouts.',
  },
  {
    icon: UserCheck,
    title: 'Technical Mentorship',
    summary:
      'We actively invest in your IT department\u2019s future by providing direct, on-the-job mentoring to less experienced internal technical staff during complex API integrations and version upgrades.',
  },
  {
    icon: BookOpen,
    title: 'Governance & Comprehensive Documentation',
    summary:
      'We leave behind robust, reusable resources to ensure your team can independently maintain their systems. This includes drafting governance policies for Ellucian Experience cards and DegreeWorks templates, auditing Cognos security groups, and providing Quick Reference Guides, recorded video walkthroughs, and detailed grading calendars for faculty and staff.',
  },
];

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex items-start gap-5"
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-0.5"
        style={{ background: 'rgba(28,130,226,0.08)', color: '#1C82E2' }}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {service.title}
        </h3>
        <p className="mt-2 text-gray-500 text-sm leading-relaxed">{service.summary}</p>
      </div>
    </motion.div>
  );
};

export default function ChangeManagementPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-36 pb-32 lg:pb-44 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-10 text-xs font-semibold text-white/50 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Our Services</a>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">Change Management, Training, and Functional Leadership</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-block text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-5">
              Core Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Change Management, Training, and Functional Leadership
            </h1>
            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-3xl">
              We prepare teams for change through strategic planning, stakeholder engagement, communication, training, and ongoing functional support that drives adoption and long-term success. Technology is only as effective as the people who use it, which is why knowledge transfer is built into the DNA of every engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm"
              >
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">What We Deliver</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
              Building Teams That Own Their Technology
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
              From end-user training and interim leadership to technical mentorship and governance documentation, we ensure your people are ready for every phase of change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #1C82E2 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-4">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Empower Your Team?
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Let's talk about how we can drive adoption and long-term success.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-base"
            >
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
