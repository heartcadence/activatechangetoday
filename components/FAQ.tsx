import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  { question: "Who is confidence coaching for?", answer: "Confidence coaching is for any woman who feels she's not living up to her full potential due to self-doubt, past experiences, or challenging life transitions. Whether you're navigating changes at home, striving for more in your career, or leading a business, this coaching provides the tools to build unshakeable self-belief." },
  { question: "What can I expect from a coaching session?", answer: "Our sessions are a safe, confidential space for you to explore your challenges and aspirations. We'll work together to identify limiting beliefs, set meaningful goals, and develop practical strategies. Expect empathetic listening, powerful questions, and actionable steps to move you forward. It's a collaborative partnership focused entirely on your growth." },
  { question: "How is coaching different from therapy?", answer: "While both are valuable, therapy often focuses on healing past trauma and treating clinical conditions. Coaching is forward-focused, centered on setting and achieving future goals. We work on closing the gap between where you are now and where you want to be, empowering you to create the life you desire." },
  { question: "How long does the coaching process take?", answer: "The duration varies for each individual. Most clients experience significant shifts within a 3-month period. We offer different packages to suit your needs, and progress is often noticeable after just a few sessions. The goal is to equip you with sustainable skills, not to create long-term dependency." },
  { question: "Is there a free consultation?", answer: "Absolutely. I offer a complimentary 30-minute discovery session. This is a chance for us to connect, discuss your goals, and see if we're a good fit for each other. There's no obligation, just an open conversation to explore the possibilities." },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-dark">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-secondary max-w-3xl mx-auto">
            Find answers to common questions about confidence coaching and how it works.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-md overflow-hidden border border-slate-100">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-slate-200 last:border-0">
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none hover:bg-slate-100 transition-colors"
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-semibold text-primary-dark pr-4">{item.question}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-primary transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5 text-secondary leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-serif text-primary-dark mb-4">Still have questions?</h2>
          <p className="text-secondary text-lg max-w-xl mx-auto mb-6">
            I'd love to hear from you. Reach out, and let's start a conversation.
          </p>
          <a href="#contact" className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg">
            Contact Me Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;