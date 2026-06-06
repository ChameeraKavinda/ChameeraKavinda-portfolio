import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import c1 from "../assets/pic/comfort.webp";
import c2 from "../assets/pic/book.webp";
import c3 from "../assets/pic/cab.webp";
import c4 from "../assets/pic/mindwell.webp";

const Projects = () => {

  const projectsList = [
    {
      title: "AI Mental Health App",
      description:
        "An AI-powered mental health companion app that provides mood tracking and personalized wellness suggestions.",
      tech: ["Next.js", "Python", "OpenAI API", "Tailwind"],
      github: "https://github.com/saajidjiffrey/ai-mental-health-app",
      live: "https://mindwell-ai.vercel.app/",
      image: c4,
      color: "from-emerald-500 to-teal-500",
    },

    {
      title: "Blanket Management System",
      description:
        "A blanket inventory and management system developed using C#, HTML, CSS, and JavaScript.",
      tech: ["C#", "HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/ChameeraKavinda/Blanket-Mangement-System",
      live: "https://www.youtube.com/watch?v=CkVGT9qWk6A&t=545s",
      image: c1,
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Book Managment System",
      description:
        "An online platform for browsing, selecting, and managing books efficiently.",
      tech: [".Net", "Angular", "MySQL", "Bootstrap", "Tailwind"],
      github: "https://github.com/ChameeraKavinda/BookManagement-.net-project-with-Angular",
      live: "https://www.youtube.com/watch?v=QJpKB24zYas",
      image: c2,
      color: "from-purple-500 to-pink-500",
    },

    {
      title: "Mega City Cab Management System",
      description:
        "A Java-based web application for managing cab services in Colombo City. It automates customer bookings, driver and vehicle management, and billing to improve overall efficiency.",
      tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/ChameeraKavinda/megaCity-cabService",
      live: "https://github.com/ChameeraKavinda/megaCity-cabService",
      image: c3,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {projectsList.map((project, idx) => (

            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}

              // IMPORTANT FIX
              className="glass rounded-2xl overflow-hidden group flex flex-col h-full"
            >

              {/* Project Image */}
              <div className="w-full h-48 md:h-64 bg-slate-800/40 relative overflow-hidden">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-2 transform group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                    <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                      <h3 className="text-3xl font-black text-white/50">
                        {project.title.substring(0, 2).toUpperCase()}
                      </h3>
                    </div>
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col flex-grow">

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1 bg-slate-800/80 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);