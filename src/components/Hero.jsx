import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code } from 'lucide-react';
import profile from '../data/profile.json';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Robotics & AI Developer", "Open Source Contributor", "ROS Engineer", "Full Stack Explorer"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]); // Added typingSpeed to deps for consistency

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background - Using transform and opacity only for performance */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ willChange: 'transform, opacity' }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">{profile.username}</span>
        </h1>
        
        <div className="h-12 text-xl md:text-3xl text-slate-400 font-medium font-mono" aria-label={`I am a ${roles[roleIndex]}`}>
          {currentText}<span className="animate-pulse border-r-4 border-blue-400 ml-1" aria-hidden="true" />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <button 
            onClick={() => {
              const el = document.getElementById('projects');
              window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            View Projects
          </button>
          
          <a 
            href={profile.github_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="px-8 py-4 glass-morphism text-slate-200 rounded-full font-bold flex items-center space-x-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <Code size={20} />
            <span>GitHub Profile</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden md:block"
        aria-hidden="true"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
