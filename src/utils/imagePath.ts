/**
 * Corrige las rutas de imágenes para que funcionen en GitHub Pages
 * Convierte rutas absolutas (/images/...) a rutas relativas al base path
 */
export const getImagePath = (imagePath: string): string => {
  // Si es una URL completa (http/https), devolverla tal cual
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  const baseUrl = import.meta.env.BASE_URL;
  
  // Si ya tiene el base path, devolverla tal cual
  if (imagePath.startsWith(baseUrl)) {
    return imagePath;
  }
  
  // Si empieza con /images/, convertir a ruta con base path
  if (imagePath.startsWith('/images/')) {
    const imageName = imagePath.replace('/images/', '');
    return `${baseUrl}images/${imageName}`;
  }
  
  // Si empieza con /, remover el / y agregar base path
  if (imagePath.startsWith('/')) {
    return `${baseUrl}${imagePath.slice(1)}`;
  }
  
  // Para rutas relativas, agregar base path
  return `${baseUrl}${imagePath}`;
};
