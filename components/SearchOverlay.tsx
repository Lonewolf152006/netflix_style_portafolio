import React, { useState, useEffect, useRef } from 'react';
import { CloseIcon, SearchIcon } from './Icons';
import { askGemini } from '../services/geminiService';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isOpen) return null;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setQuery('');
    setLoading(true);

    const answer = await askGemini(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: answer }]);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-[#141414]/95 z-50 flex flex-col pt-20 px-4 md:px-20 animate-fade-in">
        {/* Close Button */}
        <button 
            onClick={onClose} 
            className="absolute top-6 right-8 text-white hover:text-red-600 transition"
        >
            <CloseIcon className="w-10 h-10" />
        </button>

        {/* Search Input */}
        <div className="w-full max-w-4xl mx-auto border-b border-gray-600 pb-2 mb-8">
             <form onSubmit={handleSearch} className="flex items-center gap-4">
                 <SearchIcon className="w-8 h-8 text-gray-400" />
                 <input 
                    ref={inputRef}
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask AI about projects, skills, or experience..."
                    className="w-full bg-transparent text-2xl md:text-4xl outline-none text-white placeholder-gray-600 font-bold"
                 />
             </form>
        </div>

        {/* Results Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto max-w-4xl mx-auto w-full no-scrollbar pb-10">
            {messages.length === 0 && (
                <div className="text-gray-500 text-lg">
                    <p className="mb-4">Try asking:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>"What is the tech stack for the Crypto Wallet?"</li>
                        <li>"Does the developer know React Native?"</li>
                        <li>"Tell me about their work at TechCorp."</li>
                    </ul>
                </div>
            )}

            <div className="flex flex-col gap-6">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div 
                            className={`max-w-[80%] p-4 rounded-lg text-lg ${
                                msg.role === 'user' 
                                ? 'bg-[#333] text-white' 
                                : 'bg-transparent border border-gray-700 text-gray-200'
                            }`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                         <div className="flex items-center space-x-2 text-red-600">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default SearchOverlay;
