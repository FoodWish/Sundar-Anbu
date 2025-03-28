import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Sundar Anbu
        </div>
        <p className="text-slate-600 mt-4 md:mt-0">© {new Date().getFullYear()} All rights reserved.</p>
      
      </div>
    </footer>
  );
};

export default Footer;
