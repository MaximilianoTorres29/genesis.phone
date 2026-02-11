import React from 'react';
import { ProductCard } from './ProductCard';
import { getProductsByCategory } from '../data/products';

interface ProductCatalogAccessoriesProps {
  whatsAppNumber?: string;
}

export const ProductCatalogAccessories: React.FC<ProductCatalogAccessoriesProps> = ({ 
  whatsAppNumber = '542995313662' 
}) => {
  // Obtener solo los accesorios (todos)
  const allProducts = getProductsByCategory('accesorio');
  const filteredProducts = allProducts;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y Filtros */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-5 tracking-tight">
            Accesorios
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            No solo para iPhone: fundas, cargadores, cables, TV Box y más. Accesorios originales y tecnología para tu día a día.
          </p>
        </div>

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                whatsAppNumber={whatsAppNumber}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay accesorios disponibles en esta categoría.
            </p>
          </div>
        )}

        {/* Contador de productos */}
        <div className="mt-12 text-center text-gray-500 text-sm font-light">
          <p>
            Mostrando {filteredProducts.length} de {allProducts.length} accesorios
          </p>
        </div>
      </div>
    </section>
  );
};