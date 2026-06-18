import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import data from "../data.json";

const Certifications = () => {
  const { certifications } = data;

  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {certifications.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--accent-glow)]"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-stretch gap-8">
          {certifications.items.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 0 25px var(--accent-glow)",
              }}
              className="bg-cardBg border border-cardBorder rounded-2xl p-8 max-w-2xl w-full flex-1 hover:border-primary transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary origin-bottom group-hover:scale-y-110 transition-transform"></div>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="p-4 bg-backgroundStart border border-cardBorder rounded-full text-primary shadow-[0_0_10px_var(--accent-glow)] group-hover:bg-primary/10 transition-colors shrink-0">
                  <Award size={32} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-textMain mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                    <span className="text-primary font-medium">
                      {cert.issuer}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-textMuted hidden sm:block"></span>
                    <span className="text-sm text-textMuted tracking-wider uppercase">
                      {cert.type}
                    </span>
                  </div>

                  <p className="text-textMuted leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
