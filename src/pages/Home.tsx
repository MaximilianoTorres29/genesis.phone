import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ProductCatalog } from '../components/ProductCatalog';
import { ProductCatalogAccessories } from '../components/ProductCatalogAccessories';
import { Benefits } from '../components/Benefits';
import { AboutFounder } from '../components/AboutFounder';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const SCROLL_KEY = 'genesis.homeScrollPosition';

export const Home: React.FC = () => {
  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved !== null) {
      sessionStorage.removeItem(SCROLL_KEY);
      const y = parseInt(saved, 10);
      if (!Number.isNaN(y)) {
        const id = setTimeout(() => window.scrollTo(0, y), 0);
        return () => clearTimeout(id);
      }
    }
  }, []);

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