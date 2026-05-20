
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cvFile from '../assets/pdf/ChameeraKavinda.pdf';

const Hero = ({ resetKey }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-accent text-sm font-medium mb-6">
              Welcome to my portfolio
            </span>
          </motion.div> */}

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
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
          >
            {"Hi, I'm ".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, display: "none" },
                  visible: { opacity: 1, display: "inline-block" },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br className="md:hidden" />
            <span className="gradient-text whitespace-nowrap">
              {"Chameera Kavinda".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, display: "none" },
                    visible: { opacity: 1, display: "inline-block" },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <motion.span
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: [0, 1, 0],
                  transition: { repeat: Infinity, duration: 0.8, ease: "linear" },
                },
              }}
              className="inline-block ml-1 text-accent font-light"
            >

            </motion.span>
          </motion.h1>

          <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center mt-4">
            <div className="flex flex-col items-center text-center max-w-2xl z-10 relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-3xl text-gray-400 font-medium mb-8"
              >
                Software Engineer | Full Stack Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-400 text-lg md:text-xl mb-10"
              >
                I specialize in designing and developing <b>software solutions</b>, <b>web applications</ b>, and <b>backend systems</b>. With experience in <b>React</b>, <b>Laravel</b>, <b>.NET</b>, <b>Java</b>, and <b>PHP</b>, I focus on building scalable, high performance, and user centered digital products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <a
                  href="#contact"
                  className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 group"
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

                <div className="flex justify-center gap-4 sm:ml-4 mt-4 sm:mt-0">
                  <a
                    href="https://github.com/ChameeraKavinda"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-accent hover:bg-slate-800 transition-all"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chameerakavinda/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-accent hover:bg-slate-800 transition-all"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Background Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="
    absolute 
    lg:absolute 
    right-0 lg:-right-5 xl:-right-16 
    top-0 lg:top-1/2 
    lg:-translate-y-1/2 
   w-92 h-92 
    md:w-80 md:h-80 
    lg:w-[420px] lg:h-[420px] 
    z-0 opacity-0 pointer-events-none
  "
            >
              <iframe
                src="https://lottie.host/embed/55ee74af-3dab-4589-90bf-811c292cb6cf/oAlaXb2fWQ.lottie"
                className="w-full h-full border-none pointer-events-none opacity-20 md:opacity-100" title="Hero Background Animation"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 animate-bounce"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
