import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, ChevronDown, Database, Network, Layout, BarChart3, Users,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: Database,
    title: 'ERP Modernization & DBA Support',
    summary:
      'Our Senior DBAs establish Pre-Production (PPRD) environments to ensure stable testing platforms for system upgrades. We implement Ellucian Solution Manager (ESM), manage Single Sign-On (SSO) and load balancing, remediate Tomcat 10 namespace errors, and execute critical Banner release upgrades.',
  },
  {
    icon: Network,
    title: 'Advanced System Integration',
    summary:
      'We break down data silos by building secure, automated data synchronizations. We utilize Ellucian Ethos API and Data Connect to build comprehensive inbound and outbound feeds for Banner-to-Workday migrations (e.g., course sections and transcripts), and seamlessly integrate third-party platforms like Pathify, Jaggaer e-procurement, and FundMiner.',
  },
  {
    icon: Layout,
    title: 'Portal & Experience Migrations',
    summary:
      'We guide institutions through the migration of legacy portals (such as OneCampus) to Ellucian Experience, designing and configuring cards, setting up role-based visibility, and applying conditional logic.',
  },
  {
    icon: BarChart3,
    title: 'Legacy Data Cleansing & Warehousing',
    summary:
      'We audit and remediate years of legacy data degradation—including dependencies on MS Access and Excel—building automated scripts to cleanse data for Ethos API readiness and SaaS migrations. We also assist in modernizing reporting by evaluating KPIs, administering legacy Cognos environments, and creating roadmaps for modern data warehouses and Power BI dashboards.',
  },
  {
    icon: Users,
    title: 'Flexible Staff Augmentation',
    summary:
      'We provide remote, "phone-a-friend" technical coverage during sudden staffing shortages, multi-year Workday implementations, or support staff strikes. Our pools of DBAs and ERP specialists ensure your mission-critical databases stay online, backups are validated, and daily helpdesk tickets are resolved.',
  },
];

const approachSteps = [
  {
    number: '01',
    title: 'Assess',
    description: 'We audit your ERP environment — architecture, integrations, performance, and security posture.',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'We design a modernization roadmap aligned to your institutional goals and technical realities.',
  },
  {
    number: '03',
    title: 'Implement',
    description: 'Our Senior DBAs and technical consultants execute upgrades, migrations, and integrations hands-on.',
  },
  {
    number: '04',
    title: 'Support',
    description: 'We stay on call — monitoring backups, tuning performance, and keeping your systems healthy.',
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

export default function EnterpriseSystemStrategyPage() {
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
            <span className="text-white">Enterprise System Strategy and Support</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-block text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-5">
              Core Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Enterprise System Strategy and Support
            </h1>
            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-3xl">
              We provide implementation support, optimization, advisory services, and operational guidance for the core systems that power your institution. Our technical consultants handle the heavy lifting for major ERPs like Ellucian Banner, Ellucian Colleague, PeopleSoft, and Workday, ensuring your technical architecture is robust and secure.
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
              Capabilities Across the ERP Lifecycle
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
              From database administration and system integration to portal migrations and staff augmentation, we bring deep technical expertise to every engagement.
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
              Ready to Strengthen Your Enterprise Systems?
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Let's talk about how we can support your ERP strategy.
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
