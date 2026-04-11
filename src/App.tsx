import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Search, Rocket, Box, Cpu } from 'lucide-react';
import { motion, animate, useInView } from 'motion/react';
import { Routes, Route } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import WhoWeArePage from './pages/WhoWeArePage';
import HigherEducationPage from './pages/HigherEducationPage';
import InsightsPage from './pages/InsightsPage';
import BlogPostPage from './pages/BlogPostPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block drop-shadow-sm">
              Modernize Higher Education with Confidence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8 max-w-4xl">
              Your Technology Should Support Student Success And Not Create More Complexity.
            </h1>
            <p className="text-base text-white/80 mb-10 leading-relaxed max-w-2xl">
              Ultimate Consulting helps colleges and universities modernize enterprise systems, improve business processes, and lead transformation initiatives with confidence. With deep expertise in Ellucian Banner, Ellucian Colleague, and Workday, we support higher education institutions in navigating change, strengthening operations, and achieving lasting results.
            </p>
            <a href="/contact" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors text-lg shadow-lg">
              Work With Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Partnerships = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mb-6 lg:mb-0">
            Higher Education Expertise Built Around Your Core Systems
          </h2>
          <a href="/contact" className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
            Work With Us <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PartnerCard 
            logo="/ellucian.png"
            description="We help institutions implement, optimize, and support Ellucian Banner and Colleague across student, financial aid, finance, HR, payroll, and related administrative functions. Whether your institution is addressing daily operational challenges, planning for modernization, or improving service delivery, our team brings the functional and technical experience to help you move forward."
            linkText="Explore Ellucian Services"
          />
          <PartnerCard 
            logo="https://avaap.com/wp-content/uploads/2025/10/workday.png"
            description="Ultimate Consulting supports colleges and universities with Workday initiatives across human capital management, finance, student operations, reporting, and organizational alignment. We help institutions improve adoption, streamline operations, and maximize the value of their technology investments."
            linkText="Explore Workday Services"
          />
          <PartnerCard 
            logo="/oracle.png"
            description="Ultimate Consulting offers comprehensive Oracle PeopleSoft services, helping organizations optimize, upgrade, and maintain their enterprise applications."
            linkText="Explore PeopleSoft Services"
            logoClassName="bg-white p-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const PartnerCard = ({ logo, description, linkText, logoClassName }: { logo: string, description: string, linkText: string, logoClassName?: string }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
    >
      <div className="h-16 mb-8 flex items-center">
        {!imgError ? (
          <img 
            src={logo} 
            alt="Partner Logo" 
            className={`max-h-full max-w-[200px] object-contain ${logoClassName || ''}`} 
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-2xl font-bold text-gray-800">{linkText.replace('Explore ', '').replace(' Services', '')}</div>
        )}
      </div>
      <p className="text-gray-600 mb-8 flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div id="services" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
            Services Designed for Higher Education
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard 
            title="Enterprise System Strategy and Support"
            description="We provide implementation support, optimization, advisory services, and operational guidance for the core systems that power your institution."
          />
          <ServiceCard 
            title="Process Improvement and Operational Efficiency"
            description="We help colleges and universities streamline workflows, reduce manual effort, improve collaboration across departments, and better align systems with institutional goals."
          />
          <ServiceCard 
            title="Change Management, Training, and Functional Leadership"
            description="We prepare teams for change through strategic planning, stakeholder engagement, communication, training, and ongoing functional support that drives adoption and long-term success."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description }: { title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative rounded-2xl overflow-hidden shadow-lg h-80 md:h-96 flex flex-col justify-start bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
    <div className="relative z-10 p-8 flex flex-col h-full">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-200 mb-6 leading-relaxed line-clamp-4">{description}</p>
      <a href="#" className="inline-flex items-center text-white font-medium mt-auto group-hover:translate-x-1 transition-transform">
        View Capabilities <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

const Stats = () => {
  return (
    <div className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">A team you can trust</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-700">
          <StatItem number="200+" title="Deep Institutional Experience" description="Our consultants understand the operational realities of higher education, including student services, enrollment, financial aid, finance, HR, payroll, and compliance." />
          <StatItem number="50+" title="Functional and Technical Strength" description="We combine strategic insight, functional expertise, and technical execution to help institutions solve complex challenges and move initiatives forward." />
          <StatItem number="97.8%" title="Sustainable Results" description="We focus on practical solutions that strengthen operations, improve the user experience, and create value beyond implementation." />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ number, title, description }: { number: string, title: string, description: string }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (inView && nodeRef.current) {
      const match = number.match(/([\d.]+)(.*)/);
      if (match) {
        const [, numStr, suffix] = match;
        const targetValue = parseFloat(numStr);
        const isFloat = numStr.includes('.');
        
        const controls = animate(0, targetValue, {
          duration: 2.5,
          ease: "easeOut",
          onUpdate(value) {
            if (nodeRef.current) {
              const displayValue = isFloat ? value.toFixed(1) : Math.round(value);
              nodeRef.current.textContent = displayValue + suffix;
            }
          }
        });
        return () => controls.stop();
      }
    }
  }, [number, inView]);

  return (
    <div className="text-center px-4 pt-8 md:pt-0">
      <div ref={nodeRef} className="text-5xl md:text-6xl font-bold text-primary mb-4">
        0{number.replace(/[\d.]+/, '')}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Move Forward?
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Let’s talk about your institution’s goals and how Ultimate Consulting can help you modernize with confidence.
        </p>
        <a href="/contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors text-lg shadow-lg hover:shadow-xl">
          Contact Us <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};



