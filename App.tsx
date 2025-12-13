import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ServiceDetails from './components/ServiceDetails';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AICoach from './components/AICoach';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <Testimonials />
        <About />
        <ServiceDetails />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AICoach />
    </div>
  );
};

export default App;