
import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { CloseIcon, PlayIcon, InfoIcon } from './Icons';

interface DetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project && modalRef.current) {
      modalRef.current.focus();
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const isContact = project.category === 'Contact';
  const primaryButtonText = isContact ? 'Connect' : 'View Details';
  const hasLink = Boolean(project.link); 
  
  const handlePrimaryClick = () => {
      if (project.link) {
          window.open(project.link, '_blank');
      }
  };

  const handleMoreInfoClick = () => {
     const desc = document.getElementById('project-description');
     if (desc) desc.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-xl overflow-y-auto pt-10 pb-10 px-4 animate-fade-in" 
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="project-description"
    >
      <div 
        ref={modalRef}
        className="bg-[#181818] w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl relative animate-scale-up text-white focus:outline-none ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#181818]/60 backdrop-blur-md rounded-full p-2 hover:bg-[#333] hover:ring-2 hover:ring-white transition focus:outline-none focus:ring-2 focus:ring-white group"
          aria-label="Close details modal"
        >
          <CloseIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Header Media */}
        <div className="relative aspect-video w-full group/video">
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
            
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#181818]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-[90%] z-20">
                 <h2 id="modal-title" className="text-3xl md:text-5xl font-black mb-4 drop-shadow-lg tracking-tight leading-none">
                    {project.title}
                 </h2>
                 <div className="flex flex-wrap gap-4">
                    {hasLink && (
                        <button 
                            onClick={handlePrimaryClick}
                            className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded font-bold hover:bg-gray-200 transition transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
                            aria-label={`${primaryButtonText} for ${project.title}`}
                        >
                            <PlayIcon className="w-6 h-6 fill-black" />
                            <span>{primaryButtonText}</span>
                        </button>
                    )}
                    
                    {!isContact && (
                        <button 
                            onClick={handleMoreInfoClick}
                            className="flex items-center gap-2 bg-gray-500/40 text-white px-6 py-2.5 rounded font-bold hover:bg-gray-500/60 transition transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-500/50 backdrop-blur-md shadow-lg"
                            aria-label="Read description"
                        >
                            <InfoIcon className="w-6 h-6" />
                            <span>More Info</span>
                        </button>
                    )}
                 </div>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8 bg-[#181818]">
            <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-4 text-sm md:text-base font-medium">
                    <span className="text-[#46d369] font-bold">{project.match}% Match</span>
                    <span className="text-gray-400">{project.year}</span>
                    <span className="border border-gray-500 px-1 text-xs rounded-sm">HD</span>
                </div>
                
                <div id="project-description" className="text-base md:text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                    {project.description}
                </div>

                <div className="pt-6 border-t border-gray-700">
                    <h3 className="text-xl font-bold mb-3 text-white">
                        {project.category === 'Skill' ? 'Proficiency' : 'Tags'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(t => (
                            <span key={t} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-gray-500 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-sm space-y-5">
                <div className="text-gray-400">
                    <span className="text-gray-500 block mb-1 font-semibold uppercase tracking-wider text-xs">Category</span>
                    <span className="text-white hover:underline cursor-pointer">{project.genre.join(', ')}</span>
                </div>
                {project.duration && (
                    <div className="text-gray-400">
                        <span className="text-gray-500 block mb-1 font-semibold uppercase tracking-wider text-xs">Duration</span>
                        <span className="text-white">{project.duration}</span>
                    </div>
                )}
                <div className="text-gray-400">
                     <span className="text-gray-500 block mb-1 font-semibold uppercase tracking-wider text-xs">Maturity Rating</span>
                     <span className="border border-gray-500 px-2 py-0.5 text-xs text-white rounded-sm inline-block">U/A 13+</span>
                     <span className="block mt-1 text-xs">Suitable for Recruiters</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
