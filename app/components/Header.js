"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="group flex items-center gap-3 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-lg font-medium text-slate-800 group-hover:text-slate-600 transition-colors duration-300">
                Pershant Parkash
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300 relative group"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('book-meeting')}
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('book-meeting')}
              className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Let's Talk
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-200/50 hover:bg-white/90 transition-all duration-300"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-full h-0.5 bg-slate-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-slate-600 mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-slate-600 mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-3 bg-white/90 backdrop-blur-md rounded-2xl mt-4 border border-slate-200/50 shadow-lg">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-6 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50/50 font-medium transition-all duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-6 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50/50 font-medium transition-all duration-300"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('book-meeting')}
              className="block w-full text-left px-6 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50/50 font-medium transition-all duration-300"
            >
              Contact
            </button>
            <div className="px-6 pt-2">
              <button 
                onClick={() => scrollToSection('book-meeting')}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Let's Talk
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}