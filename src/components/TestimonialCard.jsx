import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ name, text }) => (
    <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 shadow-sm relative">
        <Quote className="absolute top-4 left-4 text-brand-200 rotate-180" size={32} />
        <p className="text-brand-800 italic relative z-10 pt-4 mb-4">"{text}"</p>
        <div className="flex items-center gap-1 mb-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-brand-500 text-brand-500" />)}
        </div>
        <p className="font-serif font-bold text-brand-900">— {name}</p>
    </div>
);

export default TestimonialCard;