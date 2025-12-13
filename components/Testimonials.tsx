import React from 'react';
import { Testimonial } from '../types';

const testimonialData: Testimonial[] = [
  { text: "Working with her was life-changing. I rediscovered my strength after my divorce and now feel more in control and optimistic about my future than ever before.", author: "Sarah L.", role: "Recently Divorced", imgId: 1027 },
  { text: "I was consistently overlooked for promotions. This coaching helped me find my voice, assert my value, and finally get the recognition and respect I deserve at work.", author: "Jennifer M.", role: "Corporate Manager", imgId: 1011 },
  { text: "As an entrepreneur, I struggled with imposter syndrome. I now have the confidence to lead my team, make bold decisions, and grow my business with conviction.", author: "Emily R.", role: "Business Owner", imgId: 1012 },
  { text: "Sophie's coaching was instrumental in helping me develop my executive presence. I now lead meetings with confidence and have a clearer path for my career growth.", author: "Maria K.", role: "Marketing Director", imgId: 1025 },
  { text: "After a 5-year career break, my confidence was at an all-time low. Sophie helped me recognize my skills and translate them into a new career. I felt supported and understood.", author: "Jessica P.", role: "Return-to-Work Mom", imgId: 1028 },
  { text: "As a creative, self-doubt can be crippling. This coaching gave me practical tools to overcome creative blocks and value my work, which has directly led to better clients.", author: "Chloe T.", role: "Graphic Designer", imgId: 1014 },
  { text: "I needed to refine my leadership style. Sophie's guidance was insightful and direct, helping me to communicate more effectively and inspire my team during a critical transition.", author: "Linda H.", role: "Senior Executive", imgId: 1006 },
  { text: "Finding work-life balance felt impossible. Sophie helped me set boundaries and prioritize my well-being without sacrificing my business goals. It's been a game-changer.", author: "Rachel B.", role: "Tech Startup Founder", imgId: 1016 },
  { text: "Entering the job market was overwhelming. The coaching sessions gave me the confidence to network effectively, ace interviews, and land a job that I'm truly excited about.", author: "Megan S.", role: "Recent Graduate", imgId: 1019 },
];

const Testimonials: React.FC = () => {
  // Duplicate for seamless scroll
  const scrollTestimonials = [...testimonialData, ...testimonialData];

  return (
    <div className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark">What My Clients Are Saying</h2>
          <p className="mt-4 text-lg text-secondary">Real stories from women who have transformed their lives.</p>
        </div>
        
        <div className="relative max-w-7xl mx-auto overflow-hidden scroller-fade">
          <div className="flex w-max animate-scroll-slow hover:[animation-play-state:paused] py-4">
            {scrollTestimonials.map((t, index) => (
              <div key={`${t.author}-${index}`} className="w-96 flex-shrink-0 px-4">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col min-h-[300px] hover:shadow-xl transition-shadow duration-300">
                  <p className="text-secondary italic flex-grow text-lg leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center mt-6 pt-6 border-t border-slate-100">
                    <img 
                      src={`https://picsum.photos/id/${t.imgId}/200/200`} 
                      alt={`Profile of ${t.author}`} 
                      className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-primary-light"
                    />
                    <div>
                      <p className="font-bold text-primary-dark">{t.author}</p>
                      <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;