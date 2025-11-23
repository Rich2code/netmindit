import React from 'react';
import { Cloud, Code, Database, Shield, Lock, Server } from 'lucide-react';
import { Course, SectionId } from '../types';

const courses: Course[] = [
  {
    id: 'azure-cloud',
    title: 'Azure Cloud Architect',
    description: 'Master Microsoft Azure infrastructure, networking, and security. Prepare for AZ-104 and AZ-305 certifications.',
    icon: 'Cloud',
    duration: '12 Weeks',
    level: 'Intermediate',
    tags: ['Cloud', 'Infrastructure']
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    description: 'Build modern web applications using React, Node.js, and TypeScript. From zero to hero with real-world projects.',
    icon: 'Code',
    duration: '16 Weeks',
    level: 'Beginner Friendly',
    tags: ['Coding', 'Web']
  },
  {
    id: 'devops-eng',
    title: 'DevOps Engineering',
    description: 'Learn the CI/CD pipeline, Docker, Kubernetes, Jenkins, and Terraform. Bridge the gap between dev and ops.',
    icon: 'Server',
    duration: '14 Weeks',
    level: 'Advanced',
    tags: ['Automation', 'Ops']
  },
  {
    id: 'cyber-sec',
    title: 'Cyber Security Analyst',
    description: 'Protect enterprise systems. Learn penetration testing, SOC operations, and network defense strategies.',
    icon: 'Shield',
    duration: '12 Weeks',
    level: 'Beginner Friendly',
    tags: ['Security', 'Analyst']
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    description: 'Harness the power of Big Data with Python, SQL, Spark, and Databricks.',
    icon: 'Database',
    duration: '14 Weeks',
    level: 'Intermediate',
    tags: ['Data', 'Python']
  },
  {
    id: 'network-eng',
    title: 'Network Engineering',
    description: 'CCNA and CCNP level training. Master routing, switching, and modern network architecture.',
    icon: 'Lock',
    duration: '10 Weeks',
    level: 'Beginner Friendly',
    tags: ['Networking', 'Cisco']
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Cloud, Code, Server, Shield, Database, Lock
};

const CourseSection: React.FC = () => {
  return (
    <section id={SectionId.COURSES} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Programs</h2>
          <p className="mt-4 text-xl text-slate-600">Industry-designed curricula to get you hired.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = IconMap[course.icon] || Code;
            return (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{course.description}</p>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 font-medium">Duration: {course.duration}</span>
                    <button className="text-brand-600 font-semibold hover:text-brand-700">View Details &rarr;</button>
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