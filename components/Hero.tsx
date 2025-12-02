import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';
import { DownloadIcon, InfoIcon } from './Icons';

interface HeroProps {
  project: Project;
  onExploreClick: () => void;
  onAboutClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ project, onExploreClick, onAboutClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    // Reset loaded state when video source changes
    setIsVideoLoaded(false);
    
    if (videoElement) {
        // CRITICAL: defaultMuted is required for React to render the muted attribute correctly in DOM
        videoElement.defaultMuted = true;
        videoElement.muted = true;
        
        const attemptPlay = async () => {
            try {
                await videoElement.play();
                setIsVideoLoaded(true);
            } catch (err) {
                console.warn("Autoplay prevented:", err);
                // Fallback: if play fails, we might need user interaction, 
                // but muted usually bypasses this.
            }
        };

        attemptPlay();
    }
  }, [project.videoUrl]);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#141414]">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Background Image (Always present as fallback/underlay) */}
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {project.videoUrl && (
          <video
            ref={videoRef}
            key={project.videoUrl} // Force re-render when video changes
            src={project.videoUrl}
            className={`absolute inset-0 w-full h-full min-w-full min-h-full object-cover transition-opacity duration-700 ease-in-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            onLoadedData={() => {
                setIsVideoLoaded(true);
            }}
            onCanPlay={() => {
                // Double check play status when data is ready
                if (videoRef.current && videoRef.current.paused) {
                    videoRef.current.play().catch(() => {});
                }
                setIsVideoLoaded(true);
            }}
            onEnded={() => {
                // Force loop manually if attribute fails
                if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play().catch(() => {});
                }
            }}
          />
        )}
        
        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent h-64 bottom-0 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/60 via-transparent to-transparent h-32 z-10" />
      </div>

      {/* Content */}
      <div className="absolute top-[25%] left-4 md:left-16 max-w-3xl z-40 space-y-6 animate-fade-in pr-4">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-2">
             <div className="flex flex-col justify-center h-6 md:h-8">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
                    <path d="M0 0H7.32432L17.7297 19.3421V0H24V40H16.6757L6.27027 20.6579V40H0V0Z" fill="#E50914"/>
                </svg>
             </div>
             <span className="text-gray-300 font-bold tracking-[0.2em] text-xs md:text-sm uppercase pt-1 drop-shadow-md">
                PORTFOLIO SERIES
             </span>
        </div>
        
        {/* Name / Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl leading-[1.0] max-w-4xl tracking-tight uppercase">
          {project.title}
        </h1>

        {/* Contact Info Subtitle */}
        <div className="flex flex-col gap-1 text-white text-lg md:text-2xl font-medium drop-shadow-lg opacity-90">
             <span className="whitespace-pre-line leading-relaxed">{project.description}</span>
        </div>

        {/* Buttons - High Z-Index to ensure clickability */}
        <div className="flex items-center gap-4 pt-6 relative z-50">
          <button 
            onClick={onExploreClick}
            className="flex items-center gap-3 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-white/90 transition hover:scale-105 active:scale-95 duration-200 text-lg md:text-xl cursor-pointer shadow-lg"
          >
            <DownloadIcon className="w-6 h-6 md:w-7 md:h-7" />
            <span>Download Resume</span>
          </button>
          
          <button 
            onClick={onAboutClick}
            className="flex items-center gap-3 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/50 transition hover:scale-105 active:scale-95 duration-200 text-lg md:text-xl backdrop-blur-md cursor-pointer shadow-lg"
          >
            <InfoIcon className="w-6 h-6 md:w-7 md:h-7" />
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;