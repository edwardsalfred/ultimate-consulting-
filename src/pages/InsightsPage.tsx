import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Placeholder blog data to display
const blogPosts = [
  {
    id: 1,
    title: "Navigating the Shift: Upgrading from Banner 8 to Banner 9",
    category: "ERP Modernization",
    author: "Zachary Baitcher",
    date: "October 12, 2025",
    excerpt: "Higher education institutions are facing unprecedented pressure to modernize. We explore the critical steps to ensure a seamless upgrade to Ellucian Banner.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "How to Build a Resilient IT Infrastructure for Modern Campuses",
    category: "Strategic Technology",
    author: "Jan Samuel",
    date: "September 28, 2025",
    excerpt: "Data security and system reliability are paramount. Dive into our ultimate framework for establishing business continuity in higher education IT.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Maximizing the Value of Workday Student Integrations",
    category: "System Integration",
    author: "Darryl Nash",
    date: "September 15, 2025",
    excerpt: "Transitioning to Workday? Here is how to construct fluid data exchanges that empower your faculty and student success teams.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  }
];

export default function InsightsPage() {
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
            <span className="text-white">Ultimate Insights</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-block text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-5">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Ultimate Insights
            </h1>
            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-3xl">
              Stay ahead of the curve. Dive into expert perspectives, strategic frameworks, and practical guides tailored specifically for higher education operations and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full h-56 overflow-hidden bg-gray-100 relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                    {post.category}
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <div className="flex-1 p-8 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <Link to={post.id === 1 ? "/insights/upgrading-from-banner-8-to-banner-9" : `/insights/coming-soon-${post.id}`} className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                      Read Article
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center">
             <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
               Load More Insights
             </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
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
}
