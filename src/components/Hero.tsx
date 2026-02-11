import React from 'react';

interface HeroProps {
  onWhatsAppClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWhatsAppClick }) => {
  const whatsAppNumber = '542995313662';
  const whatsAppMessage = encodeURIComponent('Hola Genesis iPhone estoy interesado en sus productos.');
  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`;

  const handleWhatsAppClick = () => {
    if (onWhatsAppClick) {
      onWhatsAppClick();
    }
    window.open(whatsAppUrl, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="absolute inset-0 bg-primary-900/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="text-center">
          {/* Logo/Marca */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight px-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
                <span className="text-white block sm:inline">Genesis.</span>
                <span className="text-accent-400 block sm:inline sm:ml-2 flex items-center">
                  Iph
                  {/* Ícono de Apple reemplazando la "o" */}
                  <svg
                    className="w-[0.9em] h-[0.9em] -mx-1 text-white inline-block align-middle"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  ne
                </span>
              </div>
            </h1>
            <div className="w-24 sm:w-32 h-0.5 bg-accent-500 mx-auto"></div>
          </div>

          {/* Texto principal */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 text-gray-100 max-w-3xl mx-auto leading-tight px-2">
            Tu destino confiable para iPhones y accesorios de calidad
          </p>

          {/* Descripción */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Encuentra los últimos modelos de iPhone, accesorios originales y productos premium. 
            Garantía de calidad y el mejor servicio al cliente.
          </p>

          {/* Botón WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-out w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="whitespace-nowrap">Contactar por WhatsApp</span>
            <span className="ml-2 hidden sm:inline group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>

          {/* Características rápidas */}
          <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📱</div>
              <h3 className="font-medium mb-1.5 sm:mb-2 text-gray-100 text-sm sm:text-base">iPhones Originales</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light">Últimos modelos disponibles</p>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🔒</div>
              <h3 className="font-medium mb-1.5 sm:mb-2 text-gray-100 text-sm sm:text-base">Garantía</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light">Garantía oficial solo en equipos sellados</p>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⚡</div>
              <h3 className="font-medium mb-1.5 sm:mb-2 text-gray-100 text-sm sm:text-base">Entrega Rápida</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light">Envíos seguros y rápidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};