import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, ChevronDown, Server, Users, BarChart3, BookOpen,
  ClipboardCheck, Database, GraduationCap, Code2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const services = [
  {
    icon: Server,
    title: 'Strategic Technology & ERP Solutions',
    summary:
      'We implement, optimize, and support the critical enterprise platforms that run your campus—including Ellucian Banner, Ellucian Colleague, PeopleSoft, Workday, and Salesforce CRM.',
    bullets: [
      {
        label: 'ERP Modernization',
        text: 'Upgrading legacy environments (e.g., Banner 9 Self-Service) to current releases and delivering hands-on training to optimize new features.',
      },
      {
        label: 'System Integration',
        text: 'Building secure, fluid data exchanges using Ellucian Ethos for modern platforms like FundMiner, and custom API configurations for third-party systems like Jaggaer e-procurement.',
      },
      {
        label: 'Custom Development & Process Automation',
        text: 'Streamlining operations by implementing Faculty Load and Compensation (FLAC) and Electronic Personal Action Forms (EPAF). We also specialize in custom SQL process writing (such as automated advisor assignments) and building custom Ellucian PageBuilder applications for tailored campus needs.',
      },
      {
        label: 'Financial Aid Compliance & Optimization',
        text: 'Guiding institutions through complex regulatory changes, including FAFSA simplification rule-writing, Title IV compliance, R2T4 business practice reviews, and Banner-to-Workday migration support.',
      },
      {
        label: 'Student Success & DegreeWorks',
        text: 'Scribing and configuring DegreeWorks to mirror complex curriculum changes, enforce prerequisites, and optimize registration processes like Waitlisting and Fine-Grained Access Control (FGAC).',
      },
    ],
  },
  {
    icon: Users,
    title: 'Flexible Staff Augmentation & Emergency Coverage',
    summary:
      "Internal staffing shortages shouldn't stall your institutional goals. We offer a flexible \"bucket-of-hours\" model and remote \"phone-a-friend\" expertise to cover critical gaps.",
    bullets: [
      {
        label: 'Business Continuity & Strike Coverage',
        text: 'Providing emergency, on-demand pools of DBAs and ERP technical consultants to maintain mission-critical Oracle, PeopleSoft, and Salesforce environments during sudden staff departures or labor strikes.',
      },
      {
        label: 'Backlog & Ticketing Support',
        text: 'Deploying remote functional and technical SMEs to clear daily helpdesk backlogs across HR, Finance, Student, and Financial Aid modules.',
      },
    ],
  },
  {
    icon: BarChart3,
    title: 'Data, Reporting & Analytics',
    summary:
      'We help institutions transform raw data into leadership insights. We specialize in comprehensive reporting frameworks, offering training, server upgrades, and health checks for Cognos, as well as assisting with data flow for Power BI dashboards.',
    bullets: [],
  },
  {
    icon: BookOpen,
    title: 'Institutional Enablement & Knowledge Transfer',
    summary:
      'We do more than just fix problems; we prepare your team for the future. Every engagement prioritizes on-the-job mentoring, comprehensive documentation, and specialized staff training so internal teams can independently manage systems long after we leave.',
    bullets: [],
  },
];

const caseStudies = [
  {
    institution: 'Kent State University',
    tag: 'Project Management & System Upgrades',
    icon: ClipboardCheck,
    logo: '/colleges logos/kent-state.jpg',
    logoSize: 'max-h-20',
    text: 'Kent State University partnered with Ultimate Consulting to provide expert project management and technical services for their Banner 9 Self-Service upgrade. Our team guided the functional and technical implementation across the Banner General, Finance, Employee, Student, and Faculty modules, helping the university streamline processes, improve customer service, and enhance daily business operations.',
  },
  {
    institution: 'The University of South Carolina',
    tag: 'Database Administration & System Installation',
    icon: Database,
    logo: '/colleges logos/south-carolina.svg',
    logoSize: 'max-h-16',
    logoBg: '#73000A',
    text: 'The University of South Carolina engaged Ultimate Consulting to provide an Oracle/Banner DBA consultant to lead the implementation of a new Banner XE instance. Our technical experts successfully installed and upgraded the Oracle database and Ellucian software across multiple modules, configured the application servers, and successfully deployed the Banner API to ensure complete system readiness.',
  },
  {
    institution: 'University of California, Santa Cruz',
    tag: 'Staff Augmentation',
    icon: Users,
    logo: '/colleges logos/ucsc-logo-png-1632430467.png',
    logoSize: 'max-h-24',
    text: 'Facing sudden technical staffing shortages, UCSC partnered with Ultimate Consulting to supply an expert Banner Finance technical resource. We ensured their Banner version upgrades stayed on track while successfully guiding the complex technical API integration of the Jaggaer supplier management system, providing vital mentorship to internal staff along the way.',
  },
  {
    institution: 'Santa Fe Community College',
    tag: 'Financial Aid & Migration',
    icon: GraduationCap,
    logo: '/colleges logos/santa fe community college logo.png',
    logoSize: 'max-h-24',
    text: 'As Santa Fe transitioned its systems, Ultimate Consulting provided crucial functional support for the Financial Aid team during a complex Banner-to-Workday migration, ensuring loan application processing and compliance continued flawlessly. Previously, we successfully automated their student-advisor assignment process using SQL rules to prevent advisor overloads.',
  },
  {
    institution: 'University of Pennsylvania — Perelman School of Medicine',
    tag: 'Custom Algorithm Development & Data Collection',
    icon: Code2,
    logo: '/colleges logos/3061-upenn-perelman-school-medicine.gif',
    logoSize: 'max-h-20',
    text: 'The University of Pennsylvania\u2019s Perelman School of Medicine partnered with Ultimate Consulting to develop a specialized Python algorithm to capture psychometric behavioral data from auditory stimuli. Our technical team engineered a custom solution that synchronized with complex neurophysiological recording systems, established normalized parameters from patient responses, and successfully set up validation for data collection using Amazon Mechanical Turk.',
  },
  {
    institution: 'Northeast Community College',
    tag: 'Reporting & Analytics',
    icon: BarChart3,
    logo: '/colleges logos/logo_northeast_community_college.jpg',
    text: 'Ultimate Consulting engaged with Northeast CC on multiple fronts, leading a system-wide review and implementation of the Banner Faculty Load and Compensation (FLAC) and EPAF modules to reduce manual HR redundancies. Simultaneously, our technical team upgraded their Cognos reporting server, integrated it with AzureAD, and helped construct data flows for modern Power BI dashboards.',
  },
];

