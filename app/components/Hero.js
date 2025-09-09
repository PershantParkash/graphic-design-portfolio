import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-emerald-100/20 to-cyan-100/20 rounded-full blur-2xl"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-slate-300/50 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-purple-300/40 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 gap-12 lg:gap-16">
        
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-8 lg:order-1">
          
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-full px-4 py-2 text-sm text-slate-600 shadow-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for new projects
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
              <span className="block">Hello, I'm a</span>
              <span className="block font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                Graphic Designer
              </span>
            </h1>
          </div>
          
          <div>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
              I believe great design lives at the intersection of creativity and simplicity. 
              Through thoughtful aesthetics and purposeful minimalism, I craft visual stories 
              that resonate and inspire.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
            {['Branding', 'UI/UX', 'Print Design', 'Illustration'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full text-sm text-slate-700 hover:bg-white/80 transition-colors duration-300">
                {skill}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <button className="group inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <span>View Portfolio</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm hover:bg-white/90 border border-slate-200/50 text-slate-700 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <span>Get in Touch</span>
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-md lg:max-w-lg lg:order-2">
          <div className="relative">
            {/* Main image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
             
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-200/60 to-slate-300/40 rounded-2xl"></div>
              <div className="absolute -inset-2 bg-white/70 backdrop-blur-sm rounded-xl"></div>
              
              {/* Profile image - now square */}
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/80">
                <Image
                  src="/profile.jpeg"
                  alt="Profile photo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg  animate-bounce shadow-lg"></div>
              {/* <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg rotate-12 animate-pulse animate-bounce  shadow-lg"></div> */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg animate-bounce shadow-lg"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg animate-bounce shadow-lg"></div>
            </div>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-slate-200/50">
              <div className="flex items-center gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-800">150+</div>
                  <div className="text-xs text-slate-600">Projects</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">5+</div>
                  <div className="text-xs text-slate-600">Years</div>
                </div>
                <div className="w-px h-8 bg-slate-300"></div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">98%</div>
                  <div className="text-xs text-slate-600">Satisfied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
//       {/* Enhanced background decoration */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-emerald-100/20 to-cyan-100/20 rounded-full blur-2xl"></div>
//       </div>

//       {/* Floating elements for visual interest */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-20 w-3 h-3 bg-slate-300/50 rounded-full animate-bounce"></div>
//         <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300/60 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-32 left-32 w-4 h-4 bg-purple-300/40 rounded-full animate-bounce"></div>
//       </div>
      
//       {/* Main content */}
//       <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 gap-12 lg:gap-16">
        
//         {/* Left side - Text content */}
//         <div className="flex-1 max-w-2xl text-center lg:text-left space-y-8 lg:order-1">
          
//           {/* Greeting badge */}
//           <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-full px-4 py-2 text-sm text-slate-600 shadow-sm">
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//             Available for new projects
//           </div>

//           {/* Headline */}
//           <div className="space-y-4">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
//               <span className="block">Hello, I'm a</span>
//               <span className="block font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
//                 Graphic Designer
//               </span>
//             </h1>
//           </div>
          
//           {/* Subtitle/Philosophy */}
//           <div>
//             <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
//               I believe great design lives at the intersection of creativity and simplicity. 
//               Through thoughtful aesthetics and purposeful minimalism, I craft visual stories 
//               that resonate and inspire.
//             </p>
//           </div>

//           {/* Skills tags */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
//             {['Branding', 'UI/UX', 'Print Design', 'Illustration'].map((skill) => (
//               <span key={skill} className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-full text-sm text-slate-700 hover:bg-white/80 transition-colors duration-300">
//                 {skill}
//               </span>
//             ))}
//           </div>
          
//           {/* Call to Actions */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
//             <button className="group inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
//               <span>View Portfolio</span>
//               <svg 
//                 className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </button>
//             <button className="inline-flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm hover:bg-white/90 border border-slate-200/50 text-slate-700 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-1">
//               <span>Get in Touch</span>
//             </button>
//           </div>
//         </div>

//         {/* Right side - Profile image */}
//         <div className="flex-1 max-w-md lg:max-w-lg lg:order-2">
//           <div className="relative">
//             {/* Main image container */}
//             <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] mx-auto">
//               {/* Decorative rings */}
//               {/* <div className="absolute -inset-4 bg-gradient-to-br from-slate-200/60 to-slate-300/40 rounded-2xl"></div>
//               <div className="absolute -inset-2 bg-white/70 backdrop-blur-sm rounded-xl"></div>
//                */}
//               {/* Profile image */}
//                <div className="absolute -inset-4 bg-gradient-to-br from-slate-200/60 to-slate-300/40 rounded-2xl"></div>
//                 <div className="absolute -inset-2 bg-white/70 backdrop-blur-sm rounded-xl"></div>
                
//               {/* <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/80"> */}
//                 <Image
//                   src="/profile.jpeg"
//                   alt="Profile photo"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>

//               {/* Decorative floating elements */}
//               <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg rotate-12 animate-bounce shadow-lg"></div>
//               <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg animate-pulse shadow-lg"></div>
//               <div className="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg animate-bounce shadow-lg"></div>
//             {/* </div> */}

//             {/* Statistics card positioned on top */}
//             <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-slate-200/50 z-20">
//               <div className="flex items-center gap-6 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-slate-800">150+</div>
//                   <div className="text-xs text-slate-600">Projects</div>
//                 </div>
//                 <div className="w-px h-8 bg-slate-300"></div>
//                 <div>
//                   <div className="text-2xl font-bold text-slate-800">5+</div>
//                   <div className="text-xs text-slate-600">Years</div>
//                 </div>
//                 <div className="w-px h-8 bg-slate-300"></div>
//                 <div>
//                   <div className="text-2xl font-bold text-slate-800">98%</div>
//                   <div className="text-xs text-slate-600">Satisfied</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-xs text-slate-500 font-light">Scroll to explore</span>
//           <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }