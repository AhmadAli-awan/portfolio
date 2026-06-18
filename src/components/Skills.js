import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import data from "../data.json";

const Skills = () => {
  const { skills } = data;
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-6 relative flex flex-col items-center bg-black/20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {skills.title}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--accent-glow)]"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[340px] md:max-w-4xl flex flex-col items-center"
      >
        <div
          className="w-full relative bg-gray-900 border-[#1a1c23] 
          border-[10px] rounded-[2.5rem] aspect-[9/19] 
          md:border-[16px] md:border-b-[24px] md:rounded-t-3xl md:rounded-b-none md:aspect-video 
          overflow-hidden flex flex-col z-10 shadow-2xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-black/60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black z-0"></div>

          <div className="md:hidden absolute top-0 inset-x-0 h-6 flex justify-center z-20">
            <div className="w-32 h-full bg-[#1a1c23] rounded-b-2xl"></div>
          </div>

          <div className="hidden md:flex w-full h-10 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 items-center px-4 relative z-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-gray-400 text-xs font-mono tracking-widest uppercase">
                Click on App to open
              </span>
            </div>
          </div>

          <div className="relative z-10 p-4 pt-10 md:pt-8 md:p-8 flex-1 overflow-y-auto custom-scrollbar flex flex-wrap justify-center content-start gap-4 md:gap-6">
            {skills.items.map((skill, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedSkill(skill)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-[4.5rem] h-[4.5rem] md:w-32 md:h-32 bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-primary rounded-xl md:rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-3 transition-colors shadow-lg hover:shadow-[0_0_15px_var(--accent-glow)] group"
              >
                <div className="text-primary font-bold text-[11px] md:text-xl text-center px-1 group-hover:scale-110 transition-transform leading-tight">
                  {skill.name}
                </div>
                <div className="hidden md:block text-[10px] text-textMuted tracking-widest uppercase">
                  {skill.level}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="md:hidden absolute bottom-2 inset-x-0 flex justify-center z-10 pointer-events-none">
            <div className="w-1/3 h-1 bg-white/20 rounded-full"></div>
          </div>

          <AnimatePresence>
            {selectedSkill && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute inset-0 z-30 flex items-center justify-center p-3 md:p-4 bg-black/60 backdrop-blur-sm"
              >
                <div className="bg-[#121212] border border-primary w-full max-w-md rounded-xl shadow-[0_0_30px_var(--accent-glow)] flex flex-col max-h-full overflow-hidden">
                  <div className="bg-[#1e1e1e] px-4 py-3 flex justify-between items-center border-b border-gray-700 shrink-0">
                    <span className="text-xs md:text-sm font-mono text-gray-400 truncate pr-4">
                      skill_details.exe
                    </span>
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="p-6 md:p-8 text-center overflow-y-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedSkill.name}
                    </h3>
                    <div className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full bg-primary/10 border border-primary text-primary text-[10px] md:text-xs tracking-widest font-bold uppercase">
                      {selectedSkill.level}
                    </div>
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                      {selectedSkill.description ||
                         `Extensive experience utilizing ${selectedSkill.name} for modern web development.`}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:flex relative w-[112%] h-8 bg-gradient-to-b from-[#3a3d4a] to-[#14151a] rounded-b-[2rem] shadow-[0_25px_50px_rgba(0,0,0,0.9)] border-t-[1.5px] border-gray-400 justify-center z-20 -mt-[1px]">
          <div className="w-32 h-3 bg-[#1a1c23] rounded-b-xl shadow-inner border-t border-black/50"></div>
        </div>

        <div className="hidden md:block w-[70%] h-4 bg-primary/20 blur-3xl rounded-[100%] mt-2"></div>
      </motion.div>
    </section>
  );
};

export default Skills;
