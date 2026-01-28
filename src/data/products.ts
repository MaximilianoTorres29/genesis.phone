import { Product } from '../types/products';

export const products: Product[] = [
  // iPhones Nuevos
  {
    id: '1',
    nombre: 'iPhone 13 Pro',
    modelo: '13 Pro',
    precio: 570000,
    estado: 'usado',
    categoria: 'iphone',
    imagen: '/images/13pro.blue.jpeg',
    imagenes: [
      '/images/13pro.blue.jpeg',
    ],
    stock: 5,
    descripcion: 'iPhone 15 Pro Max 256GB, color Natural Titanium. Incluye cargador y cable USB-C.',
    caracteristicas: {
      almacenamiento: '256GB',
      color: 'Natural Titanium',
      pantalla: '6.7" Super Retina XDR',
      camara: 'Sistema de triple cámara 48MP',
      bateria: 'Hasta 29 horas de video',
      procesador: 'Chip A17 Pro',
      sistemaOperativo: 'iOS 17',
    },
  },
  {
    id: '2',
    nombre: 'iPhone 15 Pro',
    modelo: '15 Pro',
    precio: 999,
    estado: 'nuevo',
    categoria: 'iphone',
    imagen: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    ],
    stock: 8,
    descripcion: 'iPhone 15 Pro 128GB, color Blue Titanium. Sellado de fábrica con garantía oficial.',
    caracteristicas: {
      almacenamiento: '128GB',
      color: 'Blue Titanium',
      pantalla: '6.1" Super Retina XDR',
      camara: 'Sistema de triple cámara 48MP',
      bateria: 'Hasta 23 horas de video',
      procesador: 'Chip A17 Pro',
      sistemaOperativo: 'iOS 17',
    },
  },
  {
    id: '3',
    nombre: 'iPhone 15',
    modelo: '15',
    precio: 799,
    estado: 'nuevo',
    categoria: 'iphone',
    imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
    ],
    stock: 12,
    descripcion: 'iPhone 15 128GB, color Pink. Nuevo, sin abrir, con garantía de Apple.',
    caracteristicas: {
      almacenamiento: '128GB',
      color: 'Pink',
      pantalla: '6.1" Super Retina XDR',
      camara: 'Sistema de doble cámara 48MP',
      bateria: 'Hasta 20 horas de video',
      procesador: 'Chip A16 Bionic',
      sistemaOperativo: 'iOS 17',
    },
  },
  {
    id: '4',
    nombre: 'iPhone 14 Pro',
    modelo: '14 Pro',
    precio: 899,
    estado: 'nuevo',
    categoria: 'iphone',
    imagen: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    ],
    stock: 6,
    descripcion: 'iPhone 14 Pro 256GB, color Deep Purple. Producto nuevo con todos los accesorios.',
    caracteristicas: {
      almacenamiento: '256GB',
      color: 'Deep Purple',
      pantalla: '6.1" Super Retina XDR',
      camara: 'Sistema de triple cámara 48MP',
      bateria: 'Hasta 23 horas de video',
      procesador: 'Chip A16 Bionic',
      sistemaOperativo: 'iOS 16',
    },
  },
  {
    id: '5',
    nombre: 'iPhone 13',
    modelo: '13',
    precio: 649,
    estado: 'nuevo',
    categoria: 'iphone',
    imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    ],
    stock: 10,
    descripcion: 'iPhone 13 128GB, color Midnight. Nuevo, sellado, con garantía oficial.',
    caracteristicas: {
      almacenamiento: '128GB',
      color: 'Midnight',
      pantalla: '6.1" Super Retina XDR',
      camara: 'Sistema de doble cámara 12MP',
      bateria: 'Hasta 19 horas de video',
      procesador: 'Chip A15 Bionic',
      sistemaOperativo: 'iOS 15',
    },
  },
  {
    id: '17',
    nombre: 'iPhone 15 Plus',
    modelo: '15 Plus',
    precio: 899,
    estado: 'nuevo',
    categoria: 'iphone',
    // Ejemplo con imágenes locales: copia tus imágenes a public/images/ y usa estas rutas
    // imagen: '/images/iphone-15-plus-1.jpg',
    // imagenes: [
    //   '/images/iphone-15-plus-1.jpg',
    //   '/images/iphone-15-plus-2.jpg',
    //   '/images/iphone-15-plus-3.jpg',
    // ],
    // Ejemplo con URLs de internet (actual):
    imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop',
    ],
    stock: 7,
    descripcion: 'iPhone 15 Plus 256GB, color Blue. Nuevo, sellado de fábrica con garantía oficial.',
    caracteristicas: {
      almacenamiento: '256GB',
      color: 'Blue',
      pantalla: '6.7" Super Retina XDR',
      camara: 'Sistema de doble cámara 48MP',
      bateria: 'Hasta 26 horas de video',
      procesador: 'Chip A16 Bionic',
      sistemaOperativo: 'iOS 17',
    },
  },

  // iPhones Usados
  {
    id: '6',
    nombre: 'iPhone 14 Pro Max',
    modelo: '14 Pro Max',
    precio: 949,
    estado: 'usado',
    categoria: 'iphone',
    imagen: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    ],
    stock: 3,
    descripcion: 'iPhone 14 Pro Max 256GB, usado en excelente estado. 95% de batería, sin rayones.',
    caracteristicas: {
      almacenamiento: '256GB',
      color: 'Space Black',
      pantalla: '6.7" Super Retina XDR',
      camara: 'Sistema de triple cámara 48MP',
      bateria: '95% de capacidad',
      procesador: 'Chip A16 Bionic',
      sistemaOperativo: 'iOS 16',
    },
  },
  {
    id: '7',
    nombre: 'iPhone 12 Pro',
    modelo: '12 Pro',
    precio: 599,
    estado: 'usado',
    categoria: 'iphone',
    imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    ],
    stock: 2,
    descripcion: 'iPhone 12 Pro 128GB, usado en muy buen estado. Incluye caja y cargador original.',
    caracteristicas: {
      almacenamiento: '128GB',
      color: 'Pacific Blue',
      pantalla: '6.1" Super Retina XDR',
      camara: 'Sistema de triple cámara 12MP',
      bateria: '90% de capacidad',
      procesador: 'Chip A14 Bionic',
      sistemaOperativo: 'iOS 14',
    },
  },
  {
    id: '8',
    nombre: 'iPhone 11',
    modelo: '11',
    precio: 399,
    estado: 'usado',
    categoria: 'iphone',
    imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop',
    ],
    stock: 4,
    descripcion: 'iPhone 11 64GB, usado en buen estado. Funciona perfectamente, batería al 88%.',
    caracteristicas: {
      almacenamiento: '64GB',
      color: 'Black',
      pantalla: '6.1" Liquid Retina',
      camara: 'Sistema de doble cámara 12MP',
      bateria: '88% de capacidad',
      procesador: 'Chip A13 Bionic',
      sistemaOperativo: 'iOS 13',
    },
  },
  {
    id: '18',
    nombre: 'iPhone 14 Pro',
    modelo: '14 Pro',
    precio: 920000,
    estado: 'usado',
    categoria: 'iphone',
    imagen: '/images/iphone-14-pro-128gb-usado.png',
    imagenes: [
      '/images/iphone-14-pro-128gb-usado.png',
    ],
    stock: 1,
    descripcion: 'iPhone 14 Pro 128GB, usado en perfecto estado. Batería al 100%, incluye hidrogel colocado, funda y cargador.',
    caracteristicas: {
      almacenamiento: '128GB',
      color: 'Space Black',
      pantalla: '6.1" Super Retina XDR',
      camara: 'Sistema de triple cámara 48MP',
      bateria: '100% de capacidad',
      procesador: 'Chip A16 Bionic',
      sistemaOperativo: 'iOS 16',
      estado: 'Perfecto estado',
      incluye: 'Hidrogel colocado, funda y cargador',
    },
  },

  // Accesorios Nuevos
  {
    id: '9',
    nombre: 'Cargador MagSafe',
    modelo: 'MagSafe Charger',
    precio: 39,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop',
    ],
    stock: 15,
    descripcion: 'Cargador MagSafe original de Apple. Carga rápida inalámbrica para iPhone.',
    caracteristicas: {
      tipo: 'Cargador inalámbrico',
      compatibilidad: 'iPhone 12 y posteriores',
      potencia: '15W',
    },
  },
  {
    id: '10',
    nombre: 'AirPods Pro 2',
    modelo: 'AirPods Pro 2',
    precio: 249,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop',
    ],
    stock: 7,
    descripcion: 'AirPods Pro 2da generación con cancelación activa de ruido. Nuevos, sellados.',
    caracteristicas: {
      tipo: 'Auriculares inalámbricos',
      cancelacionRuido: 'Sí',
      bateria: 'Hasta 6 horas',
      estuche: 'Con estuche de carga',
    },
  },
  {
    id: '11',
    nombre: 'Funda de Silicona Apple',
    modelo: 'Silicone Case',
    precio: 49,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop',
    ],
    stock: 20,
    descripcion: 'Funda de silicona original de Apple para iPhone 15 Pro. Varios colores disponibles.',
    caracteristicas: {
      tipo: 'Funda protectora',
      material: 'Silicona',
      compatibilidad: 'iPhone 15 Pro',
      colores: 'Múltiples disponibles',
    },
  },
  {
    id: '12',
    nombre: 'Cable Lightning a USB-C',
    modelo: 'Lightning Cable 1m',
    precio: 19,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop',
    ],
    stock: 25,
    descripcion: 'Cable Lightning a USB-C original de Apple, 1 metro. Carga rápida garantizada.',
    caracteristicas: {
      tipo: 'Cable de carga',
      longitud: '1 metro',
      conectores: 'Lightning a USB-C',
    },
  },
  {
    id: '13',
    nombre: 'Apple Watch Band Deportiva',
    modelo: 'Sport Band',
    precio: 49,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop',
    ],
    stock: 12,
    descripcion: 'Correa deportiva original de Apple para Apple Watch. Varios colores disponibles.',
    caracteristicas: {
      tipo: 'Correa para Apple Watch',
      material: 'Fluoroelastómero',
      tallas: 'Múltiples disponibles',
    },
  },
  {
    id: '14',
    nombre: 'Adaptador Lightning a 3.5mm',
    modelo: 'Lightning to 3.5mm',
    precio: 9,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop',
    ],
    stock: 18,
    descripcion: 'Adaptador oficial de Apple para conectar auriculares con jack de 3.5mm.',
    caracteristicas: {
      tipo: 'Adaptador de audio',
      entrada: 'Lightning',
      salida: '3.5mm',
    },
  },

  // Accesorios Usados
  {
    id: '15',
    nombre: 'AirPods 3ra Generación',
    modelo: 'AirPods 3',
    precio: 149,
    estado: 'usado',
    categoria: 'accesorio',
    imagen: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop',
    ],
    stock: 1,
    descripcion: 'AirPods 3ra generación usados en excelente estado. Funcionan perfectamente.',
    caracteristicas: {
      tipo: 'Auriculares inalámbricos',
      estado: 'Usado - Excelente',
      bateria: 'Funcionando correctamente',
    },
  },
  {
    id: '16',
    nombre: 'Cargador Inalámbrico',
    modelo: 'Wireless Charger',
    precio: 29,
    estado: 'usado',
    categoria: 'accesorio',
    imagen: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop',
    ],
    stock: 0,
    descripcion: 'Base de carga inalámbrica compatible con iPhone. Usada, en buen estado.',
    caracteristicas: {
      tipo: 'Cargador inalámbrico',
      estado: 'Usado - Buen estado',
      potencia: '10W',
    },
  },
];

// Funciones helper para filtrar productos
export const getProductsByCategory = (category: 'iphone' | 'accesorio'): Product[] => {
  return products.filter(product => product.categoria === category);
};

export const getProductsByState = (state: 'nuevo' | 'usado'): Product[] => {
  return products.filter(product => product.estado === state);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getNewProducts = (): Product[] => {
  return getProductsByState('nuevo');
};

export const getUsedProducts = (): Product[] => {
  return getProductsByState('usado');
};