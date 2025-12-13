import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="container mx-auto py-12 px-4 flex justify-center mb-12">
      <div className="bg-primary-light p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-2xl">
        {!submitted ? (
          <div className="transition-opacity duration-300 ease-in opacity-100">
            <h3 className="text-3xl font-serif text-primary-dark text-center mb-4 font-bold">Get In Touch</h3>
            <p className="text-center text-secondary mb-8">
              Have a question or want to book a session? Send me a message!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-800 placeholder-gray-400 bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-800 placeholder-gray-400 bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  placeholder="Your Message" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-gray-800 placeholder-gray-400 bg-white"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent text-white font-bold py-4 px-6 rounded-full hover:bg-amber-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Send Message <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-2">Thank You!</h3>
            <p className="text-secondary text-lg">Your message has been sent. I will get back to you shortly.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);

export default Contact;