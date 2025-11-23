import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = [
    "Cloud Computing",
    "DevOps Engineering",
    "Cyber Security",
    "Full Stack Coding",
    "Data Engineering"
  ];

  const companyDomains = [
    "microsoft.com", "google.com", "amazon.com", "cisco.com", "ibm.com", "oracle.com", "accenture.com", "apple.com", "meta.com", "netflix.com"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id={SectionId.HOME} className="pt-24 pb-0 md:pt-32 overflow-hidden relative bg-slate-50 flex flex-col justify-between min-h-[90vh]">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-text-change {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      
      {/* Minimized Background Elements - Lighter and more subtle */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl opacity-40"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-50/50 blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            {/* Minimal badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-100 text-slate-600 text-sm font-medium shadow-sm mx-auto lg:mx-0">
              <ShieldCheck className="w-4 h-4 mr-2 text-brand-600" />
              Guaranteed Job Placement Program
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Start your career in{' '}
              <span 
                key={textIndex} 
                className="text-brand-600 inline-block animate-text-change"
              >
                {rotatingTexts[textIndex]}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Premium cloud & coding training designed for modern careers. We invest in your certification and placement—you only succeed when we succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection(SectionId.COURSES)}
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all hover:scale-105 shadow-lg shadow-slate-900/20"
              >
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                onClick={() => scrollToSection(SectionId.ADVISOR)}
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-medium rounded-full text-slate-600 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                Ask AI Advisor
              </button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
              <img 
                src="https://picsum.photos/800/800?random=1" 
                alt="Minimalist coding setup" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Minimal Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl border border-slate-100 z-10">
               <div className="text-center">
                  <p className="text-4xl font-bold text-slate-900">100%</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-2">Hiring Rate</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Logo Section */}
      <div className="w-full border-t border-slate-100 bg-white/60 backdrop-blur-sm py-10 overflow-hidden relative mt-auto">
         <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-50 via-transparent to-slate-50"></div>
         <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by graduates now working at</p>
         
         <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex w-1/2 justify-around items-center px-4">
               {companyDomains.map((domain, i) => (
                  <img 
                    key={i} 
                    src={`https://logo.clearbit.com/${domain}`} 
                    alt={domain.split('.')[0]}
                    className="h-8 md:h-12 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-8 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
               ))}
            </div>
            {/* Second Set (Duplicate for loop) */}
             <div className="flex w-1/2 justify-around items-center px-4">
               {companyDomains.map((domain, i) => (
                  <img 
                    key={`dup-${i}`} 
                    src={`https://logo.clearbit.com/${domain}`} 
                    alt={domain.split('.')[0]}
                    className="h-8 md:h-12 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-8 object-contain"
                     onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
               ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;