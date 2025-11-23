import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Start Your Journey</h2>
          <p className="mt-4 text-slate-600">Apply now to secure your spot in the next cohort.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" id="firstName" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 border p-2 bg-white" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" id="lastName" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 border p-2 bg-white" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 border p-2 bg-white" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-slate-700">Interested Course</label>
                <select id="course" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 border p-2 bg-white">
                  <option>Azure Cloud Architect</option>
                  <option>Full Stack Developer</option>
                  <option>DevOps Engineering</option>
                  <option>Cyber Security</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message (Optional)</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 border p-2 bg-white"></textarea>
              </div>

              <button type="button" className="w-full bg-brand-600 text-white py-3 px-4 rounded-lg hover:bg-brand-700 transition-colors font-medium">
                Submit Application
              </button>
            </form>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-slate-600">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center mr-4 text-brand-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center mr-4 text-brand-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>admissions@netmind-it.com</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center mr-4 text-brand-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>123 Tech Park Blvd, Silicon Valley, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2">Next Cohort Starts Soon!</h4>
              <p className="text-slate-300 text-sm mb-4">
                Don't miss the deadline for our upcoming Azure and DevOps tracks. Seats are limited to ensure quality mentorship.
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-brand-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-right mt-1 text-brand-300">85% Full</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;