import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { ImageCarousel } from '../components/ImageCarousel';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const whatsAppNumber = '1234567890'; // Reemplaza con tu número real

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent-600 hover:text-accent-700 font-medium"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStateBadgeColor = (estado: string): string => {
    return estado === 'nuevo' 
      ? 'bg-green-50 text-green-700 border-green-200' 
      : 'bg-accent-50 text-accent-700 border-accent-200';
  };

  const getStockBadgeColor = (stock: number): string => {
    if (stock === 0) return 'bg-red-50 text-red-700 border-red-200';
    if (stock < 5) return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    return 'bg-green-50 text-green-700 border-green-200';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en el ${product.nombre} ${product.modelo}`
    );
    const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${message}`;
    window.open(whatsAppUrl, '_blank');
  };

  // Preparar imágenes para el carrusel
  const carouselImages = product.imagenes && product.imagenes.length > 0 
    ? product.imagenes 
    : [product.imagen];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón volver */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Columna izquierda - Carrusel */}
          <div>
            <ImageCarousel images={carouselImages} productName={product.nombre} />
          </div>

          {/* Columna derecha - Información */}
          <div className="space-y-6">
            {/* Badges de estado y stock */}
            <div className="flex gap-3 flex-wrap">
              <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${getStateBadgeColor(product.estado)}`}>
                {product.estado === 'nuevo' ? '✨ Nuevo' : '🔄 Usado'}
              </span>
              <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${getStockBadgeColor(product.stock)}`}>
                {product.stock === 0 ? '❌ Sin stock' : product.stock < 5 ? `⚠️ Últimas ${product.stock} unidades` : `✅ Stock: ${product.stock}`}
              </span>
            </div>

            {/* Nombre y modelo */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-2 tracking-tight">
                {product.nombre}
              </h1>
              <p className="text-lg text-gray-600 font-light">
                {product.modelo}
              </p>
            </div>

            {/* Precio */}
            <div className="pb-6 border-b border-gray-200">
              <p className="text-4xl font-bold text-primary-900 tracking-tight">
                {formatPrice(product.precio)}
              </p>
            </div>

            {/* Descripción */}
            {product.descripcion && (
              <div>
                <h2 className="text-xl font-semibold text-primary-900 mb-3">Descripción</h2>
                <p className="text-gray-600 leading-relaxed font-light">
                  {product.descripcion}
                </p>
              </div>
            )}

            {/* Características */}
            {product.caracteristicas && Object.keys(product.caracteristicas).length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-primary-900 mb-4">Características</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.caracteristicas).map(([key, value]) => {
                    if (!value) return null;
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    return (
                      <div key={key} className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
                        <p className="text-base text-gray-900 font-medium">{value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Botón WhatsApp */}
            <div className="pt-6">
              <button
                onClick={handleWhatsAppClick}
                disabled={product.stock === 0}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-3 ${
                  product.stock === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>
                  {product.stock === 0 ? 'Sin stock disponible' : 'Consultar por WhatsApp'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};