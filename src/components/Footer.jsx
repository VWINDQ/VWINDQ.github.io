import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Code } from 'lucide-react';
import profile from '../data/profile.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-slate-400 font-medium">
            Built by <span className="text-white font-bold">{profile.username}</span> · {currentYear}
          </p>
          <p className="text-slate-600 text-xs mt-1">
            Inspired by minimalism & high-performance robotics.
          </p>
        </div>

        <div className="flex items-center space-x-8">
          <a 
            href={profile.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 text-sm font-medium"
          >
            <Code size={18} />
            <span>Code</span>
          </a>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 bg-slate-800 text-blue-400 rounded-xl hover:bg-slate-700 transition-colors shadow-lg shadow-black/20"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
