import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, BookOpen, Handshake } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const principles = [
  {
    icon: Shield,
    title: 'Trust & Accountability',
    description: 'We do exactly what we say. Transparent pricing, measurable outcomes, and no surprises.',
  },
  {
    icon: Award,
    title: 'Practical Expertise',
    description: 'Our consultants are former university staff, directors, and leaders who\u2019ve lived your challenges.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Transfer',
    description: 'Every engagement includes mentoring, documentation, and training so your team can own the work.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'Most of our clients come back — or refer others. Our business is built on relationships, not transactions.',
  },
];

const WhoWeArePage = () => {
  const team = [
    {
      name: "Zachary Baitcher",
      role: "Managing Partner",
      image: "https://4ucit.com/wp-content/uploads/2024/10/Untitled-design-71-295x300.png"
    },
    {
      name: "Jan Samuel",
      role: "VP of Business Operations",
      image: "https://4ucit.com/wp-content/uploads/2023/01/Jan-295x300.png"
    },
    {
      name: "Darryl Nash",
      role: "VP of Business Development",
      image: "/Darryl Nash.png"
    }
  ];

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
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white">Who We Are</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-block text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-5">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              A Consulting Partner You Can Trust
            </h1>
            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-3xl">
              We prioritize tangible results over unnecessary complexity, bringing deep, practical knowledge of campus operations to every partnership.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm"
              >
                <span className="w-6 h-6 bg-[#1C82E2] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">Our History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
              Built on Trust and Accountability
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg md:prose-xl max-w-4xl text-gray-600 space-y-8 leading-relaxed"
          >
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-normal border-l-4 border-blue-600 pl-6 m-0 mb-10">
              Ultimate Consulting IT was founded in 2010 on a fundamental belief: higher education institutions deserve a consulting partner they can genuinely trust—both in the caliber of the work and in how business is conducted.
            </p>
            
            <p>
              Founded by Randy Baitcher, our company took a refreshingly different approach from day one: focus on doing exceptional work, charge fair rates, and build long-term relationships grounded in honesty and accountability. Our early growth was fueled entirely by reputation, as colleges and universities quickly recognized the value of a partner who prioritizes tangible results over unnecessary complexity.
            </p>
            
            <p>
              Our team features highly experienced Subject Matter Experts who bring decades of higher education expertise, having served not only as senior functional and technical consultants but also as former university employees, directors, and institutional leaders. Because our consultants have navigated the same enterprise systems and departmental challenges you face, they bring deep, practical knowledge of campus operations that guarantees a seamless, highly effective partnership.
            </p>
            
            <p>
              Since our founding, Ultimate Consulting IT has proudly supported more than 220 higher education institutions, expanding our capabilities and reach across North America while steadfastly maintaining the core principles we were built upon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Principles Section ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Principles That Guide Every Engagement
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl leading-relaxed">
              The values we were founded on in 2010 still guide how we work with every institution today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full" />
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(28,130,226,0.1)', color: '#1C82E2' }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
              Meet Our Team
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
              Our team features highly experienced Subject Matter Experts who bring decades of higher education expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl">
            {team.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="mx-auto w-48 h-48 flex items-center justify-center p-2 rounded-full mb-6 bg-white shadow-sm border border-gray-100 relative overflow-hidden group-hover:shadow-md transition-shadow">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full mix-blend-luminosity grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
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
            backgroundImage: 'radial-gradient(circle, #1C82E2 1px, transparent 1px)',
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
};

export default WhoWeArePage;
