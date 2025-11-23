import React, { useState } from 'react';
import { Menu, X, Terminal, GraduationCap } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.COURSES, label: 'Courses' },
    { id: SectionId.GUARANTEE, label: 'Job Guarantee' },
    { id: SectionId.ADVISOR, label: 'AI Advisor' },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-40 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick(SectionId.HOME)}>
            <div className="bg-slate-900 p-2.5 rounded-xl mr-3 shadow-lg group-hover:scale-105 transition-transform">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">NetMind<span className="text-brand-600">IT</span></span>
          </div>

          <div className="hidden md:flex space-x-1 items-center bg-slate-100/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
             <button 
              onClick={() => handleNavClick(SectionId.CONTACT)}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5"
            >
              Apply Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none bg-slate-100 p-2 rounded-lg">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
             <button
                onClick={() => handleNavClick(SectionId.CONTACT)}
                className="block w-full text-left px-4 py-3 mt-4 text-base font-medium text-white bg-slate-900 rounded-xl shadow-md"
              >
                Apply Now
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;