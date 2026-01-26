import React from 'react';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: '✅',
    title: 'Equipos Verificados',
    description: 'Cada iPhone y accesorio pasa por un riguroso proceso de verificación. Garantizamos autenticidad y funcionamiento óptimo.',
  },
  {
    icon: '👤',
    title: 'Atención Personalizada',
    description: 'Nuestro equipo está listo para ayudarte a encontrar el producto perfecto. Asesoramiento profesional y atención dedicada.',
  },
  {
    icon: '🚚',
    title: 'Envíos',
    description: 'Envíos rápidos y seguros a todo el país. Seguimiento en tiempo real y embalaje profesional para proteger tu compra.',
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-5 tracking-tight">
            Nuestros Beneficios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            En Genesis.Iphone nos comprometemos a ofrecerte la mejor experiencia de compra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-5">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-primary-900 mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};