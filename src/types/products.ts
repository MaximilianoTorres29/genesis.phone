// Tipos TypeScript para productos

export type ProductState = 'nuevo' | 'usado';

export interface Product {
  id: string;
  nombre: string;
  modelo: string;
  precio: number;
  estado: ProductState;
  imagen: string;
  imagenes?: string[]; // Imágenes adicionales para el carrusel
  descripcion?: string;
  categoria?: 'iphone' | 'accesorio';
  stock: number;
  caracteristicas?: {
    almacenamiento?: string;
    color?: string;
    pantalla?: string;
    camara?: string;
    bateria?: string;
    procesador?: string;
    sistemaOperativo?: string;
    tipo?: string;
    compatibilidad?: string;
    potencia?: string;
    material?: string;
    colores?: string;
    tallas?: string;
    entrada?: string;
    salida?: string;
    longitud?: string;
    conectores?: string;
    cancelacionRuido?: string;
    estuche?: string;
    [key: string]: string | undefined;
  };
}