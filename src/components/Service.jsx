import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Server, PenTool } from 'lucide-react';

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern web applications using React, Next.js, and modern CSS frameworks.",
      icon: <Globe size={32} className="text-accent" />
    },
    {
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications for iOS and Android using React Native.",
      icon: <Smartphone size={32} className="text-blue-400" />
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces focusing on best user experience practices.",
      icon: <PenTool size={32} className="text-purple-400" />
    },
    {
      title: "Backend Development",
      description: "Developing robust and scalable server-side applications and RESTful APIs using Node.js and Express.",
      icon: <Server size={32} className="text-green-400" />
    },
    {
      title: "Database Management",
      description: "Designing and optimizing SQL and NoSQL databases like MongoDB, PostgreSQL, and MySQL for performance.",
      icon: <Database size={32} className="text-orange-400" />
    },
    {
      title: "Software Architecture",
      description: "Planning and structuring complex software systems for scalability, security, and maintainability.",
      icon: <Code size={32} className="text-cyan-400" />
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-900/30">
      {/* Background Orbs */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Services</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border-t-4 border-t-transparent hover:border-t-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-700 transition-all duration-300 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service);
