import React from 'react';
import { PROFILES } from '../constants';
import { Profile } from '../types';

interface ProfileSelectorProps {
  onSelect: (profile: Profile) => void;
}

const ProfileSelector: React.FC<ProfileSelectorProps> = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 bg-[#141414] z-50 flex flex-col items-center justify-center animate-fade-in">
      <h1 className="text-3xl md:text-5xl font-medium text-white mb-8 md:mb-12">Who's watching?</h1>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {PROFILES.map((profile) => (
          <div 
            key={profile.id} 
            className="group flex flex-col items-center gap-3 cursor-pointer"
            onClick={() => onSelect(profile)}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-200">
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-400 group-hover:text-white text-lg transition-colors duration-200">
              {profile.name}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-16 border border-gray-400 text-gray-400 px-6 py-2 uppercase tracking-widest hover:border-white hover:text-white transition-all duration-200">
        Manage Profiles
      </button>
    </div>
  );
};

export default ProfileSelector;
