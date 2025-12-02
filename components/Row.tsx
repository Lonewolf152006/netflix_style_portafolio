import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { ChevronDownIcon, PlayIcon } from './Icons';

interface RowProps {
  title: string;
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const Row: React.FC<RowProps> = ({ title, projects, onProjectClick }) => {
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

  if (projects.length === 0) return null;

  return (
    <div 
        className="relative group/row px-4 md:px-16 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-white text-lg md:text-2xl font-semibold hover:text-gray-300 cursor-pointer transition-colors inline-block mb-4">
        {title}
      </h2>
      
      <div className="relative group -mx-4 md:-mx-16">
         {/* Left Arrow */}
        <div 
            className={`absolute top-0 bottom-0 left-0 w-12 md:w-16 bg-black/50 z-20 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-all duration-300 opacity-0 ${isHovered ? 'opacity-100' : ''}`}
            onClick={() => scroll('left')}
        >
            <ChevronDownIcon className="w-6 h-6 md:w-8 md:h-8 text-white rotate-90" />
        </div>

        {/* Scroll Container */}
        <div 
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth py-4 px-4 md:px-16"
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative flex-none w-[200px] md:w-[280px] lg:w-[320px] aspect-video cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:z-30 rounded-sm overflow-hidden group/card shadow-lg bg-[#181818]"
              onClick={() => onProjectClick(project)}
              onMouseEnter={() => setHoveredCardId(project.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              {/* Conditional Video or Image */}
              {hoveredCardId === project.id && project.videoUrl ? (
                <video
                    src={project.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
              ) : (
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    loading="lazy" 
                    className="w-full h-full object-cover object-center"
                />
              )}

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
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                 <h3 className="text-white text-sm md:text-base font-bold drop-shadow-md">{project.title}</h3>
                 
                 {/* Tech Tags */}
                 <div className="flex flex-wrap gap-2 text-[10px] text-gray-300 mt-2">
                    {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="border border-gray-500/50 bg-black/50 px-1.5 py-0.5 rounded">{tech}</span>
                    ))}
                 </div>
                 
                 {project.genre.includes('Ongoing') && (
                     <div className="mt-1 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">In Progress</div>
                 )}

                 {/* Play Trailer Button - Visual Indicator */}
                 {!project.genre.includes('Ongoing') && (
                    <div className="mt-3 flex items-center gap-2 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300 delay-75">
                        <div className="bg-white rounded-full p-1.5 hover:bg-gray-200 transition">
                            <PlayIcon className="w-4 h-4 text-black fill-current" />
                        </div>
                        <span className="text-[10px] md:text-xs font-bold text-white">Play Trailer</span>
                    </div>
                 )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
         <div 
            className={`absolute top-0 bottom-0 right-0 w-12 md:w-16 bg-black/50 z-20 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-all duration-300 opacity-0 ${isHovered ? 'opacity-100' : ''}`}
            onClick={() => scroll('right')}
        >
            <ChevronDownIcon className="w-6 h-6 md:w-8 md:h-8 text-white -rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default Row;