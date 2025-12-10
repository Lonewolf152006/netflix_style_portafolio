
import React, { useRef, useEffect, useState } from 'react';
import { Project } from '../types';
import { DownloadIcon, InfoIcon } from './Icons';
import { HERO_VIDEO_OPTIONS } from '../constants';

interface HeroProps {
  project: Project;
  onExploreClick: () => void;
  onAboutClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ project, onExploreClick, onAboutClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState(HERO_VIDEO_OPTIONS[0]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Reset loaded state when video changes to show poster/fallback first
    setIsVideoLoaded(false);
    
    if (videoRef.current) {
        // Force reload of video source when activeVideo changes
        videoRef.current.load();
        
        // Ensure muted is set (required for autoplay in most browsers)
        videoRef.current.muted = true;
        
        // Attempt autoplay
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay was prevented or failed
            });
        }
    }
  }, [activeVideo]);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#141414]" role="banner">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Zoom Wrapper to sync animation between fallback image and video */}
        <div className="absolute inset-0 w-full h-full slow-zoom">
            {/* Fallback Image - Visible when video is loading or fails */}
            <img 
                src={activeVideo.thumbnail} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Background Video */}
             <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                onCanPlay={() => setIsVideoLoaded(true)}
                onLoadedData={() => setIsVideoLoaded(true)}
                onError={() => setIsVideoLoaded(false)}
             >
                 <source src={activeVideo.url} type="video/mp4" />
             </video>
        </div>
        
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

       {/* Video Scene Selection & Maturity Rating */}
       <div className="absolute right-0 bottom-24 md:bottom-32 z-50 flex flex-col items-end md:items-end justify-end gap-6 w-full px-4 md:px-16 pointer-events-auto">
           
           {/* Scene Selection Controls */}
           <div className="flex flex-col items-end gap-2 animate-fade-in" style={{ animationDelay: '1000ms' }}>
              <span className="text-gray-300 text-[10px] uppercase tracking-widest font-bold drop-shadow-md mb-1 mr-1 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">Select Theme</span>
              <div className="flex items-center gap-3 p-2 bg-black/20 backdrop-blur-md rounded-lg border border-white/10">
                 {HERO_VIDEO_OPTIONS.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => setActiveVideo(video)}
                      className={`relative w-12 h-8 md:w-16 md:h-10 rounded overflow-hidden border-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white group ${activeVideo.id === video.id ? 'border-[#E50914] scale-105 shadow-[0_0_10px_rgba(229,9,20,0.5)]' : 'border-gray-500/50 grayscale hover:grayscale-0 hover:border-white'}`}
                      aria-label={`Switch background to ${video.label}`}
                      title={video.label}
                    >
                      <img src={video.thumbnail} alt={video.label} className="w-full h-full object-cover" />
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700">
                        {video.label}
                      </div>
                    </button>
                 ))}
              </div>
           </div>

           {/* Maturity Rating */}
           <div className="hidden md:flex bg-gray-500/30 border-l-4 border-gray-100 py-1 pl-3 pr-8 backdrop-blur-sm text-white font-medium text-sm">
               JOB READY
           </div>
       </div>
    </div>
  );
};

export default Hero;
