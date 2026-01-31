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

  // Accesorios
  {
    id: '9',
    nombre: 'TV Box Ultra HD 8K',
    modelo: '8K4K2K Android 13',
    precio: 50000,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: '/images/tv-box-8k-android.png',
    imagenes: [
      '/images/tv-box-8k-android.png',
    ],
    stock: 1,
    descripcion: 'TV Box Ultra HD 8K con Android 13. Resolución 8K/4K/2K. Procesador Rockchip. Wi-Fi 2.4G+5G, USB 3.0. Compatible con YouTube, Netflix, Google Play, Disney+ y Prime Video.',
    caracteristicas: {
      tipo: 'TV Box',
      resolucion: '8K Ultra HD / 4K / 2K',
      sistemaOperativo: 'Android 13.0',
      almacenamiento: '512GB + 1024GB',
      procesador: 'Rockchip',
      wifi: '2.4G + 5G',
      usb: 'USB 3.0',
      streaming: 'YouTube, Netflix, Google Play, Disney+, Prime Video',
    },
  },
  {
    id: '10',
    nombre: 'Cargador Apple USB-C 20W + Cable',
    modelo: '20W Power Adapter + Charge Cable 1m',
    precio: 35000,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: '/images/cargador-apple-usbc-20w.png',
    imagenes: [
      '/images/cargador-apple-usbc-20w.png',
    ],
    stock: 1,
    descripcion: 'Adaptador de corriente USB-C de 20W y cable de carga USB-C (1m) originales de Apple. Nuevos, sellados. Compatible con iPhone y dispositivos Apple con puerto USB-C.',
    caracteristicas: {
      tipo: 'Cargador + Cable',
      potencia: '20W',
      cable: 'USB-C a USB-C, 1 metro',
      compatibilidad: 'iPhone y dispositivos Apple con USB-C',
      estado: 'Nuevo, sellado',
    },
  },
  {
    id: '11',
    nombre: 'Funda Silicon Case iPhone',
    modelo: 'Silicone Case - Variedad de modelos',
    precio: 15000,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: '/images/fundas-silicona-iphone.png',
    imagenes: [
      '/images/fundas-silicona-iphone.png',
    ],
    stock: 30,
    descripcion: 'Funda de silicona para iPhone. Variedad de colores (amarillo, naranja, rojo, azul, verde, violeta, beige, gris, negro y más) y modelos compatibles con iPhone Pro y Pro Max.',
    caracteristicas: {
      tipo: 'Funda Silicon Case',
      material: 'Silicona suave, acabado mate',
      colores: 'Amplia variedad (más de 15 colores)',
      modelos: 'Compatible con iPhone Pro y Pro Max (variedad de modelos)',
      diseño: 'Corte para cámara, logo Apple',
    },
  },
  {
    id: '12',
    nombre: 'Vidrio templado Premium iPhone',
    modelo: 'XS Premium Tempered Guardian 9H',
    precio: 10000,
    estado: 'nuevo',
    categoria: 'accesorio',
    imagen: '/images/vidrio-templado-iphone-12-13.png',
    imagenes: [
      '/images/vidrio-templado-iphone-12-13.png',
    ],
    stock: 1,
    descripcion: 'Vidrio templado premium 9H, 0.33mm 2.5D. Resistente a rayaduras, cristalino, sensible al tacto. Compatible con iPhone 12, 12 Pro, 13 y 13 Pro.',
    caracteristicas: {
      tipo: 'Vidrio templado',
      dureza: '9H',
      grosor: '0.33mm 2.5D',
      compatibilidad: 'iPhone 12, 12 Pro, 13, 13 Pro',
      detalles: 'Resistente a rayaduras, cristalino, sensible al tacto',
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