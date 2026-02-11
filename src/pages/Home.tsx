import React from 'react';
import { Hero } from '../components/Hero';
import { ProductCatalog } from '../components/ProductCatalog';
import { ProductCatalogAccessories } from '../components/ProductCatalogAccessories';
import { Benefits } from '../components/Benefits';
import { AboutFounder } from '../components/AboutFounder';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Aquí puedes agregar tracking o analytics si lo necesitas
    console.log('WhatsApp button clicked');
  };

  const whatsAppNumber = '542995313662';

  return (
    <div className="min-h-screen">
      <Hero onWhatsAppClick={handleWhatsAppClick} />
      
      {/* Catálogo de Celulares */}
      <ProductCatalog whatsAppNumber={whatsAppNumber} />
      
      {/* Catálogo de Accesorios */}
      <ProductCatalogAccessories whatsAppNumber={whatsAppNumber} />
      
      {/* Sección de Beneficios */}
      <Benefits />

      {/* Quién soy */}
      <AboutFounder />

      {/* Sección de Contacto */}
      <Contact whatsAppNumber={whatsAppNumber} />

      {/* Footer */}
      <Footer whatsAppNumber={whatsAppNumber} />
    </div>
  );
};