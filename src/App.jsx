import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';


// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Service = lazy(() => import('./components/Service'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Animation = lazy(() => import('./components/Animation'));

function App() {
  const [heroKey, setHeroKey] = useState(0);

  const resetHeroAnimation = () => {
    setHeroKey(prev => prev + 1);
  };

  // Simple loading fallback
  const Loader = () => (
    <div className="flex items-center justify-center min-h-screen bg-darker">
      <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="font-sans text-slate-100 min-h-screen">
      <Header onHomeClick={resetHeroAnimation} />
      <main>
        <Suspense fallback={<Loader />}>
          <Hero resetKey={heroKey} />
          <About />
          <Skills />
          <Animation />
          <Projects />
          <Education />
          <Service />
          <Contact />
        </Suspense>
      </main>
      <Footer onScrollTop={resetHeroAnimation} />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/94716434958?text=Hi%20Chameera%20%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:bg-green-600 hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 outline-none border-none inline-block"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </div>
  );
}

export default App;
