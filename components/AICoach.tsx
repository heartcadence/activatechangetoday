import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, User, Bot, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AICoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Sophie's AI Assistant. How can I help you build confidence today? Ask me anything about our coaching programs!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    // Optimistically add user message
    const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
         throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are the friendly and empathetic AI assistant for "Activate Change Today", a coaching service by Sophie Ashley.
        
        Sophie Ashley is a Certified Professional Coach (CPC) and Energy Leadership™ Index Master Practitioner with 15+ years of corporate experience.
        
        Services include:
        1. Reclaiming Your Power at Home: For navigating divorce, loss, and life transitions.
        2. Thriving in Your Corporate Career: For executive presence, overcoming imposter syndrome, and promotions.
        3. Leading with Edge as an Entrepreneur: For leadership skills, scaling business, and confidence.
        
        Key info:
        - Free 30-minute discovery session available.
        - Coaching helps build unshakeable confidence.
        - Not therapy; it is forward-focused on goals.
        - Sessions are confidential.
        
        Tone: Encouraging, professional, warm, and confident. Keep answers concise (under 3 sentences usually).
        If asked about booking, direct them to the contact form or "Book a Session" button.
      `;

      // Convert messages to Content format for the API
      // We send the conversation history to maintain context
      const contents = newMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const text = response.text || "I'm having trouble connecting right now. Please try again later.";
      
      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("AI Error:", error);
      // Graceful error message
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently offline (API configuration issue). Please use the contact form to reach Sophie directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl mb-4 border border-slate-100 flex flex-col overflow-hidden animate-fade-in-up" style={{ height: '500px', maxHeight: '80vh' }}>
          {/* Header */}
          <div className="bg-primary-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-white/20 rounded-full">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Sophie's Assistant</h3>
                <p className="text-xs text-slate-300">Ask me anything!</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-accent' : 'bg-primary'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-secondary border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-3 bg-white border border-slate-100 rounded-2xl rounded-tl-none text-secondary shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-xs">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
                className="flex-grow px-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm text-secondary"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-secondary' : 'bg-accent'} hover:scale-110 transition-transform duration-200 text-white p-4 rounded-full shadow-lg flex items-center justify-center`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-8 h-8" />}
      </button>
    </div>
  );
};

export default AICoach;