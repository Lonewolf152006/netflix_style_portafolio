import React, { useState, useEffect } from 'react';
import { SearchIcon, BellIcon, ChevronDownIcon } from './Icons';
import { Profile } from '../types';

interface NavbarProps {
  profile: Profile;
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ profile, onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-colors duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="px-4 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="text-[#E50914] text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer">
            NETFOLIO
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-200">
            <span className="text-white font-bold cursor-pointer hover:text-gray-300">Home</span>
            <span className="hover:text-gray-400 transition cursor-pointer">Projects</span>
            <span className="hover:text-gray-400 transition cursor-pointer">Experience</span>
            <span className="hover:text-gray-400 transition cursor-pointer">Education</span>
            <span className="hover:text-gray-400 transition cursor-pointer">Skills</span>
            <span className="hover:text-gray-400 transition cursor-pointer">Contact</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-white">
          <button 
            onClick={onSearchClick}
            className="hover:text-gray-300 transition" 
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <span className="hidden md:block text-sm font-medium cursor-pointer">KIDS</span>
          <button className="hover:text-gray-300 transition">
            <BellIcon />
          </button>
          
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img src={profile.avatar} alt="Profile" className="w-8 h-8 rounded" />
            <ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            
            {/* Dropdown */}
            <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 border border-gray-700 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 flex flex-col gap-3">
                    <span className="text-sm hover:underline">Manage Profiles</span>
                    <span className="text-sm hover:underline">Exit Profile</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;