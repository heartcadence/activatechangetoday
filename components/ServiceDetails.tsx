import React from 'react';
import { Home, Briefcase, TrendingUp, Check } from 'lucide-react';

const ServiceDetails: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-dark">Your Path to Confidence</h1>
          <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
            Tailored coaching packages designed to meet you where you are and guide you to where you want to be. Each program is a partnership to unlock your potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col h-full border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-primary-light p-3 rounded-full mr-4 text-primary">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-dark leading-tight">Reclaiming Your Power at Home</h3>
            </div>
            <p className="text-secondary mb-6 flex-grow">
              Navigate life's major transitions like divorce, loss, or financial strain with renewed strength and a clear sense of self.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Rebuilding self-esteem after a major life event.",
                "Developing resilience and coping strategies.",
                "Setting healthy boundaries with family.",
                "Creating a vision for your new chapter.",
                "Rediscovering personal joy and purpose."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="ml-3 text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-auto w-full text-center bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-md">
              Start Your Transformation
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col h-full border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-primary-light p-3 rounded-full mr-4 text-primary">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-dark leading-tight">Thriving in Your Corporate Career</h3>
            </div>
            <p className="text-secondary mb-6 flex-grow">
              Break through barriers, command respect, and achieve the recognition you deserve in the professional world.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Developing executive presence and assertive communication.",
                "Overcoming imposter syndrome and self-doubt.",
                "Navigating workplace politics with confidence.",
                "Strategizing for promotions and leadership roles.",
                "Building a powerful professional network."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="ml-3 text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-auto w-full text-center bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-md">
              Start Your Transformation
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col h-full border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-primary-light p-3 rounded-full mr-4 text-primary">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-dark leading-tight">Leading with Edge as an Entrepreneur</h3>
            </div>
            <p className="text-secondary mb-6 flex-grow">
              Sharpen your leadership skills, overcome business hurdles, and scale your vision with unwavering confidence.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Cultivating a resilient and decisive leadership mindset.",
                "Mastering confident sales and negotiation techniques.",
                "Inspiring and leading your team effectively.",
                "Managing stress and preventing burnout.",
                "Embracing risk and making bold business moves."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="ml-3 text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-auto w-full text-center bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-md">
              Start Your Transformation
            </a>
          </div>
        </div>

        <div className="mt-20 text-center bg-primary-light p-10 rounded-xl shadow-inner">
          <h2 className="text-3xl font-serif text-primary-dark mb-4">Ready to Begin?</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto mb-8">
            The first step is a simple conversation. Let's explore your goals and see how we can work together.
          </p>
          <a href="#contact" className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg">
            Book Your Free 30-Min Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;