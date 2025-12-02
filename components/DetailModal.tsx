import React from 'react';
import { Project } from '../types';
import { CloseIcon, PlayIcon } from './Icons';

interface DetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isContact = project.category === 'Contact';
  const primaryButtonText = isContact ? 'Connect' : 'View Details';
  
  const handlePrimaryClick = () => {
      if (project.link) {
          window.open(project.link, '_blank');
      }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 overflow-y-auto pt-10 pb-10 px-4 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-[#181818] w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl relative animate-scale-up text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#181818] rounded-full p-2 hover:bg-[#333] transition"
        >
          <CloseIcon className="w-6 h-6 text-white" />
        </button>

        {/* Header Media */}
        <div className="relative aspect-video w-full">
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8">
                 <h2 className="text-3xl md:text-5xl font-black mb-4 drop-shadow-md">{project.title}</h2>
                 <div className="flex gap-4">
                    <button 
                        onClick={handlePrimaryClick}
                        className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-white/80 transition"
                    >
                        <PlayIcon className="w-6 h-6 fill-black" />
                        <span>{primaryButtonText}</span>
                    </button>
                    {!isContact && (
                        <button className="bg-gray-600/60 text-white px-6 py-2 rounded font-bold hover:bg-gray-600/40 transition">
                            <span>More Info</span>
                        </button>
                    )}
                 </div>
            </div>
        </div>

        {/* Content */}
        <div className="p-8 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
                <div className="flex items-center gap-4 text-sm md:text-base">
                    <span className="text-[#46d369] font-bold">{project.match}% Match</span>
                    <span className="text-gray-400">{project.year}</span>
                    <span className="border border-gray-500 px-1 text-xs">HD</span>
                </div>
                
                <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                    {project.description}
                </p>

                <div>
                    <h3 className="text-xl font-bold mb-3">
                        {project.category === 'Skill' ? 'Proficiency' : 'Tags'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(t => (
                            <span key={t} className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm border border-gray-700">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-sm space-y-4">
                <div className="text-gray-400">
                    <span className="text-gray-600 block mb-1">Category:</span>
                    {project.genre.join(', ')}
                </div>
                {project.duration && (
                    <div className="text-gray-400">
                        <span className="text-gray-600 block mb-1">Duration:</span>
                        {project.duration}
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;