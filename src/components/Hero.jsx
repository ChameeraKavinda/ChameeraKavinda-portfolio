import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cvFile from '../assets/pdf/ChameeraKavinda.pdf';
import aboutmeImg from '../assets/about.png';

const Hero = ({ resetKey }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">

      {/* Background Gradient Orbs */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center text-center">

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-6 md:mb-8 relative"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-accent shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <div className="w-full h-full bg-slate-900 rounded-full p-1">
                <img
                  src={aboutmeImg}
                  alt="Chameera Kavinda"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* HERO TITLE */}
          <motion.h1
            key={resetKey}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mb-4"          >

            {/* Hi, I'm */}
            {"Hi, I'm ".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            <br className="md:hidden" />

            {/* Name */}
            <span className="gradient-text block md:inline">
              {"Chameera Kavinda".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>

          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-400 font-medium mb-8"
          >
            Software Engineer | Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl"
          >
            I specialize in designing and developing software solutions, web applications, and backend systems using React, Laravel, .NET, Java, and PHP.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >

            <a
              href="#contact"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              Let's Talk
            </a>

            <a
              href={cvFile}
              download
              className="px-8 py-4 bg-transparent border border-slate-700 hover:bg-slate-800 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>

            {/* Social */}
            <div className="flex justify-center gap-4 sm:ml-4 mt-4 sm:mt-0">

              <a
                href="https://github.com/ChameeraKavinda"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/chameerakavinda/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={24} />
      </motion.div>

    </section>
  );
};

export default React.memo(Hero);