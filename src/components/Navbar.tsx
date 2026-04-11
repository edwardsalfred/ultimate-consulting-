import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Cpu, Rocket, Box, GraduationCap } from 'lucide-react';
import MegaMenu, { MegaMenuItem } from './ui/mega-menu';

export const NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: "Our Services",
    link: "/#services"
  },
  {
    id: 3,
    label: "Our Customers",
    subMenus: [
      {
        title: "Industries",
        items: [
          { label: "Higher Education", description: "Specialized solutions for institutions", icon: GraduationCap, link: "/higher-education" },
        ],
      },
    ],
  },
  { id: 4, label: "Who We Are", link: "/who-we-are" },
  { id: 5, label: "Ultimate Insights", link: "/insights" },
];

const MobileNavItem: React.FC<{ item: MegaMenuItem }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubmenus = item.subMenus && item.subMenus.length > 0;

  return (
    <div className="border-b border-gray-50">
      <div
        onClick={() => hasSubmenus && setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-3 py-3 text-lg font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md cursor-pointer"
      >
        {item.link && !hasSubmenus ? (
          <a href={item.link} className="w-full">{item.label}</a>
        ) : (
          <span className="w-full">{item.label}</span>
        )}
        {hasSubmenus && (
          <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        )}
      </div>
      {hasSubmenus && isExpanded && (
        <div className="bg-gray-50 px-4 py-4 space-y-6 rounded-b-md">
          {item.subMenus!.map((subMenu, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">{subMenu.title}</h4>
              <div className="space-y-4">
                {subMenu.items.map((subItem: any, i: number) => (
                  <a key={i} href={subItem.link || "#"} className="flex flex-row items-start text-gray-800 hover:text-primary">
                    <span className="mt-1 mr-3 flex-shrink-0 text-primary">
                      {subItem.icon && <subItem.icon className="w-5 h-5" />}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-medium text-base leading-tight">{subItem.label}</span>
                      {subItem.description && <span className="text-sm text-gray-500 mt-1">{subItem.description}</span>}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`} style={{ background: scrolled ? 'rgba(10, 20, 45, 0.97)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://4ucit.com/wp-content/uploads/2022/11/NAV-Logo-WHITE2-768x156.png"
                alt="Ultimate Consulting"
                className="h-10 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <MegaMenu items={NAV_ITEMS} />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center">
              Work With Us <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 max-h-[75vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.id} item={item} />
            ))}
            <a href="/contact" className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium mt-6">
              Work With Us
            </a>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
