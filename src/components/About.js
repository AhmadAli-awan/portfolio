import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Gamepad2, GraduationCap } from 'lucide-react';
import data from '../data.json';

const About = () => {
  const { about } = data;

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{about.title}</h2>
          <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_var(--accent-glow)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 text-lg text-textMuted leading-relaxed"
          >
            <p>{about.paragraphs[0]}</p>
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-cardBg border border-cardBorder rounded-lg text-primary">
                <GraduationCap size={24} />
              </div>
              <p>{about.paragraphs[1]}</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-cardBg border border-cardBorder rounded-lg text-primary">
                <Terminal size={24} />
              </div>
              <p>{about.paragraphs[2]}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-cardBg border border-cardBorder rounded-2xl p-8 hover:border-primary transition-colors hover:shadow-[0_0_30px_var(--accent-glow)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Gamepad2 size={120} className="text-primary" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary border border-primary/30">
                <Gamepad2 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-textMain mb-3">{about.hobby.title}</h3>
              <p className="text-textMuted mb-6">
                {about.hobby.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {about.hobby.games.map(game => (
                  <span key={game} className="px-3 py-1 bg-backgroundStart rounded-full text-sm border border-cardBorder text-primary font-medium">
                    {game}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
