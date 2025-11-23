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

  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <Hero scrollToSection={scrollToSection} />
        <CourseSection />
        <JobGuarantee />
        <AICareerAdvisor />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;