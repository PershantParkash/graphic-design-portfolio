"use client";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side - CTA */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
                Ready to bring your
                <span className="block font-medium bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  vision to life?
                </span>
              </h3>
              <p className="text-lg text-slate-300 mb-8 font-light leading-relaxed">
                Let's collaborate and create something extraordinary together. 
                Every great design starts with a conversation.
              </p>
              <button 
                onClick={() => scrollToSection('book-meeting')}
                className="group inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span>Start a Project</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right side - Navigation & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-medium text-white mb-6">Navigation</h4>
                <nav className="space-y-4">
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="block text-slate-300 hover:text-white transition-colors duration-300 font-light"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="block text-slate-300 hover:text-white transition-colors duration-300 font-light"
                  >
                    Portfolio
                  </button>
                  <button 
                    onClick={() => scrollToSection('book-meeting')}
                    className="block text-slate-300 hover:text-white transition-colors duration-300 font-light"
                  >
                    Book Meeting
                  </button>
                </nav>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-medium text-white mb-6">Connect</h4>
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@designer.com" 
                    className="block text-slate-300 hover:text-white transition-colors duration-300 font-light"
                  >
                    pershantparkash@gmail.com
                  </a>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    >
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    >
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    >
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    >
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.745.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.998 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700/50 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Logo & Copyright */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-400 rounded-lg flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-sm">PP</span>
                </div>
                <span className="text-lg font-medium text-white">Pershant Parkash</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
              <p className="text-sm text-slate-400 font-light">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Back to top */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm font-light">Back to top</span>
              <div className="w-8 h-8 border border-slate-600 rounded-full flex items-center justify-center group-hover:border-slate-400 transition-colors duration-300">
                <svg 
                  className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}