import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, Star } from 'lucide-react';
import projectsData from '../data/projects.json';
import ErrorBoundary from './ErrorBoundary';

// Skeleton Card for loading state
const SkeletonCard = () => (
  <div className="glass-morphism rounded-2xl p-6 border border-white/5 animate-pulse">
    <div className="flex justify-between mb-4">
      <div className="w-10 h-10 bg-slate-800 rounded-xl" />
      <div className="w-16 h-6 bg-slate-800 rounded-full" />
    </div>
    <div className="w-3/4 h-6 bg-slate-800 rounded mb-2" />
    <div className="w-full h-4 bg-slate-800 rounded mb-1" />
    <div className="w-full h-4 bg-slate-800 rounded mb-6" />
    <div className="flex gap-2">
      <div className="w-12 h-5 bg-slate-800 rounded-full" />
      <div className="w-12 h-5 bg-slate-800 rounded-full" />
    </div>
  </div>
);

const ProjectCard = React.memo(({ project, featured = false }) => (
  <motion.li
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    style={{ willChange: 'transform, opacity' }}
    className={`group relative glass-morphism rounded-2xl p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/10 list-none ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
        <Code size={24} />
      </div>
      <div className="flex space-x-4 text-slate-400">
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors p-1"
          aria-label={`View ${project.name} on GitHub`}
        >
          <Code size={20} />
        </a>
        {project.live_url && (
          <a 
            href={project.live_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors p-1"
            aria-label={`View live site for ${project.name}`}
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>

    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {project.name}
    </h3>
    
    <p className="text-slate-400 text-sm mb-6 line-clamp-3">
      {project.readme_summary || project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tech_stack.map(tech => (
        <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-white/5">
          {tech}
        </span>
      ))}
    </div>

    <div className="absolute top-6 right-6 flex items-center space-x-1 text-amber-400 text-sm font-medium" aria-label={`${project.stars} stars on GitHub`}>
      <Star size={14} fill="currentColor" />
      <span>{project.stars}</span>
    </div>
  </motion.li>
));

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const allTags = useMemo(() => ['All', ...new Set(projectsData.flatMap(p => p.tech_stack))], []);
  
  const filteredProjects = useMemo(() => {
    return filter === 'All' 
      ? projectsData 
      : projectsData.filter(p => p.tech_stack.includes(filter));
  }, [filter]);

  const { featuredProjects, regularProjects } = useMemo(() => ({
    featuredProjects: filteredProjects.filter(p => p.highlight),
    regularProjects: filteredProjects.filter(p => !p.highlight)
  }), [filteredProjects]);

  const handleFilter = useCallback((tag) => setFilter(tag), []);

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-title">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          id="projects-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 flex items-center"
        >
          <span className="text-blue-500 mr-4" aria-hidden="true">02.</span> My Projects
        </motion.h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter projects by technology">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleFilter(tag)}
              aria-pressed={filter === tag}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${filter === tag ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <ErrorBoundary message="We encountered an error while loading the projects grid.">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              ) : (
                <>
                  {featuredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} featured={true} />
                  ))}
                  {regularProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </>
              )}
            </AnimatePresence>
          </ul>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default React.memo(Projects);
