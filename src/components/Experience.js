import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import data from '../data.json';

const Experience = () => {
  const { experience } = data;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{experience.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--accent-glow)]"></div>
        </motion.div>

        <div className="relative">
          <motion.div 
            style={{ scaleY }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary origin-top shadow-[0_0_15px_var(--accent-glow)]"
          />

          <div className="space-y-16">
            {experience.items.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                <div className={`md:w-5/12 w-full pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -5, boxShadow: "0 0 25px var(--accent-glow)" }}
                    className="bg-cardBg border border-cardBorder p-6 rounded-xl hover:border-primary transition-all relative group"
                  >
                    <h3 className="text-2xl font-bold text-textMain mb-1">{exp.title}</h3>
                    <h4 className="text-primary text-lg font-medium mb-3">{exp.company}</h4>
                    <span className="inline-block px-3 py-1 bg-backgroundStart border border-cardBorder rounded-full text-xs text-textMuted mb-4">
                      {exp.date}
                    </span>
                    <p className="text-textMuted leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-backgroundStart border-4 border-primary z-10 shadow-[0_0_15px_var(--accent-glow)] text-primary">
                  <Briefcase size={20} />
                </div>

                <div className="md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
