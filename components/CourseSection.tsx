import React from 'react';
import { Cloud, Code, Database, Shield, Lock, Server, TrendingUp } from 'lucide-react';
import { Course, SectionId } from '../types';

const courses: Course[] = [
  {
    id: 'azure-cloud',
    title: 'Azure Cloud Architect',
    description: 'Master Microsoft Azure infrastructure, networking, and security. Prepare for AZ-104 and AZ-305 certifications.',
    icon: 'Cloud',
    duration: '12 Weeks',
    level: 'Intermediate',
    tags: ['Cloud', 'Infrastructure'],
    wage: '$115k - $160k'
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    description: 'Build modern web applications using React, Node.js, and TypeScript. From zero to hero with real-world projects.',
    icon: 'Code',
    duration: '16 Weeks',
    level: 'Beginner Friendly',
    tags: ['Coding', 'Web'],
    wage: '$95k - $145k'
  },
  {
    id: 'devops-eng',
    title: 'DevOps Engineering',
    description: 'Learn the CI/CD pipeline, Docker, Kubernetes, Jenkins, and Terraform. Bridge the gap between dev and ops.',
    icon: 'Server',
    duration: '14 Weeks',
    level: 'Advanced',
    tags: ['Automation', 'Ops'],
    wage: '$120k - $170k'
  },
  {
    id: 'cyber-sec',
    title: 'Cyber Security Analyst',
    description: 'Protect enterprise systems. Learn penetration testing, SOC operations, and network defense strategies.',
    icon: 'Shield',
    duration: '12 Weeks',
    level: 'Beginner Friendly',
    tags: ['Security', 'Analyst'],
    wage: '$100k - $150k'
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    description: 'Harness the power of Big Data with Python, SQL, Spark, and Databricks.',
    icon: 'Database',
    duration: '14 Weeks',
    level: 'Intermediate',
    tags: ['Data', 'Python'],
    wage: '$110k - $165k'
  },
  {
    id: 'network-eng',
    title: 'Network Engineering',
    description: 'CCNA and CCNP level training. Master routing, switching, and modern network architecture.',
    icon: 'Lock',
    duration: '10 Weeks',
    level: 'Beginner Friendly',
    tags: ['Networking', 'Cisco'],
    wage: '$85k - $130k'
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Cloud, Code, Server, Shield, Database, Lock
};

const CourseSection: React.FC = () => {
  return (
    <section id={SectionId.COURSES} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Featured Programs</h2>
          <p className="mt-6 text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Industry-designed curricula with transparent earning potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = IconMap[course.icon] || Code;
            return (
              <div key={course.id} className="group relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                {/* Glass sheen effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/80 rounded-2xl shadow-sm text-slate-900 ring-1 ring-slate-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/5 text-slate-600 backdrop-blur-sm">
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{course.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed font-normal">{course.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-200/60 space-y-4">
                    <div className="flex items-center text-emerald-600 bg-emerald-50/50 px-4 py-2 rounded-xl backdrop-blur-sm border border-emerald-100/50">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <span className="text-sm font-semibold">Avg. Wage: {course.wage}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 font-medium">{course.duration}</span>
                      <button className="text-slate-900 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                        View Details 
                        <span className="ml-1">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;