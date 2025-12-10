
import React, { useRef, useEffect } from 'react';
import { Project } from '../types';
import { DownloadIcon, InfoIcon } from './Icons';

interface HeroProps {
  project: Project;
  onExploreClick: () => void;
  onAboutClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ project, onExploreClick, onAboutClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
        // Ensure initial state matches the video element
        videoRef.current.muted = true;
        
        // Attempt autoplay
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay was prevented
                console.log("Autoplay prevented");
            });
        }
    }
  }, [project.videoUrl]);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#141414]" role="banner">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Background Video or Image */}
        {project.videoUrl ? (
             <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline
                poster={project.imageUrl}
                className="absolute inset-0 w-full h-full object-cover slow-zoom"
             >
                 <source src={project.videoUrl} type="video/mp4" />
             </video>
        ) : (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover object-center slow-zoom"
            />
        )}
        
        {/* Cinematic Gradients - Darker overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent h-64 bottom-0 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/70 via-transparent to-transparent h-48 z-10" />
      </div>

      {/* Content */}
      <div className="absolute top-[30%] left-4 md:left-16 max-w-3xl z-40 space-y-6 pr-4">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-2 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
             <div className="flex flex-col justify-center h-6 md:h-8">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
                    <path d="M0 0H7.32432L17.7297 19.3421V0H24V40H16.6757L6.27027 20.6579V40H0V0Z" fill="#E50914"/>
                </svg>
             </div>
             <span className="text-gray-300 font-bold tracking-[0.2em] text-xs md:text-sm uppercase pt-1 drop-shadow-md">
                FEATURED PROFILE
             </span>
        </div>
        
        {/* Name / Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl leading-[1.0] max-w-5xl tracking-tight uppercase opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          {project.title}
        </h1>

        {/* Contact Info Subtitle */}
        {project.description && (
            <div className="flex flex-col gap-1 text-white text-xl md:text-2xl font-medium drop-shadow-lg opacity-90 opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <span className="whitespace-pre-line leading-relaxed">{project.description}</span>
            </div>
        )}

        {/* Buttons - High Z-Index to ensure clickability */}
        <div className="flex items-center gap-4 pt-6 relative z-50 opacity-0 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <button 
            onClick={onExploreClick}
            className="flex items-center gap-3 bg-[#E50914] text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-[#b2070f] transition hover:scale-105 active:scale-95 duration-200 text-lg md:text-xl cursor-pointer shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600/50"
            aria-label="Download Resume"
          >
            <DownloadIcon className="w-6 h-6 md:w-7 md:h-7" />
            <span>Download Resume</span>
          </button>
          
          <button 
            onClick={onAboutClick}
            className="flex items-center gap-3 bg-transparent border-2 border-white/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-white/10 hover:border-white transition hover:scale-105 active:scale-95 duration-200 text-lg md:text-xl backdrop-blur-sm cursor-pointer shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50"
            aria-label="Scroll to Contact section"
          >
            <InfoIcon className="w-6 h-6 md:w-7 md:h-7" />
            <span>Contact Me</span>
          </button>
        </div>
      </div>

       {/* Video Controls & Maturity Rating */}
       <div className="absolute right-0 bottom-24 md:bottom-32 z-50 flex items-center justify-end gap-4 w-full px-4 md:px-16 pointer-events-auto">
           {/* Maturity Rating */}
           <div className="hidden md:flex bg-gray-500/30 border-l-4 border-gray-100 py-1 pl-3 pr-8 backdrop-blur-sm text-white font-medium text-sm">
               JOB READY
           </div>
       </div>
    </div>
  );
};

export default Hero;
