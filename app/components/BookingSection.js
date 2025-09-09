"use client";
// import { useEffect, useRef } from 'react';

// export default function BookingSection() {
//   const calendlyRef = useRef(null);

//   useEffect(() => {
//     // Load Calendly script
//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.async = true;
//     document.head.appendChild(script);

//     return () => {
//       // Cleanup script on unmount
//       const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
//       if (existingScript) {
//         document.head.removeChild(existingScript);
//       }
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
//       {/* Background decorations matching your hero section */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-bl from-emerald-100/20 to-cyan-100/20 rounded-full blur-2xl"></div>
//       </div>

//       {/* Floating elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 right-20 w-3 h-3 bg-slate-300/50 rounded-full animate-bounce"></div>
//         <div className="absolute top-40 left-32 w-2 h-2 bg-blue-300/60 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-32 right-32 w-4 h-4 bg-purple-300/40 rounded-full animate-bounce"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 py-20">
        
//         {/* Header section */}
//         <div className="text-center space-y-6 mb-12 max-w-3xl">
//           {/* Status badge */}
//           <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-full px-4 py-2 text-sm text-slate-600 shadow-sm">
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//             Ready to collaborate
//           </div>

//           {/* Main heading */}
//           <div className="space-y-4">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
//               <span className="block">Let's discuss your</span>
//               <span className="block font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
//                 next project
//               </span>
//             </h2>
//           </div>

//           {/* Subtitle */}
//           <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
//             Book a 15-minute consultation to explore how we can bring your creative vision to life. 
//             Let's create something extraordinary together.
//           </p>

//           {/* Benefits tags */}
//           <div className="flex flex-wrap justify-center gap-3 pt-4">
//             {['Free Consultation', 'Quick Response', 'Custom Solutions', 'Expert Guidance'].map((benefit) => (
//               <span key={benefit} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full text-sm text-slate-700 hover:bg-white/80 transition-colors duration-300">
//                 {benefit}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Calendly widget container */}
//         <div className="w-full max-w-4xl">
//           <div className="relative">
//             {/* Decorative background */}
//             <div className="absolute -inset-4 bg-gradient-to-br from-slate-200/40 to-slate-300/30 rounded-3xl"></div>
//             <div className="absolute -inset-2 bg-white/60 backdrop-blur-sm rounded-2xl"></div>
            
//             {/* Main widget container */}
//             <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden">
//               {/* Calendly widget */}
//               <div 
//                 ref={calendlyRef}
//                 className="calendly-inline-widget" 
//                 data-url="https://calendly.com/pershantparkash/15-minute-meeting-1"
//                 style={{ minWidth: '320px', height: '700px', width: '100%' }}
//               ></div>
//             </div>

//             {/* Decorative floating elements */}
//             {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg animate-bounce shadow-lg"></div>
//             <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg animate-pulse shadow-lg"></div>
//             <div className="absolute top-1/4 -left-6 w-4 h-4 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg animate-bounce shadow-lg"></div> */}
//           </div>
//         </div>

//         {/* Bottom note */}
//         <div className="text-center mt-12 max-w-md mx-auto">
//           <p className="text-sm text-slate-500 font-light">
//             Can't find a suitable time? Feel free to{' '}
//             <a href="mailto:your-email@example.com" className="text-slate-700 hover:text-slate-900 underline transition-colors duration-200">
//               reach out directly
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef } from 'react';

export default function BookingSection() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background decorations matching your hero section */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-bl from-emerald-100/20 to-cyan-100/20 rounded-full blur-2xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-3 h-3 bg-slate-300/50 rounded-full animate-bounce"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-blue-300/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-purple-300/40 rounded-full animate-bounce"></div>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 py-20">
        
        {/* Header section */}
        <div className="text-center space-y-6 mb-12 max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-full px-4 py-2 text-sm text-slate-600 shadow-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Ready to collaborate
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-tight">
              <span className="block">Let's discuss your</span>
              <span className="block font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                next project
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
            Book a 15-minute consultation to explore how we can bring your creative vision to life. 
            Let's create something extraordinary together.
          </p>

          {/* Benefits tags */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {['Free Consultation', 'Quick Response', 'Custom Solutions', 'Expert Guidance'].map((benefit) => (
              <span key={benefit} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full text-sm text-slate-700 hover:bg-white/80 transition-colors duration-300">
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Calendly widget container */}
        <div className="w-full max-w-4xl">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-slate-200/40 to-slate-300/30 rounded-3xl"></div>
            <div className="absolute -inset-2 bg-white/60 backdrop-blur-sm rounded-2xl"></div>
            
            {/* Main widget container */}
            <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden">
              {/* Calendly widget */}
              <div 
                ref={calendlyRef}
                className="calendly-inline-widget" 
                data-url="https://calendly.com/pershantparkash/15-minute-meeting-1"
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
              ></div>
            </div>

            {/* Decorative floating elements */}
            {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg animate-pulse shadow-lg"></div>
            <div className="absolute top-1/4 -left-6 w-4 h-4 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg animate-bounce shadow-lg"></div> */}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12 max-w-md mx-auto">
          <p className="text-sm text-slate-500 font-light">
            Can't find a suitable time? Feel free to{' '}
            <a href="mailto:your-email@example.com" className="text-slate-700 hover:text-slate-900 underline transition-colors duration-200">
              reach out directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}