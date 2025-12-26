import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingTabs = ({ whatsappLink }) => {
    const [activeTab, setActiveTab] = useState('vestuario');

    // Dados dos preços
    const pricingData = {
        vestuario: [
            { name: "Ponchos e Kimonos", price: "A partir de R$ 180,00" },
            { name: "Croppeds", price: "A partir de R$ 89,90" },
            { name: "Vestidos Curtos", price: "A partir de R$ 220,00" },
        ],
        praia: [
            { name: "Biquínis (Conjunto)", price: "A partir de R$ 160,00" },
            { name: "Saídas de Praia", price: "A partir de R$ 190,00" },
            { name: "Top Avulso", price: "A partir de R$ 79,90" },
        ],
        acessorios: [
            { name: "Bolsas de Ombro", price: "A partir de R$ 140,00" },
            { name: "Clutches (Mão)", price: "A partir de R$ 90,00" },
            { name: "Ecobags", price: "A partir de R$ 70,00" },
        ]
    };

    return (
        <section className="py-16 px-4 bg-brand-50" id="precos">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif text-brand-900 mb-2">Tabela de Valores</h2>
                    <p className="text-brand-600 text-sm">Preços base para peças sob medida.</p>
                </div>

                {/* Botões das Abas */}
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    {[
                        { id: 'vestuario', label: 'Vestuário' },
                        { id: 'praia', label: 'Moda Praia' },
                        { id: 'acessorios', label: 'Acessórios' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-brand-900 text-white shadow-md transform scale-105'
                                    : 'bg-white text-brand-800 border border-brand-200 hover:bg-brand-100'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Lista de Preços */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-100">
                    <ul className="space-y-4">
                        {pricingData[activeTab].map((item, index) => (
                            <li key={index} className="flex justify-between items-center border-b border-brand-50 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-3">
                                    <div className="bg-brand-100 p-1 rounded-full">
                                        <Check size={14} className="text-brand-600" />
                                    </div>
                                    <span className="text-brand-900 font-medium">{item.name}</span>
                                </div>
                                <span className="text-brand-600 font-serif text-sm whitespace-nowrap">{item.price}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 text-center pt-4 border-t border-brand-50">
                        <a href={whatsappLink} className="inline-flex items-center gap-2 text-sm text-brand-500 font-bold hover:text-brand-700 transition-colors">
                            Fazer orçamento personalizado <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTabs;