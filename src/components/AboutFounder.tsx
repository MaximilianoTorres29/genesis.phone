import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const AboutFounder: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Foto en círculo */}
          <div className="flex-shrink-0">
            <img
              src={getImagePath('/images/maximiliano-torres.png')}
              alt="Maximiliano Torres - Genesis iPhone"
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover object-[50%_25%] ring-4 ring-primary-100 shadow-lg"
            />
          </div>
          {/* Texto */}
          <div className="text-center sm:text-left">
            <p className="text-primary-700 font-medium mb-2 text-sm sm:text-base uppercase tracking-wide">
              Te cuento quién soy
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 tracking-tight">
              Maximiliano Torres
            </h2>
            <p className="text-gray-600 leading-relaxed font-light max-w-xl">
              Tengo 24 años y soy emprendedor: me gusta crecer y aprender todos los días. Acá en Genesis.Iphone mi idea es simple: que encuentres el equipo y los accesorios que mejor se adapten a vos, con buena calidad y la tranquilidad de comprar con confianza. Si tenés dudas o querés asesorarte, escribime — estoy para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