const LogoCarousel = () => {
  const logos = [
    "https://4ucit.com/wp-content/uploads/2022/11/MiamiUniversity.png",
    "https://4ucit.com/wp-content/uploads/2022/11/UNCG.png",
    "https://4ucit.com/wp-content/uploads/2022/11/Northeast.png",
    "https://4ucit.com/wp-content/uploads/2022/11/UNCcharlotte.png",
    "https://4ucit.com/wp-content/uploads/2022/11/SFCC.png",
    "https://4ucit.com/wp-content/uploads/2022/11/California.png",
    "https://4ucit.com/wp-content/uploads/2022/11/PENN.png",
    "https://4ucit.com/wp-content/uploads/2023/01/west-indies.png",
    "https://4ucit.com/wp-content/uploads/2022/11/Xavier.png",
    "https://4ucit.com/wp-content/uploads/2022/11/ACU.png",
    "https://4ucit.com/wp-content/uploads/2023/01/doane.png",
    "https://4ucit.com/wp-content/uploads/2022/11/Clemson.png",
    "https://4ucit.com/wp-content/uploads/2022/11/Regents.png",
    "https://4ucit.com/wp-content/uploads/2022/11/UNCpembroke.png",
    "/colleges logos/northeastmcc.png",
    "/colleges logos/PHSC-LOGO-Stacked-Black-Gold.png",
    "/colleges logos/The_University_of_California_1868_UCSC.svg.png",
    "/colleges logos/universityofvirginislands.png",
    "/colleges logos/boardofregents.png"
  ];

  return (
    <div className="py-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Some of our Customers</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap w-fit"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-12 transition-all h-16 flex items-center">
              <img src={logo} alt="Institution Logo" className="h-full object-contain" referrerPolicy="no-referrer" onError={e => { e.currentTarget.style.display = 'none'; }} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/who-we-are" element={<WhoWeArePage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/insights/:slug" element={<BlogPostPage />} />
      <Route path="/higher-education" element={<HigherEducationPage />} />
      <Route path="/*" element={
        <div className="min-h-screen bg-slate-50 font-sans">
          <Navbar />
          <Hero />
          <LogoCarousel />
          <Partnerships />
          <Services />
          <Stats />
          <CTA />
          <Footer />
        </div>
      } />
    </Routes>
  );
}
