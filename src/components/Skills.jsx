import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import ErrorBoundary from './ErrorBoundary';

const Skills = () => {
  const { groupedSkills, sortedSkills, maxCount } = useMemo(() => {
    const skillCounts = projectsData.flatMap(p => p.tech_stack).reduce((acc, skill) => {
      acc[skill] = (acc[skill] || 0) + 1;
      return acc;
    }, {});

    const sorted = Object.entries(skillCounts).sort((a, b) => b[1] - a[1]);
    const max = Math.max(...Object.values(skillCounts));

    const categories = {
      Languages: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript'],
      Tools: ['ROS', 'CMake', 'Git', 'Docker', 'YDLidar'],
      Frameworks: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Streamlit'],
    };

    const getCategory = (skill) => {
      for (const [cat, skills] of Object.entries(categories)) {
        if (skills.includes(skill)) return cat;
      }
      return 'Other';
    };

    const grouped = sorted.reduce((acc, [skill, count]) => {
      const cat = getCategory(skill);
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push({ name: skill, count });
      return acc;
    }, {});

    return { groupedSkills: grouped, sortedSkills: sorted, maxCount: max };
  }, []);

  return (
    <section id="skills" className="section-padding bg-slate-900/50" aria-labelledby="skills-title">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          id="skills-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center"
        >
          <span className="text-blue-500 mr-4" aria-hidden="true">03.</span> Skills & Expertise
        </motion.h2>

        <ErrorBoundary message="Something went wrong while displaying the skills section.">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              {Object.entries(groupedSkills).map(([category, skills], i) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-xl font-semibold text-slate-300 uppercase tracking-widest text-sm">
                    {category}
                  </h3>
                  <ul className="flex flex-wrap gap-4 list-none p-0">
                    {skills.map(skill => (
                      <motion.li
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 glass-morphism rounded-xl border border-white/5 flex items-center space-x-3"
                      >
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-xs text-blue-400 font-mono" aria-label={`Used in ${skill.count} projects`}>x{skill.count}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-morphism border border-white/5 h-fit"
            >
              <h3 className="text-xl font-semibold text-white mb-8">Skill Proficiency</h3>
              <ul className="space-y-6 list-none p-0">
                {sortedSkills.slice(0, 6).map(([skill, count]) => (
                  <li key={skill} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{skill}</span>
                      <span className="text-slate-500" aria-label={`${Math.round((count / maxCount) * 100)} percent usage`}>{Math.round((count / maxCount) * 100)}% Usage</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow={Math.round((count / maxCount) * 100)} aria-valuemin="0" aria-valuemax="100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(count / maxCount) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-500 italic">
                * Frequency based on usage across my public GitHub repositories.
              </p>
            </motion.div>
          </div>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default React.memo(Skills);
