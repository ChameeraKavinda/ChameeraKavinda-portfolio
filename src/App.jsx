import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
