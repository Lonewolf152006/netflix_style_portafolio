
import React, { useState, useEffect } from 'react';
import ProfileSelector from './components/ProfileSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import SkillsGrid from './components/SkillsGrid';
import DetailModal from './components/DetailModal';
import ScrollReveal from './components/ScrollReveal';
import ScrollToTop from './components/ScrollToTop';
import { 
  PROFILES, 
  HERO_PROJECT, 
  SOFTWARE_PROJECTS, 
  HARDWARE_PROJECTS, 
  EXPERIENCE, 
  EDUCATION, 
  CERTIFICATIONS, 
  ONGOING_CERTIFICATIONS,
  SKILLS, 
  CONTACT, 
  MY_PROFILE 
} from './constants';
import { Profile, Project } from './types';

const App: React.FC = () => {
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate initial data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s loading simulation
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Placeholder for PDF download functionality
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXwKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSCSAgCiAgICA+PgoJPj4KICAvQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCgo0IDAgb2JqCjw8CiAgL1R5cGUgL0ZvbnQKICAvU3VidHlwZSAvVHlwZTEKICAvQmFzZUZvbnQgL1RpbWVzLVJvbWFuCj4+CmVuZG9iagoKNSAwIG9iago8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNjAgMDAwMDAgbiAKMDAwMDAwMDE1NyAwMDAwMCBuIAowMDAwMDAwMjU1IDAwMDAwIG4gCjAwMDAwMDAzNDQgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDQxCiUlRU9GCg=='; // Empty PDF base64
    link.download = 'Netfolio_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
     const element = document.getElementById('contact-section');
     if (element) {
         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
  };

  const handleViewProfile = () => {
    setSelectedProject(MY_PROFILE);
  };

  // If no profile selected, show profile selector
  if (!currentProfile) {
    return <ProfileSelector onSelect={setCurrentProfile} />;
  }

  return (
    <div className="bg-[#141414] min-h-screen text-white overflow-x-hidden font-sans">
      <Navbar 
        profile={currentProfile} 
      />
      
      {/* Personal Branding Hero */}
      <Hero 
        project={HERO_PROJECT} 
        onExploreClick={handleDownloadResume}
        onAboutClick={handleContactClick}
      />

      {/* Main Content Container - z-10 ensures it is above Hero background but below Navbar and Modals */}
      <div className="relative z-10 -mt-6 md:-mt-12 pb-20 flex flex-col gap-12 md:gap-20">
        
        {/* Section 1: Work Experience */}
        <ScrollReveal>
          <Row 
              title="Work Experience" 
              projects={EXPERIENCE} 
              onProjectClick={setSelectedProject}
              isLoading={loading}
          />
        </ScrollReveal>

        {/* Section 2: Education */}
        <ScrollReveal>
          <Row 
              title="Education" 
              projects={EDUCATION} 
              onProjectClick={setSelectedProject}
              isLoading={loading}
          />
        </ScrollReveal>
        
        {/* Section 3: Certifications */}
        <ScrollReveal>
          <Row 
              title="My Certifications" 
              projects={CERTIFICATIONS} 
              onProjectClick={setSelectedProject}
              isLoading={loading}
          />
        </ScrollReveal>

        {/* Section 3.1: Ongoing Certifications */}
        <ScrollReveal>
          <Row 
              title="Ongoing Learning" 
              projects={ONGOING_CERTIFICATIONS} 
              onProjectClick={setSelectedProject}
              isLoading={loading}
          />
        </ScrollReveal>

        {/* Section 4: Skills */}
        <div id="skills-section" className="scroll-mt-24">
            <ScrollReveal>
            <SkillsGrid 
                title="Skills" 
                skills={SKILLS} 
                onSkillClick={setSelectedProject}
                isLoading={loading}
            />
            </ScrollReveal>
        </div>

        {/* Section 5: Software Projects */}
        <div id="projects-section" className="scroll-mt-24">
          <ScrollReveal>
              <Row 
                  title="Software Projects" 
                  projects={SOFTWARE_PROJECTS} 
                  onProjectClick={setSelectedProject}
                  isLoading={loading}
              />
          </ScrollReveal>
        </div>

        {/* Section 6: Hardware Projects */}
        <ScrollReveal>
          <Row 
              title="Hardware Projects" 
              projects={HARDWARE_PROJECTS} 
              onProjectClick={setSelectedProject}
              isLoading={loading}
          />
        </ScrollReveal>

        {/* Section 7: Contact */}
        <div id="contact-section" className="scroll-mt-24">
          <ScrollReveal>
              <Row 
                  title="Connect With Me" 
                  projects={CONTACT} 
                  onProjectClick={setSelectedProject}
                  isLoading={loading}
              />
          </ScrollReveal>
        </div>
      </div>

      <DetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      
      <ScrollToTop />
      
      {/* Footer */}
      <footer className="px-4 md:px-16 py-10 max-w-[1000px] mx-auto text-[#808080] text-sm relative z-10">
        <div className="flex gap-4 mb-4 text-white text-lg">
           {/* Social Icons could go here */}
        </div>
        <p className="mb-4">Questions? Contact me directly via Email or LinkedIn.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 mb-6">
            <span className="hover:underline cursor-pointer">Projects</span>
            <span className="hover:underline cursor-pointer">Skills</span>
            <span className="hover:underline cursor-pointer">Experience</span>
            <span className="hover:underline cursor-pointer">Education</span>
            <span className="hover:underline cursor-pointer">Contact</span>
            <span className="hover:underline cursor-pointer">GitHub</span>
            <span className="hover:underline cursor-pointer">LinkedIn</span>
            <span className="hover:underline cursor-pointer">Resume</span>
        </div>
        <button className="border border-gray-500 p-2 hover:text-white mb-4">
            English
        </button>
        <p className="text-[11px]">&copy; 2024 Vedant Nikumbh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
