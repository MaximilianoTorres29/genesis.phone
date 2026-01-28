# Genesis.Iphone Landing Page

Tienda online de iPhones y accesorios con React + TypeScript.

## 🌐 Publicar en GitHub Pages

Tu aplicación está configurada para publicarse automáticamente en GitHub Pages.

### Pasos para publicar:

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a tu repositorio en GitHub: `https://github.com/MaximilianoTorres29/genesis.phone`
   - Click en **Settings** (Configuración)
   - En el menú izquierdo, busca **Pages**
   - En **Source**, selecciona **GitHub Actions**
   - Guarda los cambios

2. **Sube los cambios a GitHub:**
   ```bash
   git add .
   git commit -m "Configurar GitHub Pages"
   git push origin main
   ```

3. **Espera a que se complete el deploy:**
   - Ve a la pestaña **Actions** en tu repositorio
   - Verás un workflow llamado "Deploy to GitHub Pages"
   - Espera a que termine (puede tardar 2-5 minutos)

4. **Tu sitio estará disponible en:**
   ```
   https://maximilianotorres29.github.io/genesis.phone/
   ```

### Notas importantes:

- Cada vez que hagas `git push` a la rama `main`, se publicará automáticamente
- El deploy puede tardar unos minutos en completarse
- Si cambias algo, solo haz `git push` y se actualizará automáticamente

---

## 🚀 Desarrollo Local

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductCatalog.tsx
│   └── ...
├── pages/          # Páginas de la aplicación
│   ├── Home.tsx
│   └── ProductDetail.tsx
├── data/           # Datos estáticos
│   └── products.ts
├── types/          # Tipos TypeScript
└── App.tsx         # Componente principal
```

## 🛠️ Tecnologías

- ⚡️ Vite
- ⚛️ React 18
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🧭 React Router DOM

## 📝 Agregar Productos

Para agregar nuevos productos, edita el archivo `src/data/products.ts` y agrega un nuevo objeto al array `products`.

Las imágenes deben guardarse en `public/images/` y referenciarse como `/images/nombre-imagen.jpg`
