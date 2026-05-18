import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, User } from 'lucide-react';
import profile from '../data/profile.json';

const About = () => {
  const stats = [
    { label: 'Total Repos', value: profile.total_repos, icon: <Database className="text-blue-400" aria-hidden="true" /> },
    { label: 'Top Languages', value: profile.top_languages.length, icon: <Code className="text-indigo-400" aria-hidden="true" /> },
    { label: 'GitHub User', value: 'VWINDQ', icon: <User className="text-emerald-400" aria-hidden="true" /> },
  ];

  return (
    <section id="about" className="section-padding bg-slate-900/50" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          id="about-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center"
        >
          <span className="text-blue-500 mr-4" aria-hidden="true">01.</span> About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="text-lg text-slate-400 space-y-6 leading-relaxed">
              <p>
                {profile.bio || "A developer passionate about clean code, robotics, and open-source collaboration. I specialize in building intelligent systems using Python, ROS, and C++ while exploring the latest in frontend technologies."}
              </p>
              <p>
                My journey in tech is driven by curiosity and a desire to solve real-world problems. Whether it's optimizing pathfinding algorithms or crafting seamless user interfaces, I focus on performance and usability.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 list-none p-0">
              {stats.map((stat, i) => (
                <motion.li
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="p-4 rounded-2xl glass-morphism border border-white/5"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{stat.label}</div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group mx-auto lg:ml-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur-xl" aria-hidden="true" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src={profile.avatar_url} 
                alt={`Portrait of ${profile.username}`} 
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
