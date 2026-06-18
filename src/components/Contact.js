import React from "react";
import data from "../data.json";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative bg-black/20 border-t border-cardBorder/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--accent-glow)]"></div>
          <p className="mt-6 text-textMuted text-lg max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a
            question, a project idea, or just want to say hi, feel free to drop
            a message!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8"
        >
          <a
            href={data.contact.socials[0].url}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-black hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300"
          >
            {data.contact.socials[0].name}
          </a>

          <a
            href={data.contact.socials[1].url}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-black hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300"
          >
            {data.contact.socials[1].name}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
