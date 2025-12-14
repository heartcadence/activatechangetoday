import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-dark">My Journey to Empowering Women</h1>
          <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
            A little about me and why I'm so passionate about this work.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-dark rounded-lg transform translate-x-3 translate-y-3"></div>
              <img 
                src="https://pub-ea9f7e7fb75a4e829aa21b42018bbe1c.r2.dev/sa1.jpg" 
                alt="Coach Sophie Ashley" 
                className="relative rounded-lg shadow-2xl object-cover w-full h-full aspect-[3/4] z-10"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-serif text-primary-dark mb-6">Hello, I'm Sophie Ashley.</h2>
            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              <p>
                I know what it’s like to feel stuck. For years, I navigated the demanding corporate world, feeling undervalued and unheard. I've also witnessed the silent struggles of friends and family rebuilding their lives after profound personal changes. I saw brilliant, capable women dim their own light because they'd lost touch with their inner strength.
              </p>
              <p>
                My own journey of rediscovering my confidence wasn't a straight line. It was filled with challenges, learning, and ultimately, a profound transformation. This experience ignited a passion in me: to create the support system I wish I'd had. I decided to channel my experiences and professional training into a career dedicated to helping other women find their voice, own their worth, and lead lives of purpose and fulfillment.
              </p>
              <p>
                As a certified coach, my approach is built on a foundation of empathy, trust, and proven strategies. I don’t offer one-size-fits-all solutions. Instead, I partner with you to uncover your unique strengths, dismantle the beliefs holding you back, and create a clear, actionable path toward the confident life you deserve.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-primary-light p-10 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-20 rounded-full"></div>
          
          <h3 className="text-3xl font-serif text-primary-dark text-center mb-10 relative z-10">My Credentials & Commitment</h3>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <li className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
               <Award className="w-8 h-8 text-accent mb-3" />
               <h4 className="font-bold text-lg text-primary-dark">Certified Professional Coach (CPC)</h4>
               <p className="text-sm text-secondary mt-1">Institute for Professional Excellence in Coaching (iPEC)</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
               <Users className="w-8 h-8 text-accent mb-3" />
               <h4 className="font-bold text-lg text-primary-dark">Energy Leadership™ Index Master</h4>
               <p className="text-sm text-secondary mt-1">iPEC Master Practitioner</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
               <Award className="w-8 h-8 text-accent mb-3" />
               <h4 className="font-bold text-lg text-primary-dark">ICF Member</h4>
               <p className="text-sm text-secondary mt-1">Adhering to the highest ethical standards</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
               <BriefcaseIcon className="w-8 h-8 text-accent mb-3" />
               <h4 className="font-bold text-lg text-primary-dark">15+ Years Corporate Experience</h4>
               <p className="text-sm text-secondary mt-1">Leadership & Development Roles</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
               <BookOpen className="w-8 h-8 text-accent mb-3" />
               <h4 className="font-bold text-lg text-primary-dark">B.A. in Psychology</h4>
               <p className="text-sm text-secondary mt-1">Understanding the science of human behavior</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
               <Users className="w-8 h-8 text-accent mb-3" />
               <h4 className="font-bold text-lg text-primary-dark">Continuous Education</h4>
               <p className="text-sm text-secondary mt-1">Committed to the latest coaching methodologies</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Helper icon
const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

export default About;