import React from 'react';
import { Terminal, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
               <div className="bg-brand-600 p-1.5 rounded-lg mr-2">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
              <span className="font-bold text-xl text-white">NetMind<span className="text-brand-500">IT</span></span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Empowering the next generation of IT professionals with practical skills, industry certification, and guaranteed job placement.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400">Azure Cloud Architect</a></li>
              <li><a href="#" className="hover:text-brand-400">DevOps Engineering</a></li>
              <li><a href="#" className="hover:text-brand-400">Full Stack Development</a></li>
              <li><a href="#" className="hover:text-brand-400">Cyber Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400">Success Stories</a></li>
              <li><a href="#" className="hover:text-brand-400">Blog</a></li>
              <li><a href="#" className="hover:text-brand-400">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500">© 2024 NetMind IT Academy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook className="w-5 h-5 hover:text-brand-400 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-brand-400 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-brand-400 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-brand-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;