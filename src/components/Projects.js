import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import data from '../data.json';

const Projects = () => {
  const { projects } = data;

  return (
    <section id="projects" className="py-24 px-6 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{projects.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--accent-glow)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -15, 
                rotateX: 2,
                rotateY: 2,
                boxShadow: "0 0 30px var(--accent-glow)" 
              }}
              className="bg-cardBg border border-cardBorder rounded-2xl p-8 hover:border-primary transition-all flex flex-col h-full group perspective-1000"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <span className="font-bold text-2xl">{project.title.charAt(0)}</span>
                </div>
                <div className="flex space-x-3">
                  <a href={project.github} className="text-textMuted hover:text-primary transition-colors">
                    <Code2 size={22} />
                  </a>
                  <a href={project.live} className="text-textMuted hover:text-primary transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-textMuted leading-relaxed flex-grow mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-backgroundStart border border-cardBorder rounded-full text-xs text-primary font-medium tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
