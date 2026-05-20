import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutMeImg from "../assets/aboutme.png";
import cvFile from "../assets/pdf/ChameeraKavinda.pdf";


const Counter = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <motion.button
      {...rest}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer group relative px-6 py-3 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </motion.button>
  );
};

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Chameera_Kavinda_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-full h-full flex items-end justify-center relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 pt-4 px-4 border border-slate-700 rounded-2xl">
              <img
                src={aboutMeImg}
                alt="About Me"
                className="w-64 h-auto object-contain mx-auto"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Passionate Developer <br />
              <span className="text-gray-400 font-medium text-xl">
                & Tech Enthusiast
              </span>
            </h3>

            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                I am a motivated Software Engineer with a strong passion for building modern software solutions and full-stack applications.
              </p>

              <p>
                I specialize in React, Laravel, .NET, and modern UI design. My goal is to create clean, scalable, and impactful digital solutions.
              </p>
              <p>
                As a freelance software developer, I have worked with clients to design and develop user-friendly solutions while strengthening my problem-solving, teamwork, and communication skills. I am also highly interested in Artificial Intelligence and continuously explore new technologies to expand my knowledge and build impactful digital experiences.
              </p>
            </div>

            {/* BUTTON REPLACED HERE */}
            <div className="mt-8 cursor-pointer">
              <DrawOutlineButton onClick={handleDownloadCV}>
                Explore More...
              </DrawOutlineButton>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-accent mb-2">
                  <Counter from={0} to={3} duration={2} suffix="+" />
                </h4>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Years Exp.
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-accent mb-2">
                  <Counter from={0} to={15} duration={2} suffix="+" />
                </h4>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Projects
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;