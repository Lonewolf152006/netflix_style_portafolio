

import React from 'react';
import { Project } from '../types';

interface SkillsGridProps {
  title: string;
  skills: Project[];
  onSkillClick: (skill: Project) => void;
  isLoading?: boolean;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ title, skills, onSkillClick, isLoading = false }) => {
  
  const getStarCount = (match: number) => {
    return Math.round(match / 20);
  };

  const handleKeyDown = (e: React.KeyboardEvent, skill: Project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSkillClick(skill);
    }
  };

  return (
    <section className="px-4 md:px-16 w-full" aria-label={title}>
       <h2 className="text-white text-lg md:text-2xl font-semibold mb-6 border-l-4 border-[#E50914] pl-4">{title}</h2>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6" role="list">
          {isLoading ? (
             // Skeleton Loading State
             Array.from({ length: 7 }).map((_, idx) => (
                <div 
                   key={idx} 
                   className="aspect-[3/4] bg-[#2f2f2f] rounded-lg animate-pulse"
                />
             ))
          ) : (
            skills.map((skill) => {
             const stars = getStarCount(skill.match);
             return (
             <div
                key={skill.id}
                onClick={() => onSkillClick(skill)}
                className="group relative aspect-[3/4] bg-[#181818] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-white/5 hover:border-white/30 focus:outline-none focus:ring-4 focus:ring-white/80"
                role="button"
                aria-haspopup="dialog"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, skill)}
                aria-label={`View details for ${skill.title}, ${skill.match}% proficiency`}
             >
                {/* Background Image */}
                <img 
                  src={skill.imageUrl} 
                  alt={skill.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />

                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color || 'from-gray-800 to-black'} opacity-70 group-hover:opacity-80 transition-opacity duration-300 mix-blend-hard-light`} />
                
                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                   {/* Icon */}
                   <div className="w-16 h-16 md:w-20 md:h-20 mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl relative z-10">
                      {skill.icon ? (
                          <img 
                            src={skill.icon} 
                            alt={skill.title} 
                            className="w-full h-full object-contain filter drop-shadow-lg" 
                          />
                      ) : (
                          <div className="w-full h-full bg-white/10 rounded-full animate-pulse" />
                      )}
                   </div>
                   
                   {/* Title */}
                   <h3 className="text-center text-sm md:text-base font-bold text-gray-100 tracking-wide drop-shadow-md group-hover:text-white mb-2 relative z-10">
                     {skill.title}
                   </h3>
                   
                   {/* Star Rating System */}
                   <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 relative z-10" aria-label={`${stars} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <svg 
                            key={i} 
                            className={`w-3 h-3 md:w-4 md:h-4 ${i < stars ? 'text-[#E50914] drop-shadow-[0_0_3px_rgba(229,9,20,0.8)]' : 'text-gray-400'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                   </div>

                   {/* Match Badge */}
                   <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] text-gray-300 font-medium transform translate-y-4 group-hover:translate-y-0 delay-75 relative z-10">
                       {skill.match}% Proficiency
                   </div>
                </div>

                {/* Subtle sheen effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             </div>
          )})}
          )}
       </div>
    </section>
  );
};

export default SkillsGrid;