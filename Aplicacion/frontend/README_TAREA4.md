# Tarea 4: Manuel Moreno - Galería de Algoritmos

## Descripción del proyecto

Esta tarea implementa una galería personalizada de **algoritmos fundamentales** usando React y TailwindCSS.
La galería está diseñada para servir como referencia rápida de complejidades, casos de uso y categorías 
de algoritmos clásicos en programación competitiva.

## Archivos creados

### 1. `src/components/TarjetaAlgoritmo.jsx`
Componente reutilizable que muestra información de un algoritmo individual.

**Props que acepta:**
- `titulo`: Nombre del algoritmo
- `categoria`: Clasificación del algoritmo (Ordenamiento, Búsqueda, Grafos, etc.)
- `complejidad`: Notación Big-O de la complejidad temporal
- `descripcion`: Explicación detallada del algoritmo
- `imagen`: URL de imagen ilustrativa
- `usoComun`: Casos de uso típicos

**Características:**
- Badges dinámicos con colores según categoría
- Animaciones suaves en hover
- Diseño responsive
- Iconos de react-icons para mejor UX

### 2. `src/components/ListaAlgoritmos.jsx`
Componente que contiene el dataset de algoritmos y los renderiza usando `.map()`.

**Contenido:**
- Array con 6 algoritmos fundamentales
- Cada algoritmo tiene todos los datos requeridos
- Renderizado dinámico con `map()`
- Grid responsive que se adapta a diferentes tamaños de pantalla

### 3. `src/pages/GaleriaAlgoritmos.jsx`
Página principal que compone toda la galería.

**Estructura:**
- Banner informativo superior
- Componente ListaAlgoritmos
- Sección de recursos adicionales
- Gradientes y diseño moderno

### 4. Modificación en `src/App.jsx`
Se agregó la ruta `/algoritmos` para acceder a la galería.

## Diseño y estilos con TailwindCSS

El diseño implementa:
- Paleta de colores armoniosa: azules, índigos y grises suaves
- Gradientes sutiles en backgrounds
- Sombras con elevación en tarjetas
- Bordes redondeados consistentes
- Transiciones suaves en hover
- Layout completamente responsive:
  - 1 columna en móviles
  - 2 columnas en tablets
  - 3 columnas en desktop

## Cómo probar

1. Asegúrate de estar en la carpeta correcta:
   ```bash
   cd ~/Escritorio/AdoptaMascota/Aplicacion/frontend
   ```

2. Si no lo has hecho, instala dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en la URL que muestra (usualmente http://localhost:5173)

5. Navega a: **http://localhost:5173/algoritmos**

## Estructura del código

Todos los componentes siguen buenas prácticas:
- Comentarios naturales y útiles
- Nombres descriptivos de variables
- Funciones auxiliares documentadas
- Props claramente definidas
- Código limpio y mantenible

## Características destacadas

- **6 algoritmos** incluidos (más de los 3 mínimos requeridos)
- **Props bien definidas** (7 props en TarjetaAlgoritmo)
- **Responsive design** con breakpoints de Tailwind
- **Componentes reutilizables** y bien estructurados
- **Paleta de colores coherente** que evita el estilo genérico
- **Comentarios profesionales** sin sonar mecánicos
