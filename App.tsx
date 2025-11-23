import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
import JobGuarantee from './components/JobGuarantee';
import AICareerAdvisor from './components/AICareerAdvisor';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  const scrollToSection = (id: SectionId) => {
    if (id === SectionId.ADVISOR) {
      setIsAdvisorOpen(true);
      return;
    }
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50">
       {/* Global background mesh for liquid glass effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full bg-blue-100/40 blur-[100px] opacity-60 mix-blend-multiply animate-pulse" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-cyan-100/40 blur-[100px] opacity-60 mix-blend-multiply animate-pulse" style={{animationDuration: '15s', animationDelay: '1s'}}></div>
        <div className="absolute top-[40%] left-[30%] w-[600px] h-[600px] rounded-full bg-purple-100/30 blur-[100px] opacity-40 mix-blend-multiply animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        <main className="flex-grow">
          <Hero scrollToSection={scrollToSection} />
          <CourseSection />
          <JobGuarantee />
          {/* Replaced in-flow Advisor with global widget */}
          <ContactForm />
        </main>
        <Footer />
      </div>

      <AICareerAdvisor 
        isOpen={isAdvisorOpen} 
        onClose={() => setIsAdvisorOpen(false)} 
        onToggle={() => setIsAdvisorOpen(!isAdvisorOpen)}
      />
    </div>
  );
};

export default App;