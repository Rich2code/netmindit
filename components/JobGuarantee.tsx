import React from 'react';
import { SectionId } from '../types';
import { BookOpen, Award, Briefcase, Trophy } from 'lucide-react';

const JobGuarantee: React.FC = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Intensive Training",
      description: "Hands-on labs and live lectures from industry experts."
    },
    {
      icon: Award,
      title: "Certification",
      description: "We pay for your certification exams (Azure, AWS, Cisco)."
    },
    {
      icon: Briefcase,
      title: "Internship",
      description: "Work on real client projects to build your portfolio."
    },
    {
      icon: Trophy,
      title: "Placement",
      description: "Dedicated HR team arranges interviews until you are hired."
    }
  ];

  return (
    <section id={SectionId.GUARANTEE} className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The NetMind Guarantee</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We are so confident in our training methodology that we offer a 100% Job Guarantee. 
              If you don't land a job within 6 months of graduation, we refund your tuition. 
              No hidden clauses, just results.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-600 rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Recent Placements</h3>
              <div className="space-y-4">
                {[
                    { name: "Sarah J.", role: "Azure Admin", company: "Global FinTech", salary: "$95k" },
                    { name: "Michael R.", role: "DevOps Engineer", company: "Retail Giant", salary: "$115k" },
                    { name: "David L.", role: "Full Stack Dev", company: "StartUp Inc", salary: "$88k" },
                    { name: "Emily W.", role: "Cyber Analyst", company: "Bank Corp", salary: "$92k" },
                ].map((placement, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                        <div>
                            <p className="font-bold">{placement.name}</p>
                            <p className="text-sm text-slate-400">{placement.role} @ {placement.company}</p>
                        </div>
                        <span className="text-green-400 font-mono font-bold">{placement.salary}</span>
                    </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="text-brand-400 font-medium hover:text-brand-300 text-sm">View Success Stories &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobGuarantee;