import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = ({ onScrollTop }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (onScrollTop) onScrollTop();
  };

  return (
    <footer className="bg-slate-900 py-12 relative border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo / Brand */}
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">CK</span>
            <span className="text-accent">.</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Chameera Kavinda. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/ChameeraKavinda" className="text-gray-500 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/chameerakavinda/" className="text-gray-500 hover:text-blue-500 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/94753998444" className="text-gray-500 hover:text-blue-400 transition-colors">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent hover:bg-accent-hover text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 cursor-pointer"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
