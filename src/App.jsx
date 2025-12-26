import React from 'react';
import { MessageCircle, Instagram, ArrowRight, Star, Heart } from 'lucide-react';

// --- IMPORTS DOS COMPONENTES NOVOS ---
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import TestimonialCard from './components/TestimonialCard';
import PricingTabs from './components/PricingTabs';

// --- IMPORTS DAS IMAGENS ---
import imgPoncho from './assets/poncho.jpg';
import imgBiquini from './assets/top-prata.jpg';
import imgBolsa from './assets/bolsa.jpg';
// AQUI: Importando a foto da Ana
import imgAna from './assets/foto-ana.jpg';

function App() {
  const whatsappNumber = "5511991620524";
  const instagramLink = "https://www.instagram.com/analu.olivs/";

  const getWhatsappLink = (msg) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg || "Olá Ana Lu! Vi seu site e gostaria de saber mais sobre as peças.")}`;

  const products = [
    { id: 1, title: "Poncho Trama Natural", category: "Vestuário", image: imgPoncho },
    { id: 2, title: "Top Glamour Prata", category: "Moda Praia", image: imgBiquini },
    { id: 3, title: "Bolsa Boho Chic", category: "Acessórios", image: imgBolsa }
  ];

  return (
    <div className="min-h-screen bg-brand-50 text-brand-800 font-sans selection:bg-brand-200 pb-20 md:pb-0">

      {/* COMPONENTE: NAVBAR */}
      <Navbar instagramLink={instagramLink} />

      {/* HERO SECTION (Mantida aqui pois é única da página inicial) */}
      <header className="pt-28 pb-16 px-4 text-center bg-gradient-to-b from-brand-50 via-white to-brand-50">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1 rounded-full bg-brand-100 text-brand-600 border border-brand-200">
            <Star size={12} className="fill-brand-600" />
            <span className="text-xs font-bold tracking-wider uppercase">Feito à mão no Brasil</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif text-brand-900 mb-6 leading-tight">
            Sua essência, <br /> <i className="font-serif text-brand-500">tecidos com alma.</i>
          </h1>
          <p className="text-base md:text-xl text-brand-800/80 mb-8 max-w-md mx-auto leading-relaxed">
            Crochê exclusivo para mulheres que buscam leveza e sofisticação em cada detalhe.
          </p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <a
              href={getWhatsappLink("Olá! Quero encomendar uma peça exclusiva.")}
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-full text-lg font-medium shadow-lg active:scale-95 transition-all animate-pulse-slow"
            >
              <MessageCircle size={22} />
              Quero Encomendar
            </a>
            <p className="text-xs text-brand-400 mt-2 flex items-center justify-center gap-1">
              <Heart size={12} className="fill-brand-400" /> Atendimento personalizado
            </p>
          </div>
        </div>
      </header>

      {/* SEÇÃO GALERIA */}
      <section id="galeria" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-brand-900 mb-2">Destaques</h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={getWhatsappLink(`Olá! Amei o ${product.title}. Gostaria de saber valores.`)}
              className="block active:scale-[0.98] transition-transform"
            >
              {/* COMPONENTE: CARD PRODUTO */}
              <ProductCard {...product} />
            </a>
          ))}
        </div>
      </section>

      {/* --- NOVA SEÇÃO: ABAS DE PREÇOS --- */}
      <PricingTabs whatsappLink={getWhatsappLink("Olá, gostaria de saber mais sobre os valores das peças.")} />

      {/* SEÇÃO SOBRE (ATUALIZADA COM FOTO) */}
      <section className="py-16 bg-white border-y border-brand-100">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

          {/* AQUI ESTÁ A FOTO DA ANA */}
          <div className="w-full md:w-1/2 aspect-square bg-brand-200 rounded-full md:rounded-2xl overflow-hidden relative shadow-lg">
            <img
              src={imgAna}
              alt="Ana Lu trabalhando"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-serif text-brand-900 mb-4">Por trás dos fios</h2>
            <p className="text-brand-800 mb-6 leading-relaxed">
              Olá! Sou a Ana Lu. O crochê entrou na minha vida como uma forma de expressão e se tornou minha paixão.
              <br /><br />
              Acredito que vestir algo feito à mão é carregar uma história. Cada ponto das minhas peças leva tempo, carinho e dedicação, garantindo que você receba não apenas uma roupa, mas uma obra de arte única.
            </p>
            <a
              href={getWhatsappLink("Olá Ana! Adorei conhecer sua história.")}
              className="inline-flex items-center gap-2 text-brand-500 font-bold border-b-2 border-brand-200 hover:border-brand-500 transition-colors pb-1"
            >
              Falar com a Ana <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO DEPOIMENTOS */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-brand-900 mb-8 text-center">Elas usam e amam</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* COMPONENTE: DEPOIMENTO */}
          <TestimonialCard
            name="Mariana S."
            text="O biquíni ficou perfeito no meu corpo! O trabalho é impecável e a entrega foi super rápida. Já quero outro!"
          />
          <TestimonialCard
            name="Carla B."
            text="Encomendei uma bolsa e me surpreendi com a qualidade do fio. É muito mais bonita pessoalmente do que na foto."
          />
        </div>
      </section>

      {/* FOOTER (Mantido igual) */}
      <footer className="bg-brand-900 text-brand-100 py-12 px-4 text-center mb-16 md:mb-0">
        <h3 className="text-2xl font-serif mb-4">Ana Lu Crochê</h3>
        <p className="text-brand-300 text-sm mb-6">Enviamos para todo o Brasil 🇧🇷</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href={instagramLink} className="hover:text-brand-500"><Instagram /></a>
          <a href={getWhatsappLink()} className="hover:text-green-400"><MessageCircle /></a>
        </div>
        <p className="text-xs text-brand-500">© 2025 Ana Lu Crochê</p>
      </footer>

      {/* BARRA FIXA MOBILE (Mantida igual) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-brand-200 p-4 md:hidden z-50 flex items-center justify-between gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col">
          <span className="text-xs text-brand-500 font-bold uppercase">Peças exclusivas</span>
          <span className="text-sm text-brand-900 font-serif leading-none">Feito à mão</span>
        </div>
        <a
          href={getWhatsappLink("Vim pelo site e quero um orçamento!")}
          className="flex-1 bg-green-600 text-white py-3 px-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle size={20} />
          Orçamento
        </a>
      </div>

    </div>
  );
}

export default App;