/* ─────────────────────────────────────────────
   SERVICE CARD (accordion)
───────────────────────────────────────────── */
const approachSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We start with your institution\u2019s mission, culture, and operational reality — not a one-size template.',
  },
  {
    number: '02',
    title: 'Align',
    description: 'We co-create a plan that aligns technology decisions with student success and institutional goals.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Our consultants execute with sensitivity to your academic calendar, stakeholders, and compliance needs.',
  },
  {
    number: '04',
    title: 'Enable',
    description: 'We transfer knowledge so your team can independently sustain and evolve the work after we leave.',
  },
];

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full z-20" />

      <span
        className="absolute top-5 right-14 text-[4rem] font-black leading-none tabular-nums select-none pointer-events-none"
        style={{ color: 'rgba(28,130,226,0.06)' }}
        aria-hidden="true"
      >
        {num}
      </span>

      <button
        onClick={() => setOpen(!open)}
        className="relative w-full flex items-start gap-5 p-8 text-left"
      >
        <div
          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: 'rgba(28,130,226,0.1)', color: '#1C82E2' }}
        >
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="mt-2 text-gray-500 text-sm leading-relaxed">{service.summary}</p>
        </div>
        {service.bullets.length > 0 && (
          <ChevronDown
            className={`flex-shrink-0 w-5 h-5 text-gray-400 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      <AnimatePresence initial={false}>
        {open && service.bullets.length > 0 && (
          <motion.div
            key="bullets"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="px-7 pb-7 space-y-4 border-t border-gray-100 pt-5">
              {service.bullets.map((b) => (
                <li key={b.label} className="flex gap-3">
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                    style={{ background: '#1C82E2' }}
                  />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-800">{b.label}: </span>
                    {b.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   CASE STUDY CARD
───────────────────────────────────────────── */
const CaseStudyCard: React.FC<{ study: typeof caseStudies[0]; index: number }> = ({ study, index }) => {
  const Icon = study.icon;
  const [logoError, setLogoError] = useState(false);
  const handleLogoError = useCallback(() => setLogoError(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-700/60 hover:border-blue-500/50 transition-colors duration-300 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      {/* top accent */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(to right, #1C82E2, transparent)' }} />

      {/* Logo panel */}
      <div
        className="flex items-center justify-center px-8"
        style={{ height: '140px', background: (study as { logoBg?: string }).logoBg ?? '#ffffff' }}
      >
        {!logoError ? (
          <img
            src={study.logo}
            alt={`${study.institution} logo`}
            className={`${study.logoSize ?? 'max-h-16'} max-w-full w-auto object-contain`}
            style={(study as { logoBlend?: boolean }).logoBlend ? { mixBlendMode: 'multiply' } : undefined}
            onError={handleLogoError}
          />
        ) : (
          <span className="text-slate-400 text-sm font-medium italic">{study.institution}</span>
        )}
      </div>

      <div className="p-7 flex flex-col flex-1">
        {/* tag */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest mb-4 self-start px-3 py-1 rounded-full"
          style={{ background: 'rgba(28,130,226,0.12)', color: '#1C82E2' }}
        >
          <Icon className="w-3 h-3" />
          {study.tag}
        </span>

        <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
          {study.institution}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">{study.text}</p>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function HigherEducationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-36 pb-32 lg:pb-44 overflow-hidden">
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* breadcrumb */}
          <nav className="flex mb-10 text-xs font-semibold text-white/50 uppercase tracking-widest">
            <span>Our Customers</span>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">Higher Education</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-block text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-5">
              Higher Education IT Consulting
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Trusted by Colleges and Universities Across North America
            </h1>
            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-3xl">
              Ultimate Consulting is a specialized higher-education IT consulting firm dedicated to helping institutions modernize operations, ensure business continuity, and drive student success. We provide the deep technical and functional expertise you need to move forward with confidence.
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

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
              Deep expertise across the full lifecycle of higher education technology — from strategy through implementation, support, and knowledge transfer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-24" style={{ backgroundColor: '#0F172B' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
              A Proven Track Record of Transformation
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
              Institutions across the country trust Ultimate Consulting to lead digital transformation, optimize business processes, and support critical platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.institution} study={study} index={i} />
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
              Our Approach to Every Institution
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl leading-relaxed">
              A proven methodology we bring to every higher education engagement, from initial strategy through knowledge transfer.
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
              Ready to See What's Possible for Your Institution?
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              We're ready when you are.
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
