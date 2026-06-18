import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "./ThemeContext";
import {
  Briefcase,
  Monitor,
  GraduationCap,
  Globe,
  Mail,
  Folder,
} from "lucide-react";
// import data from "../data.json";

const Hero = () => {
  const { theme } = useTheme();
  // const { hero } = data;

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleColor = theme === "charcoal" ? "#FFB703" : "#45A29E";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-cardBorder pt-20 pb-10"
    >
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: particleColor },
            links: {
              color: particleColor,
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Main Content Split Layout */}
      <div className="z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE: Minimalist Intro */}
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cardBorder bg-cardBg/50 backdrop-blur-sm mb-8"
          >
            <Briefcase size={14} className="text-primary" />
            <span className="text-xs md:text-sm text-textMuted tracking-wider font-medium uppercase">
              Open to work • Any Timezone
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="text-textMain block">Ahmad</span>
            <span className="text-primary">Ali Awan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-cardBorder"></div>
              <h2 className="text-lg md:text-xl text-textMuted font-mono uppercase tracking-widest">
                Full-Stack Development
              </h2>
            </div>

            {/* Minimalist Paragraph */}
            <p className="text-textMuted text-lg max-w-lg leading-relaxed border-l-2 border-primary/50 pl-4 italic">
              "Architecting high-performance web applications with a focus on
              seamless user experiences."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:shadow-[0_0_20px_var(--accent-glow)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-cardBg border border-cardBorder text-textMain font-medium rounded-lg hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              <Folder size={18} />
              Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Profile Detail Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[480px] bg-cardBg/80 backdrop-blur-md border border-cardBorder rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative group"
        >
          {/* Subtle glow effect behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-cardBorder">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 font-bold text-xl">
                AA
              </div>
              <div>
                <h3 className="text-xl font-bold text-textMain">Ahmad Ali</h3>
                <p className="text-sm text-primary">Software Engineer</p>
              </div>
            </div>

            {/* Card Data Rows */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm py-2 border-b border-cardBorder/50">
                <div className="flex items-center gap-3 text-textMuted">
                  <Briefcase size={16} />
                  <span>Roles</span>
                </div>
                <span className="text-textMain font-medium text-right">
                  Web Dev
                </span>
              </div>

              <div className="flex justify-between items-center text-sm py-2 border-b border-cardBorder/50">
                <div className="flex items-center gap-3 text-textMuted">
                  <Monitor size={16} />
                  <span>Stack</span>
                </div>
                <span className="text-textMain font-medium text-right">
                  React • Node • Python
                </span>
              </div>

              <div className="flex justify-between items-center text-sm py-2 border-b border-cardBorder/50">
                <div className="flex items-center gap-3 text-textMuted">
                  <GraduationCap size={16} />
                  <span>Education</span>
                </div>
                <span className="text-textMain font-medium text-right">
                  BS SE | OnGoing
                </span>
              </div>

              <div className="flex justify-between items-center text-sm py-2 border-b border-cardBorder/50">
                <div className="flex items-center gap-3 text-textMuted">
                  <Globe size={16} />
                  <span>Location</span>
                </div>
                <span className="text-textMain font-medium text-right">
                  PKT (Flexible)
                </span>
              </div>
            </div>

            {/* Card Footer Status */}
            <div className="mt-8 pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Available for opportunities
              </div>
              <div className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-xs font-bold tracking-widest">
                OPEN
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
