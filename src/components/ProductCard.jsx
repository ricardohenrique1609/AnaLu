import React from 'react';

const ProductCard = ({ image, title, category, price, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-200 flex flex-col active:scale-[0.98]"
    >
        <div className="relative aspect-[4/5] overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5 flex flex-col flex-grow text-center">
            <span className="text-xs font-bold tracking-widest text-brand-500 uppercase mb-1">{category}</span>
            <h3 className="font-serif text-xl text-brand-900 mb-1">{title}</h3>
            <p className="text-sm text-brand-400 font-medium mt-auto">Ver detalhes</p>
        </div>
    </a>
);

export default ProductCard;