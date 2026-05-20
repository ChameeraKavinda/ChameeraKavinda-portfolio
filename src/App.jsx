import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Animation from './components/Animation';

function App() {
  const [heroKey, setHeroKey] = useState(0);

  const resetHeroAnimation = () => {
    setHeroKey(prev => prev + 1);
  };

  return (
    <div className="font-sans text-slate-100 min-h-screen">
      <Header onHomeClick={resetHeroAnimation} />
      <main>
        <Hero resetKey={heroKey} />
        <About />
        <Skills />
        <Animation />
        <Projects />
        <Education />
        <Service />
        <Contact />
      </main>
      <Footer onScrollTop={resetHeroAnimation} />
    </div>
  );
}

export default App;
