import React from 'react';
import { Home, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark">How I Can Help You</h2>
          <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
            I specialize in helping women just like you overcome unique challenges and build lasting confidence in all areas of life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-light rounded-full text-primary">
                <Home className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-serif text-primary-dark mb-3">Reclaiming Your Power at Home</h3>
            <p className="text-secondary mb-6">
              Navigate life's major transitions like divorce, loss, or financial strain with renewed strength and a clear sense of self.
            </p>
            <a href="#services" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition group">
              Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-light rounded-full text-primary">
                <Briefcase className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-serif text-primary-dark mb-3">Thriving in Your Corporate Career</h3>
            <p className="text-secondary mb-6">
              Break through barriers, command respect, and achieve the recognition you deserve in the professional world.
            </p>
            <a href="#services" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition group">
              Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-light rounded-full text-primary">
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-serif text-primary-dark mb-3">Leading with Edge as an Entrepreneur</h3>
            <p className="text-secondary mb-6">
              Sharpen your leadership skills, overcome business hurdles, and scale your vision with unwavering confidence.
            </p>
            <a href="#services" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition group">
              Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;