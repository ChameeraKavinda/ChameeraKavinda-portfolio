import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaJava, FaPhp, FaLaravel, FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import {
    SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiFirebase, SiR
} from 'react-icons/si';

const logoes = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'PHP', icon: FaPhp, color: 'text-indigo-400' },
    { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    { name: 'Figma', icon: FaFigma, color: 'text-pink-400' },
    { name: 'R', icon: SiR, color: 'text-blue-500' },
];

const Animation = () => {
    // Duplicated skills array to create a seamless infinite loop
    const duplicatedSkills = [...logoes, ...logoes];

    return (
        <section id="animation" className="pb-24 pt-4 bg-slate-900/50 relative overflow-hidden">
            {/* Subtle Background Blurs */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Infinite Scroll Carousel Container */}
                <div
                    className="relative w-full overflow-hidden py-4"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    <div className="flex w-max animate-[infinite-scroll_35s_linear_infinite] hover:[animation-play-state:paused]">
                        {duplicatedSkills.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center w-[160px] md:w-[200px] mx-4"
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)"
                                    }}
                                    className="glass flex flex-col items-center justify-center p-6 rounded-2xl w-full h-full cursor-pointer transition-colors duration-300 hover:border-accent/50 group"
                                >
                                    <item.icon
                                        className={`text-6xl mb-4 ${item.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-lg`}
                                    />

                                    <span className="text-gray-300 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                                        {item.name}
                                    </span>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Animation;
