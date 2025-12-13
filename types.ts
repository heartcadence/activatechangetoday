export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  imgId: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}