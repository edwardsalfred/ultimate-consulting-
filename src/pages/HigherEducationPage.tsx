import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, GraduationCap, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function HigherEducationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-40 lg:pb-56 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-12 text-xs font-medium text-white/60 uppercase tracking-widest">
            <a href="/" className="hover:text-white">Our Customers</a>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Higher Education</span>
          </nav>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
              Higher Education
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 tracking-tight leading-tight">
              Higher Education IT Consulting
            </h1>
            <h2 className="text-3xl md:text-4xl text-white mb-8 font-light italic">
              Trusted by Colleges and Universities Across North America
            </h2>
            <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-3xl">
              Ultimate Consulting is a specialized higher-education IT consulting firm dedicated to helping institutions modernize operations, ensure business continuity, and drive student success. Whether you are navigating a complex ERP migration, bridging a critical staffing gap, or building custom administrative applications, we provide the deep technical and functional expertise you need. We empower campuses to modernize their core environments, eliminate manual workflows, and deliver a seamless technological experience.
            </p>
            <a href="/#contact" className="inline-flex items-center bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
              Let's Connect
            </a>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Focus Areas</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizing student information systems to improve engagement, enrollment, and long-term student outcomes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Institutional Effectiveness</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlining administrative processes to reduce manual effort and improve collaboration across campus.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modernization</h3>
              <p className="text-gray-600 leading-relaxed">
                Leading transformation initiatives with confidence, ensuring your technology supports your mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to move forward?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Let's talk about your institution's specific goals and how our expertise can help.
          </p>
          <a href="/#contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
