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
    descripcion: 'iPhone 13 Pro 128 GB con pantalla Super Retina XDR OLED de 6.1" y ProMotion (120 Hz), chip A15 Bionic, 6 GB de RAM y triple cámara de 12 MP con modo Cine y ProRes. Batería al 77% de capacidad, carga MagSafe y resistencia IP68.',
    caracteristicas: {
      almacenamiento: '128 GB',
      pantalla: '6.1" Super Retina XDR OLED, ProMotion 120 Hz',
      procesador: 'Chip A15 Bionic',
      ram: '6 GB',
      camara: 'Triple cámara 12 MP (teleobjetivo, gran angular, ultra gran angular), modo Cine y ProRes',
      bateria: '77% de capacidad',
      carga: 'MagSafe',
      resistencia: 'IP68',
    },
  },

  // iPhones Usados
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
  {
    id: '19',
    nombre: 'iPhone XS Max',
    modelo: 'XS Max',
    precio: 330000,
    estado: 'usado',
    categoria: 'iphone',
    imagen: '/images/iphone-xs-max-64gb.png',
    imagenes: [
      '/images/iphone-xs-max-64gb.png',
    ],
    stock: 1,
    descripcion: 'iPhone XS Max de 64 GB con pantalla OLED Super Retina HD de 6.5 pulgadas, chip A12 Bionic con 4 GB de RAM. Sistema de cámara dual de 12 MP, Face ID, carga rápida/inalámbrica y resistencia IP68. Diseño premium de vidrio y acero inoxidable. Batería con más del 80% de capacidad. Incluye cargador.',
    caracteristicas: {
      almacenamiento: '64 GB',
      pantalla: '6.5" OLED Super Retina HD',
      procesador: 'Chip A12 Bionic',
      ram: '4 GB',
      camara: 'Sistema de cámara dual de 12 MP',
      seguridad: 'Face ID',
      carga: 'Carga rápida/inalámbrica',
      resistencia: 'IP68',
      diseño: 'Vidrio y acero inoxidable',
      bateria: 'Más del 80% de capacidad',
      incluye: 'Cargador',
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