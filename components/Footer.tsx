import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-slate-400">&copy; 2025 Activate Change Today. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;