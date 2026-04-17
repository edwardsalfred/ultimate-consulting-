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

const approachSteps = [
  {
    number: '01',
    title: 'Listen',
    description: 'We meet with stakeholders to understand concerns, skill gaps, and adoption barriers.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We build a tailored training and communication strategy aligned to your academic cycle.',
  },
  {
    number: '03',
    title: 'Train',
    description: 'We deliver interactive sessions, on-the-job mentoring, and comprehensive documentation.',
  },
  {
    number: '04',
    title: 'Empower',
    description: 'We leave your team fully equipped to own the systems and processes going forward.',
  },
];

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full" />

      <span
        className="absolute top-5 right-6 text-[4rem] font-black leading-none tabular-nums select-none pointer-events-none"
        style={{ color: 'rgba(28,130,226,0.06)' }}
        aria-hidden="true"
      >
        {num}
      </span>

      <div
        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: 'rgba(28,130,226,0.1)', color: '#1C82E2' }}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="relative text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
        {service.title}
      </h3>
      <p className="relative text-gray-600 text-sm leading-relaxed">
        {service.summary}
      </p>
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
            <span>Our Services</span>
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

      {/* ── Approach ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Approach to Every Engagement
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl leading-relaxed">
              A proven, four-phase methodology that keeps your institution informed, aligned, and in control from start to finish.
            </p>
          </motion.div>

          <div className="relative grid md:grid-cols-4 gap-10">
            <div
              className="hidden md:block absolute top-6 left-16 right-16 pointer-events-none"
              style={{ borderTop: '2px dashed rgba(28,130,226,0.25)' }}
              aria-hidden="true"
            />
            {approachSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className="relative w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center mb-5 z-10"
                  style={{ borderColor: '#1C82E2' }}
                >
                  <span className="font-bold text-sm" style={{ color: '#1C82E2' }}>{step.number}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-50 border-t border-gray-100 relative overflow-hidden">
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
