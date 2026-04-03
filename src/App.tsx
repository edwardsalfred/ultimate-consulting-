import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Search, Linkedin, Cpu, Globe, Eye, Shield, Rocket, Box, Palette, BookOpen, FileText, Newspaper } from 'lucide-react';
import { motion } from 'motion/react';
import MegaMenu, { MegaMenuItem } from './components/ui/mega-menu';

const NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: "Our Services",
    subMenus: [
      {
        title: "Consulting",
        items: [
          {
            label: "Functional Consultant",
            description: "Align technology with business strategy",
            icon: Cpu,
          },
          {
            label: "Technical Consultant",
            description: "Unlock the power of your data",
            icon: Search,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Our Partners",
    subMenus: [
      {
        title: "Ecosystem",
        items: [
          {
            label: "Ellucian",
            description: "Higher Education Platform",
            icon: Box,
          },
          {
            label: "Oracle PeopleSoft",
            description: "Enterprise Solutions",
            icon: Rocket,
          },
        ],
      },
    ],
  },
  { id: 3, label: "Our Customers", link: "#" },
  { id: 4, label: "Who We Are", link: "#" },
  { id: 5, label: "Ultimate Insights", link: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img 
              src="https://4ucit.com/wp-content/uploads/2022/11/NAV-Logo-WHITE2-768x156.png" 
              alt="Ultimate Consulting" 
              className={`h-10 transition-all duration-300 ${scrolled ? 'invert brightness-0' : ''}`}
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className={`hidden md:flex items-center ${scrolled ? 'text-gray-800' : 'text-white'}`}>
            <MegaMenu items={NAV_ITEMS} className={scrolled ? '[&_button]:text-gray-600 hover:[&_button]:text-gray-900' : ''} />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <Search className="w-5 h-5" />
            </button>
            <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center">
              Work With Us <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-800' : 'text-white'}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <MobileNavItem title="Our Services" />
            <MobileNavItem title="Our Partners" />
            <MobileNavItem title="Our Customers" />
            <MobileNavItem title="Who We Are" />
            <MobileNavItem title="Ultimate Insights" />
            <a href="#contact" className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium mt-6">
              Work With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const MobileNavItem = ({ title }: { title: string }) => (
  <a href="#" className="block px-3 py-3 text-lg font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md border-b border-gray-50">
    {title}
  </a>
);

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-primary to-secondary pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white/90 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Modernize with Confidence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your technology should accelerate your mission, not complicate it.
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Ultimate Consulting partners with organizations to modernize technology, transform business processes, and deliver solutions that drive real-world impact. As a full-service boutique consulting firm, we bring deep industry expertise and a future-focused approach to lead transformation that lasts.
            </p>
            <a href="#contact" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors text-lg shadow-lg">
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
            Strategic Partnerships That Power Your Success
          </h2>
          <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
            Work With Us <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PartnerCard 
            logo="/ellucian.png"
            description="Ultimate Consulting partners with Ellucian to deliver modern, cloud-ready higher education solutions that drive institutional success and student engagement."
            linkText="Explore Ellucian Services"
          />
          <PartnerCard 
            logo="https://avaap.com/wp-content/uploads/2025/10/workday.png"
            description="Ultimate Consulting is a certified Workday partner with expertise across HCM, Financials, and Student implementations, as well as Workday Extend."
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
      <a href="#" className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors mt-auto">
        {linkText} <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
            Services Tailored to Your Business, Your Challenges, Your Goals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard 
            title="Functional Consultant"
            description="We implement and optimize enterprise platforms, such as Workday, to align technology with business strategy and drive operational efficiency."
            image="https://avaap.com/wp-content/uploads/2025/10/inline-1.jpg"
          />
          <ServiceCard 
            title="Technical Consultant"
            description="We help organizations unlock the power of their data with scalable cloud solutions and advanced analytics for smarter decision-making."
            image="https://avaap.com/wp-content/uploads/2025/10/inline-1.jpg"
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, image }: { title: string, description: string, image: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative rounded-2xl overflow-hidden shadow-lg h-96 flex flex-col justify-start"
  >
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-transparent"></div>
    </div>
    <div className="relative p-8">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-200 mb-6 line-clamp-3">{description}</p>
      <a href="#" className="inline-flex items-center text-white font-medium group-hover:text-primary transition-colors">
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
          <StatItem number="200+" title="Customer Transformations" description="Our team has experience across industries and have helped our customers achieve their goals." />
          <StatItem number="375+" title="Dedicated Professionals" description="Our team brings deep industry knowledge to every engagement." />
          <StatItem number="97.8%" title="Client Satisfaction" description="Proven success, trusted by those we serve." />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="text-center px-4 pt-8 md:pt-0">
    <div className="text-5xl md:text-6xl font-bold text-primary mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const CTA = () => {
  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Organization?
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Let’s talk about your goals and how Ultimate Consulting can help.
        </p>
        <a href="#contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors text-lg shadow-lg hover:shadow-xl">
          Contact Us <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <img 
              src="https://4ucit.com/wp-content/uploads/2022/11/NAV-Logo-WHITE2-768x156.png" 
              alt="Ultimate Consulting" 
              className="h-12 mb-8"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-6">
              Be the first to learn about new services and tools to help your organization thrive.
            </p>
            <form className="space-y-4">
              <input type="text" placeholder="First Name" className="w-full bg-slate-800 border border-slate-700 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary" />
              <input type="text" placeholder="Last Name" className="w-full bg-slate-800 border border-slate-700 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary" />
              <input type="email" placeholder="Email Address" className="w-full bg-slate-800 border border-slate-700 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary" />
              <button type="button" className="w-full bg-white text-slate-900 rounded-full px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
                Submit
              </button>
            </form>
          </div>
          
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <FooterLink text="Our Services" />
            <FooterLink text="Our Partners" />
            <FooterLink text="Our Customers" />
            <FooterLink text="Who We Are" />
            <FooterLink text="Ultimate Insights" />
          </div>

          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <FooterLink text="Careers & Culture" />
            <FooterLink text="Resources" />
            <FooterLink text="Events" />
            <FooterLink text="News" />
            
            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-gray-400 mb-4">
                PO Box 38,<br />
                Lebanon, GA, 30146<br />
                <a href="tel:8443448248" className="hover:text-primary">(844) 344-8248</a>
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/4ucit/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col space-y-6 text-sm text-gray-500">
          <div className="flex justify-center md:justify-start">
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <p className="text-xs leading-relaxed text-gray-500 text-center md:text-left">
            COPYRIGHT © 2026 ULTIMATE CONSULTING LLC. ALL RIGHTS RESERVED - REFERENCES TO ELLUCIAN, SCT, SUNGARD, DATATEL AND BANNER ARE FEDERAL REGISTERED TRADEMARKS OF ELLUCIAN / SUNGARD DATA SYSTEMS, INC. ORACLE AND PEOPLESOFT ARE REGISTERED TRADEMARKS OF ORACLE AND/OR ITS AFFILIATES. OTHER NAMES MAY BE TRADEMARKS OF THEIR RESPECTIVE OWNERS. ULTIMATE CONSULTING IT LLC IS NOT AFFILIATED WITH ELLUCIAN, SUNGARD DATA SYSTEMS, INC., ORACLE, NOR PEOPLESOFT.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text }: { text: string }) => (
  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
    {text}
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Partnerships />
      <Services />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
