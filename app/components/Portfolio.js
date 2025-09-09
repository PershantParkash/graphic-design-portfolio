"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Portfolio() {
  const scrollRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Zenith Coffee Co.",
      category: "Branding & Identity",
      client: "Zenith Coffee Co.",
      description: "Complete brand identity for an artisanal coffee roastery. Created a sophisticated visual language that captures the essence of premium coffee culture.",
      image: "/3.jpeg",
      year: "2024"
    },
    {
      id: 2,
      title: "Mindful App",
      category: "UI/UX Design",
      client: "Serenity Tech",
      description: "Calming mobile app interface designed to guide users through their meditation journey with peaceful digital sanctuary design.",
      image: "/5.jpeg",
      year: "2024"
    },
    {
      id: 3,
      title: "Bloom Studio",
      category: "Print Design",
      client: "Bloom Botanical",
      description: "Luxury stationery and marketing materials celebrating the beauty of nature through organic shapes and botanical illustrations.",
      image: "/12.jpeg",
      year: "2023"
    },
    {
      id: 4,
      title: "Urban Fitness",
      category: "Branding & Digital",
      client: "Urban Fitness Co.",
      description: "Dynamic brand identity combining bold geometry with energetic colors to motivate and inspire an active urban lifestyle.",
      image: "/10.jpeg",
      year: "2023"
    },
    {
      id: 5,
      title: "Lumina Tech",
      category: "Corporate Identity",
      client: "Lumina Solutions",
      description: "Professional corporate identity balancing innovation with trustworthiness for enterprise technology consultancy clients.",
      image: "/7.jpeg",
      year: "2023"
    }
  ];

  const scroll = (direction) => {
    if (direction === 'left' && currentProject > 0) {
      setCurrentProject(currentProject - 1);
    } else if (direction === 'right' && currentProject < projects.length - 1) {
      setCurrentProject(currentProject + 1);
    }
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-orange-100/20 to-pink-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-full px-4 py-2 text-sm text-slate-600 shadow-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              My Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 leading-tight">
              My <span className="font-medium bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light max-w-lg">
              Explore my creative projects spanning branding, digital design, and visual identity solutions.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={currentProject === 0}
              className={`group inline-flex items-center justify-center w-12 h-12 backdrop-blur-sm border border-slate-200/50 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                currentProject === 0 
                  ? 'bg-white/40 text-slate-400 cursor-not-allowed' 
                  : 'bg-white/70 hover:bg-white/90 text-slate-700'
              }`}
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${currentProject === 0 ? '' : 'group-hover:-translate-x-1'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={currentProject === projects.length - 1}
              className={`group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                currentProject === projects.length - 1
                  ? 'bg-slate-400 text-white cursor-not-allowed'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${currentProject === projects.length - 1 ? '' : 'group-hover:translate-x-1'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Single Project Display */}
        <div className="relative flex justify-center mb-12">
          <div className="w-full max-w-5xl group cursor-pointer">
            <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              
              {/* Project Description - Top Right */}
              <div className="absolute top-6 right-6 z-10 max-w-80">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        {currentProjectData.category}
                      </span>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <span className="text-xs text-slate-400">{String(currentProject + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 leading-tight">
                      {currentProjectData.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {currentProjectData.description}
                    </p>
                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-xs text-slate-500">Client: {currentProjectData.client}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Image - Full size without background color overlay */}
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src={currentProjectData.image}
                  alt={currentProjectData.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105 p-8"
                  style={{
                    objectPosition: 'center'
                  }}
                />

                {/* Subtle decorative elements */}
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg rotate-12 animate-pulse"></div>
                <div className="absolute top-1/2 left-6 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 rounded-3xl"></div>
            </div>
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-slate-900 w-8' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200/50 shadow-lg">
            <span className="text-2xl font-light text-slate-900">
              {String(currentProject + 1).padStart(2, '0')}
            </span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">
              {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Bottom Stats - Personal Portfolio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "25+", label: "Happy Clients" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-4 shadow-lg">
                <div className="text-2xl font-light text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}