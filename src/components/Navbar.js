import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "./ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About Me", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-cardBg backdrop-blur-md border-b border-cardBorder py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-primary tracking-wider z-50"
        >
          AHMAD<span className="text-textMain">.DEV</span>
        </motion.div>

        <div className="hidden lg:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="text-textMain hover:text-primary cursor-pointer transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-cardBg border border-cardBorder text-primary hover:shadow-[0_0_15px_var(--accent-glow)] transition-all"
          >
            {theme === "charcoal" ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
        </div>

        <div className="lg:hidden flex items-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-cardBg backdrop-blur-xl border-b border-cardBorder lg:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="text-textMain hover:text-primary cursor-pointer transition-colors text-lg uppercase tracking-widest font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  toggleTheme();
                  closeMenu();
                }}
                className="mt-4 p-3 rounded-full bg-backgroundStart border border-cardBorder text-primary hover:shadow-[0_0_15px_var(--accent-glow)] transition-all flex items-center justify-center gap-3"
              >
                {theme === "charcoal" ? <Moon size={20} /> : <Sun size={20} />}
                <span className="text-sm font-medium tracking-widest uppercase">
                  Toggle Theme
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
