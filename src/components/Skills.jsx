import React from 'react';
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFigma
} from 'react-icons/fa';

import {
  SiReact,
  SiNodedotjs,
  SiLaravel,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiXampp
} from 'react-icons/si';

import { DiCode } from 'react-icons/di';

const Skills = () => {

  const skillCategories = [

    {
      title: "Frontend",

      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },

    {
      title: "Backend & Database",

      skills: [
        "PHP",
        "Laravel",
        "Java",
        "MySQL",
        "MongoDB",
      ]
    },

    {
      title: "Frameworks & Libraries",

      skills: [
        "React.js",
        "Laravel",
        "Spring Boot",
        "Tailwind CSS"
      ]
    },

    {
      title: "Tools & Platforms",

      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "XAMPP",
        "Firebase",
        "Vercel"
      ]
    },

    {
      title: "Other Skills",

      skills: [
        "REST API Development",
        "Responsive Web Design",
        "CRUD Application Development",
        "Authentication Systems",
        "UI Design Basics",
        "Problem Solving",
        "Team Collaboration"
      ]
    }

  ];

  const skillLogos = [

    {
      name: 'HTML',
      icon: FaHtml5,
      color: 'text-orange-500'
    },

    {
      name: 'CSS',
      icon: FaCss3Alt,
      color: 'text-blue-500'
    },

    {
      name: 'JavaScript',
      icon: FaJs,
      color: 'text-yellow-400'
    },

    {
      name: 'React.js',
      icon: SiReact,
      color: 'text-cyan-400'
    },

    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: 'text-cyan-400'
    },

    {
      name: 'Bootstrap',
      icon: SiBootstrap,
      color: 'text-purple-500'
    },

    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: 'text-green-500'
    },

    {
      name: 'PHP',
      icon: FaPhp,
      color: 'text-purple-500'
    },

    {
      name: 'Laravel',
      icon: SiLaravel,
      color: 'text-red-500'
    },

    {
      name: 'Java',
      icon: FaJava,
      color: 'text-orange-500'
    },

    {
      name: 'Spring Boot',
      icon: SiSpringboot,
      color: 'text-green-500'
    },

    {
      name: 'Express.js',
      icon: SiExpress,
      color: 'text-gray-300'
    },

    {
      name: 'MySQL',
      icon: SiMysql,
      color: 'text-blue-500'
    },

    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: 'text-green-500'
    },

    {
      name: 'Firebase',
      icon: SiFirebase,
      color: 'text-yellow-500'
    },

    {
      name: 'Git',
      icon: FaGitAlt,
      color: 'text-orange-500'
    },

    {
      name: 'GitHub',
      icon: FaGithub,
      color: 'text-white'
    },

    {
      name: 'VS Code',
      icon: DiCode,
      color: 'text-blue-500'
    },

    {
      name: 'Postman',
      icon: SiPostman,
      color: 'text-orange-500'
    },

    {
      name: 'XAMPP',
      icon: SiXampp,
      color: 'text-orange-400'
    },

    {
      name: 'Vercel',
      icon: SiVercel,
      color: 'text-white'
    },

    {
      name: 'Figma',
      icon: FaFigma,
      color: 'text-pink-500'
    }

  ];

  const containerVariants = {

    hidden: {
      opacity: 0
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {

    hidden: {
      opacity: 0,
      y: 20
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5
      }
    }
  };

  return (

    <section
      id="skills"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="hidden md:block absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="hidden md:block absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.5 }}

          className="mb-16 text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">

            My{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>

          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to design, develop, and deploy modern web applications.
          </p>

        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >

          {skillCategories.map((category, idx) => (

            <motion.div
              key={idx}

              variants={itemVariants}

              whileHover={{ y: -8 }}

              className="
                group
                relative
                overflow-hidden
                backdrop-blur-lg
                bg-white/5
                border
                border-white/10
                p-8
                rounded-3xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
              "
            >

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-slate-700 pb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, sIdx) => {

                  const logo = skillLogos.find(
                    (item) => item.name === skill
                  );

                  const Icon = logo?.icon;

                  return (

                    <div
                      key={sIdx}

                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-slate-800/80
                        border
                        border-slate-700
                        text-sm
                        text-gray-300
                        hover:text-white
                        hover:border-cyan-400
                        hover:bg-cyan-400/10
                        hover:scale-105
                        transition-all
                        duration-300
                        cursor-pointer
                      "
                    >

                      {/* ICON */}
                      {Icon && (

                        <Icon
                          className={`text-lg ${logo.color}`}
                        />

                      )}

                      {/* TEXT */}
                      <span>{skill}</span>

                    </div>

                  );

                })}

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );
};

export default React.memo(Skills);