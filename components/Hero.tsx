import React from 'react';

const Hero: React.FC = () => {
  const images = [
    { id: 43, alt: "Woman smiling warmly" },
    { id: 65, alt: "Professional woman leading meeting" },
    { id: 177, alt: "Woman enjoying peace" },
    { id: 200, alt: "Entrepreneur working late" },
    { id: 326, alt: "Woman celebrating achievement" },
    { id: 367, alt: "Woman mentoring colleague" },
    { id: 433, alt: "Woman looking confidently" },
  ];

  // Duplicate for seamless loop
  const scrollImages = [...images, ...images];

  return (
    <section id="home" className="bg-primary-light overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left z-10">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-primary-dark leading-tight">
            Unlock the Confident, Powerful You.
          </h1>
          <p className="mt-6 text-lg text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed">
            It's time to move past self-doubt and step into your power. Whether you're navigating a life change, climbing the corporate ladder, or building your empire, I'm here to help you build the unshakable confidence to thrive.
          </p>
          <a href="#contact" className="mt-8 inline-block bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg">
            Book a Free 30-Min Session
          </a>
        </div>
        
        <div className="relative">
          <div className="relative w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0 overflow-hidden rounded-xl shadow-2xl scroller-fade bg-white/50 p-2">
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
              {scrollImages.map((img, index) => (
                <img 
                  key={`${img.id}-${index}`}
                  src={`https://picsum.photos/id/${img.id}/800/600`} 
                  alt={img.alt} 
                  className="w-80 h-96 object-cover rounded-lg shadow-lg mr-6 transition-transform hover:scale-105 duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;