import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import data from "../data.json";
const Projects = () => {
  const { projects } = data;

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project, e) => {
    e.preventDefault();
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length,
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length,
      );
    }
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {projects.title}
          </h2>
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
                boxShadow: "0 0 30px var(--accent-glow)",
              }}
              className="bg-cardBg border border-cardBorder rounded-2xl p-8 hover:border-primary transition-all flex flex-col h-full group perspective-1000"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
                  <span className="font-bold text-2xl">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-textMuted hover:text-primary transition-colors cursor-pointer"
                    >
                      <Code2 size={22} />
                    </a>
                  )}
                  <button
                    onClick={(e) => openGallery(project, e)}
                    className="text-textMuted hover:text-primary transition-colors cursor-pointer focus:outline-none"
                  >
                    <ExternalLink size={22} />
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-textMuted leading-relaxed flex-grow mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-backgroundStart border border-cardBorder rounded-full text-xs text-primary font-medium tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-black/20 border border-primary w-full max-w-5xl rounded-2xl shadow-[0_0_40px_var(--accent-glow)] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-cardBorder bg-cardBg/20">
                <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                  <ImageIcon className="text-primary" />
                  {selectedProject.title} Gallery
                </h3>
                <button
                  onClick={closeGallery}
                  className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-red-500 hover:bg-gray-800 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-backgroundStart flex items-center justify-center group">
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <>
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain max-h-[70vh]"
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 p-3 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft size={28} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 p-3 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight size={28} />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                          {selectedProject.images.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-2.5 h-2.5 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? "bg-primary scale-125"
                                  : "bg-gray-500 cursor-pointer hover:bg-gray-400"
                              }`}
                              onClick={() => setCurrentImageIndex(idx)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="text-gray-500 flex flex-col items-center">
                    <ImageIcon size={48} className="mb-4 opacity-50" />
                    <p>No images available for this project yet.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
