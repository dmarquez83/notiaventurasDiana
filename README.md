# 🎬 NotiAventuras de Diana - Periódico Digital

*Cine del pasado y del presente*

## 📰 Descripción

**NotiAventuras de Diana** es un periódico digital interactivo creado con React y Material-UI. Presenta 6 secciones temáticas: Historia del Cine, Información del Colegio, Ambiente, Entretenimiento, Salud y Deporte. Cada sección incluye contenido educativo, imágenes reales y una experiencia de usuario completamente responsive.

### 🎯 Características Principales

- **📱 Navegación por Swipe**: Exclusiva para móvil, desliza en el área de imágenes
- **🎨 Diseño Responsive**: Optimizado para móvil, tablet y desktop
- **📅 Fecha Automática**: Se actualiza dinámicamente en español
- **🎨 Header Dinámico**: Colores temáticos que cambian por sección
- **🖼️ Imágenes Reales**: Una imagen específica para cada sección
- **🎭 Botón Flotante**: Menú siempre accesible
- **📱 Menú Inteligente**: Persistente en desktop, temporal en móvil

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16 o superior
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/periodico-diana.git
cd periodico-diana

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm start
```

### Build para Producción
```bash
npm run build
```

---

## 📱 Navegación

### 🖥️ **En Desktop:**
- **Menú Lateral**: Siempre visible a la izquierda
- **Botón Flotante**: Botón azul con ícono de menú
- **Navegación**: Click en secciones del menú o botones anterior/siguiente
- **Badge**: "🌟 EDICIÓN ESPECIAL - REFACTORIZADA 🌟"

### 📱 **En Móvil:**
- **🔥 Swipe Horizontal**: ¡NUEVA FUNCIONALIDAD!
  - **Deslizar izquierda** en área de imagen → Siguiente sección
  - **Deslizar derecha** en área de imagen → Sección anterior
  - **Indicador visual**: "👈 Desliza para navegar 👉"
  - **Cursor interactivo**: Grab/grabbing para feedback visual
- **Menú Flotante**: Toca el botón flotante para abrir/cerrar
- **Badge**: "🌟 EDICIÓN ESPECIAL 🌟" (compacto)

---

## 🎨 Secciones del Periódico

### 1. 🎥 Historia del Cine
- **Color**: Azul (#1976D2)
- **Imagen**: `cine.png`
- **Contenido**: Evolución del cine desde 1895 hasta la era digital

### 2. 🏫 Información del Colegio
- **Color**: Verde (#388E3C)
- **Imagen**: `colegio.png`
- **Contenido**: Noticias escolares y vida académica

### 3. 🌱 Ambiente
- **Color**: Naranja (#F57C00)
- **Imagen**: `ambiente.png`
- **Contenido**: Consejos ecológicos y cuidado del medio ambiente

### 4. 🕹️ Entretenimiento
- **Color**: Rojo (#D32F2F)
- **Imagen**: `entretenimiento.png`
- **Contenido**: Videojuegos, cómics y entretenimiento infantil

### 5. 🍓 Salud
- **Color**: Rosa (#C2185B)
- **Imagen**: `salud.png`
- **Contenido**: Consejos de salud y hábitos saludables

### 6. 🏊‍♀️ Deporte
- **Color**: Azul Marino (#303F9F)
- **Imagen**: `natacion.png`
- **Contenido**: Beneficios de la natación y ejercicio

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18**: Framework principal
- **Material-UI (MUI)**: Componentes de interfaz
- **JavaScript ES6+**: Programación moderna
- **CSS3**: Estilos responsive personalizados

### Características Técnicas
- **useMediaQuery**: Detección de dispositivos
- **Touch Events**: onTouchStart, onTouchMove, onTouchEnd
- **Drawer Component**: Menú lateral deslizable
- **Fab Button**: Botón flotante de acción
- **Responsive Breakpoints**: sm, md, lg, xl

---

## 📁 Estructura del Proyecto

```
periodico-diana/
├── public/
├── src/
│   ├── images/           # Imágenes reales de cada sección
│   │   ├── cine.png
│   │   ├── colegio.png
│   │   ├── ambiente.png
│   │   ├── entretenimiento.png
│   │   ├── salud.png
│   │   ├── natacion.png
│   │   └── noticialogo.png
│   ├── App.js           # Componente principal
│   ├── App.css          # Estilos principales
│   └── index.js         # Punto de entrada
├── README.md
├── CHANGELOG.md
└── package.json
```

---

## 🎮 Funcionalidades Interactivas

### 🔥 Swipe Móvil (NUEVA)
```javascript
// Detección de swipe horizontal
const minSwipeDistance = 50;
const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
const onTouchEnd = () => {
  // Lógica de navegación por swipe
  if (isLeftSwipe) navegarSeccion(1);
  if (isRightSwipe) navegarSeccion(-1);
};
```

### 📅 Fecha Automática
```javascript
const obtenerFechaActual = () => {
  const fecha = new Date();
  return fecha.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long", 
    day: "numeric",
  });
};
```

### 🎨 Header Dinámico
```javascript
// Color del header cambia según sección activa
<AppBar sx={{ bgcolor: seccionSeleccionada.color }}>
```

---

## 🧪 Testing

### Probar la Aplicación
1. **Navegación Desktop**:
   - Abrir menú lateral
   - Probar navegación con botones
   - Verificar títulos de secciones

2. **Navegación Móvil**:
   - Usar Dev Tools en Chrome (F12)
   - Activar modo responsive
   - Probar swipe horizontal en área de imágenes
   - Verificar botón flotante del menú

3. **Responsive Design**:
   - Probar en diferentes tamaños de pantalla
   - Verificar tipografía adaptativa
   - Comprobar que el badge cambia de texto

---

## 🔧 Configuración de Desarrollo

### Scripts Disponibles
```bash
npm start        # Servidor de desarrollo
npm run build    # Build de producción
npm test         # Ejecutar tests
npm run eject    # Exponer configuración
```

### Variables de Entorno
```bash
# .env.local (opcional)
REACT_APP_TITULO="NotiAventuras de Diana"
REACT_APP_SUBTITULO="Cine del pasado y del presente"
```

---

## 📊 Métricas de Performance

### Bundle Size
- **Total**: 116.9 kB (gzip)
- **JavaScript**: 2 chunks principales
- **CSS**: 263 B optimizado
- **Imágenes**: ~50 kB total

### Compatibilidad
- **React**: 18.x
- **Material-UI**: 5.x
- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Mobile, Tablet, Desktop

---

## 🎯 Roadmap de Funcionalidades

### ✅ Implementado
- [x] Navegación por swipe móvil
- [x] Fecha automática en español
- [x] Botón flotante del menú
- [x] Menú lateral persistente
- [x] Títulos de secciones dinámicos
- [x] Badge responsive
- [x] Imágenes reales integradas
- [x] Diseño completamente responsive

### 🔜 Próximas Mejoras
- [ ] Logo del periódico (resolver problema de carga)
- [ ] Animaciones de transición entre secciones
- [ ] Modo oscuro/claro
- [ ] localStorage para recordar sección activa
- [ ] Sharing de secciones individuales
- [ ] PWA capabilities
- [ ] Lazy loading de imágenes
- [ ] Tests unitarios para swipe
- [ ] Haptic feedback en swipe

---

## 🐛 Problemas Conocidos

### ⚠️ Actualmente
- **Logo**: Temporalmente removido (mostraba cuadro blanco)
- **Animaciones**: Transiciones básicas (mejorar en futuras versiones)

### ✅ Solucionado
- **Títulos**: Todas las secciones mostraban "Historia del Cine" ✅
- **Navegación**: Menú solo visible en primera sección ✅
- **Responsive**: Badge no se adaptaba a móvil ✅
- **Swipe**: No existía navegación táctil ✅

---

## 🤝 Contribuir

### Guía de Contribución
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Estándares de Código
- **ESLint**: Configuración estándar
- **Prettier**: Formateo automático
- **Comentarios**: Código bien documentado
- **Responsive**: Siempre mobile-first

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👥 Créditos

- **Desarrolladora**: Diana Márquez
- **Editorial**: Ideas Brillantes del 5to Grado
- **Tecnología**: React + Material-UI
- **Imágenes**: Recursos originales del proyecto

---

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto:

- **Email**: ideas.brillantes@colegio.edu
- **Proyecto**: NotiAventuras de Diana
- **Versión**: Refactorización Completa 2024

---

## 🎉 ¡Disfruta navegando por NotiAventuras de Diana!

*Especialmente diseñado para demostrar las capacidades de React y Material-UI con una experiencia de usuario moderna y responsive.*

**🔥 ¡Prueba la navegación por swipe en móvil!** 👈👉
