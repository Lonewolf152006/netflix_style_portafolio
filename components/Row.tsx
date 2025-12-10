import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { ChevronDownIcon, InfoIcon } from './Icons';

interface RowProps {
  title: string;
  projects: Project[];
  onProjectClick: (project: Project) => void;
  isLoading?: boolean;
}

const Row: React.FC<RowProps> = ({ title, projects, onProjectClick, isLoading = false }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, project: Project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onProjectClick(project);
    }
  };

  if (!isLoading && projects.length === 0) return null;

  return (
    <section 
        className="relative group/row px-4 md:px-16 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Row of ${title}`}
    >
      <h2 className="text-white text-lg md:text-2xl font-semibold hover:text-gray-300 cursor-pointer transition-colors inline-block mb-4">
        {title}
      </h2>
      
      <div className="relative group -mx-4 md:-mx-16">
         {/* Left Arrow */}
        <button 
            className={`absolute top-0 bottom-0 left-0 w-12 md:w-16 bg-black/50 z-20 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-all duration-300 opacity-0 ${!isLoading && isHovered ? 'opacity-100' : ''} focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            type="button"
            disabled={isLoading}
        >
            <ChevronDownIcon className="w-6 h-6 md:w-8 md:h-8 text-white rotate-90" />
        </button>

        {/* Scroll Container */}
        <div 
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth py-8 px-4 md:px-16"
          role="list"
        >
          {isLoading ? (
             // Skeleton Loading State
             Array.from({ length: 6 }).map((_, idx) => (
                <div 
                    key={idx} 
                    className="flex-none w-[200px] md:w-[280px] lg:w-[320px] aspect-video bg-[#2f2f2f] rounded-sm animate-pulse" 
                />
             ))
          ) : (
            projects.map((project) => {
            const isContact = project.category === 'Contact';
            // Specific hover styles for Contact buttons
            const contactHoverStyle = isContact && project.color 
                ? { 
                    boxShadow: `0 0 20px ${project.color}`,
                    borderColor: project.color
                  }
                : {};
            
            return (
            <div 
              key={project.id} 
              className={`relative flex-none w-[200px] md:w-[280px] lg:w-[320px] aspect-video cursor-pointer transition-all duration-500 delay-100 ease-in-out hover:scale-110 hover:z-40 rounded-sm overflow-hidden group/card bg-[#181818] hover:shadow-[0_10px_20px_rgba(0,0,0,0.8)] focus:outline-none focus:ring-4 focus:ring-white/80 focus:z-30 focus:scale-105 ring-offset-2 ring-offset-black ${isContact ? 'hover:border-b-4' : 'shadow-lg'}`}
              style={hoveredCardId === project.id ? contactHoverStyle : {}}
              onClick={() => onProjectClick(project)}
              onMouseEnter={() => setHoveredCardId(project.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              role="button"
              aria-haspopup="dialog"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, project)}
              aria-label={`View details for ${project.title}, ${project.match}% match`}
            >
              {/* Always Image, No Video */}
              <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  loading="lazy" 
                  className="w-full h-full object-cover object-center"
              />

              {/* Progress Bar for Ongoing Items */}
              {project.genre.includes('Ongoing') && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 z-10">
                      <div 
                          className="h-full bg-[#E50914]" 
                          style={{ width: `${project.match}%` }}
                      />
                  </div>
              )}
              
              {/* Card Hover Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-100 flex flex-col justify-end p-4">
                 
                 {/* Title with optional icon */}
                 <div className="flex items-center gap-2 mb-2 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                    {project.icon && (
                        <img src={project.icon} alt="" className="w-5 h-5 object-contain filter drop-shadow-md" />
                    )}
                    <h3 className="text-white text-sm md:text-base font-bold drop-shadow-md line-clamp-1">{project.title}</h3>
                 </div>
                 
                 {/* Metadata Row */}
                 <div className="flex items-center gap-2 text-[10px] md:text-xs text-green-400 font-bold mb-2 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300 delay-75">
                     <span>{project.match}% Match</span>
                     <span className="text-gray-400 border border-gray-500 px-1 rounded-[2px] text-[9px]">HD</span>
                     <span className="text-gray-300 font-normal">{project.year}</span>
                 </div>

                 {/* Tech Tags */}
                 <div className="flex flex-wrap gap-1.5 text-[10px] text-gray-300 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300 delay-100">
                    {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="flex items-center justify-center after:content-['•'] after:ml-1.5 after:text-gray-600 last:after:content-none">
                            {tech}
                        </span>
                    ))}
                 </div>
                 
                 {project.genre.includes('Ongoing') && (
                     <div className="mt-2 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">In Progress</div>
                 )}

                 {/* View Details Button - Visual Indicator */}
                 {!project.genre.includes('Ongoing') && !project.icon && (
                    <div className="mt-3 flex items-center gap-2 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300 delay-100 opacity-0 group-hover/card:opacity-100">
                        <div className="bg-white rounded-full p-2 hover:bg-gray-200 transition shadow-lg cursor-pointer">
                            <InfoIcon className="w-4 h-4 text-black" />
                        </div>
                    </div>
                 )}
                 
                 {/* Contact "Connect" Call to Action */}
                 {isContact && (
                     <div className="mt-2 text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest flex items-center gap-1 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300 delay-100">
                         <span>Connect</span>
                         <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                     </div>
                 )}
              </div>
            </div>
            )})}
          )}
        </div>

        {/* Right Arrow */}
         <button 
            className={`absolute top-0 bottom-0 right-0 w-12 md:w-16 bg-black/50 z-20 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-all duration-300 opacity-0 ${!isLoading && isHovered ? 'opacity-100' : ''} focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            type="button"
            disabled={isLoading}
        >
            <ChevronDownIcon className="w-6 h-6 md:w-8 md:h-8 text-white -rotate-90" />
        </button>
      </div>
    </section>
  );
};

export default Row;