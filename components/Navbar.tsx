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
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick(SectionId.HOME)}>
            <div className="bg-brand-600 p-2 rounded-lg mr-2">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">NetMind<span className="text-brand-600">IT</span></span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick(SectionId.CONTACT)}
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Apply Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              >
                {item.label}
              </button>
            ))}
             <button
                onClick={() => handleNavClick(SectionId.CONTACT)}
                className="block w-full text-left px-3 py-2 mt-4 text-base font-medium text-brand-600 bg-brand-50 rounded-md"
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