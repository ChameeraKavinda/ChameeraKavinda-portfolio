import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const Education = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const educationData = [
    {
      title: "BSc (Hons) Software Engineering",
      institution: "Cardiff Metropolitan University",
      date: "Completed - 02/2026",
      description: "Graduated with Second Class Honours (Upper Division) with a strong foundation in software engineering, full-stack development, and modern web technologies.",
      icon: <GraduationCap size={24} className="text-blue-400" />,
      category: "Education"
    },
    {
      title: "HND in Computing and Software Engineering",
      institution: "Cardiff Metropolitan University - UK",
      date: "2022 - 2024",
      description: "Successfully completed Higher National Diploma in Computing and Software Engineering with Merit classification.",
      icon: <GraduationCap size={24} className="text-blue-400" />,
      category: "Education"
    },
    {
      title: "GCE Advanced Level – Engineering Technology",
      institution: "Dharmaraja College - Kandy",
      date: "2018 - 2021",
      description: "Completed Advanced Level studies in Engineering Technology with a focus on technical and analytical subjects.",
      icon: <GraduationCap size={24} className="text-blue-400" />,
      category: "Education"
    },
    {
      title: "Buildthon 2024 – Hackathon Finalist",
      institution: "ICBT Colombo Campus",
      date: "Achievement",
      description: "Selected as one of the Top 10 Finalists in Buildthon 2024, a national-level hackathon focused on innovative software solutions and teamwork.",
      icon: <Award size={24} className="text-blue-400" />,
      category: "Certification"
    },
    {
      title: "Diploma in Basic Computer Science",
      institution: "SICS Institute",
      date: "Completed",
      description: "Successfully completed a diploma in Basic Computer Science with a Credit Pass.",
      icon: <Award size={24} className="text-blue-400" />,
      category: "Certification"
    },
    {
      title: "Diploma in Computer Science",
      institution: "Sisu Saviya Vocational Programme",
      date: "Completed",
      description: "Completed Diploma in Computer Science with Grade A performance.",
      icon: <Award size={24} className="text-blue-400" />,
      category: "Certification"
    },
    {
      title: "Diploma in Spoken English",
      institution: "Sisu Saviya Vocational Programme",
      date: "Completed",
      description: "Completed Spoken English diploma programme with Grade A results.",
      icon: <Award size={24} className="text-blue-400" />,
      category: "Certification"
    },
    {
      title: "Freelance Software Developer",
      institution: "Freelance",
      date: "2023-2026",
      description: "Developed responsive, user-friendly web applications and academic systems while collaborating with clients to deliver effective solutions.",
      icon: <Briefcase size={24} className="text-blue-400" />,
      category: "Experience"
    }
  ];

  const categories = ["Education", "Certification", "Experience"];
  const filteredData = educationData.filter(item => item.category === activeTab);

  return (
    <section id="education" className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6 md:px-12 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & <span className="gradient-text">Experience</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-10"></div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white cursor-pointer'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto min-h-[400px]">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 md:-translate-x-1/2 rounded-full"></div>

          <AnimatePresence mode="popLayout">
            {filteredData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center w-full mb-12 md:mb-20 ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Icon - Centered on Desktop, Left aligned on Mobile */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center z-20 -translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(var(--accent),0.2)]">
                    {item.icon}
                  </div>

                  {/* Empty Space for the other side on Desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <div className={`glass p-6 md:p-8 rounded-2xl relative z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 border-l-4 md:border-l-0 ${isEven ? "md:border-r-4" : "md:border-l-4"} border-accent`}>

                      <div className="flex flex-col gap-2 mb-4">
                        <span className="text-accent font-medium text-sm px-4 py-1.5 bg-accent/10 rounded-full w-fit">
                          {item.date}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                      </div>

                      <h4 className="text-lg text-gray-300 mb-4 font-medium flex items-center gap-2">
                        {item.institution}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Education);
