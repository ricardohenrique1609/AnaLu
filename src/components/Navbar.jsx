import React from 'react';
import { Instagram } from 'lucide-react';

const Navbar = ({ instagramLink }) => (
    <nav className="fixed w-full bg-brand-50/95 backdrop-blur-md z-50 border-b border-brand-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl md:text-2xl font-serif font-semibold text-brand-900 tracking-tight">
                Ana Lu <span className="text-brand-500 italic">Crochê</span>
            </div>

            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-800 hover:text-brand-500 transition-colors bg-brand-100 rounded-full">
                <Instagram size={20} />
            </a>
        </div>
    </nav>
);

export default Navbar;