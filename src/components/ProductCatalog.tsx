import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types/products';

interface ProductCatalogProps {
  whatsAppNumber?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ 
  whatsAppNumber = '1234567890' 
}) => {
  const [filter, setFilter] = useState<'todos' | 'nuevo' | 'usado'>('todos');
  
  // Obtener solo los iPhones (celulares)
  const allProducts = getProductsByCategory('iphone');
  
  // Filtrar productos según el estado seleccionado
  const filteredProducts: Product[] = 
    filter === 'todos' 
      ? allProducts 
      : allProducts.filter(product => product.estado === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y Filtros */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-5 tracking-tight">
            Catálogo de iPhones
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Descubre nuestra selección de iPhones nuevos y usados. Todos con garantía y en excelente estado.
          </p>

          {/* Filtros */}
          <div className="flex justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter('todos')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                filter === 'todos'
                  ? 'bg-primary-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('nuevo')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                filter === 'nuevo'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Nuevos
            </button>
            <button
              onClick={() => setFilter('usado')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                filter === 'usado'
                  ? 'bg-accent-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Usados
            </button>
          </div>
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
              No hay productos disponibles en esta categoría.
            </p>
          </div>
        )}

        {/* Contador de productos */}
        <div className="mt-12 text-center text-gray-500 text-sm font-light">
          <p>
            Mostrando {filteredProducts.length} de {allProducts.length} productos
          </p>
        </div>
      </div>
    </section>
  );
};