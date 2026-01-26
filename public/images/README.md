# Carpeta de Imágenes

Coloca aquí las imágenes de tus productos (celulares y accesorios).

## Cómo agregar imágenes:

1. **Copia la imagen desde tu celular** a esta carpeta (`public/images/`)
2. **Renombra la imagen** con un nombre descriptivo, por ejemplo:
   - `iphone-15-pro-max-azul.jpg`
   - `iphone-14-usado.jpg`
   - `cargador-magsafe.jpg`

3. **En el archivo `src/data/products.ts`**, usa la ruta así:
   ```typescript
   imagen: '/images/nombre-de-tu-imagen.jpg',
   imagenes: [
     '/images/nombre-de-tu-imagen-1.jpg',
     '/images/nombre-de-tu-imagen-2.jpg',
     '/images/nombre-de-tu-imagen-3.jpg',
   ],
   ```

## Ejemplo:

Si tu imagen se llama `mi-iphone.jpg` y está en esta carpeta, la ruta será:
```typescript
imagen: '/images/mi-iphone.jpg',
```

**Nota:** La ruta siempre empieza con `/images/` (sin `public/`)
