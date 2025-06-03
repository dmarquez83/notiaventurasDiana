# 📰 NotiAventuras de Diana

**Periódico Digital Escolar - "Cine al Día: Ayer y Hoy"**

Un hermoso periódico digital creado con React y Material UI que presenta las noticias y aventuras escritas por Diana Márquez del 5to Grado. ✨

## 🌍 **Sitio en Vivo**

🚀 **URL Principal:** https://coruscating-scone-02ae73.netlify.app  
🔄 **Deploy Automático:** ✅ Activo - Se actualiza con cada push a `main`  
📊 **Status:** 🟢 Funcionando perfectamente

## 🌟 Características

### 📱 **Interfaz Moderna**
- **Diseño responsive** - Funciona perfectamente en móviles y escritorio
- **Material UI** - Componentes profesionales y elegantes
- **Navegación por tabs** - Fácil acceso a todas las secciones
- **Colores temáticos** - Cada sección tiene su identidad visual

### 📰 **6 Secciones Temáticas**
- **🎥 Historia del Cine** (Azul) - Evolución del séptimo arte
- **🏫 Información del Colegio** (Verde) - Actividades escolares y noticias
- **🌱 Cuidado del Ambiente** (Amarillo/Naranja) - Consejos ecológicos
- **🕹️ Entretenimiento** (Naranja) - Videojuegos y diversión
- **🍓 Consejos de Salud** (Rojo) - Hábitos saludables
- **🏊‍♀️ Deportes** (Azul) - Actividades físicas y natación

### ⚡ **Tecnología de Vanguardia**
- **React 19** - Framework de JavaScript más reciente
- **Material UI 7** - Componentes de interfaz modernos
- **GitHub Actions** - CI/CD automático
- **Netlify** - Hosting y deploy profesional

## 🚀 Deploy Automático Configurado

### ✅ **Estado Actual**
- **Pipeline:** 🟢 Funcionando perfectamente
- **Secrets configurados:** ✅ NETLIFY_AUTH_TOKEN y NETLIFY_SITE_ID
- **Build dual:** ✅ Netlify (raíz) y GitHub Pages (subpath)
- **Redirects SPA:** ✅ Configurados para React Router

### 🔄 **Flujo de Deploy**
```
Código → Git Push → GitHub Actions → Tests → Build → Netlify Deploy → Sitio Actualizado
```

**Cada push a `main` ejecuta automáticamente:**
1. ✅ Verificación de secrets de Netlify
2. ✅ Instalación de dependencias
3. ✅ Ejecución de tests
4. ✅ Build optimizado para Netlify (PUBLIC_URL=/)
5. ✅ Deploy automático a Netlify
6. ✅ Invalidación de CDN

## 🛠️ Instalación y Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/dmarquez83/notiaventurasDiana.git
cd notiaventurasDiana

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo (puerto 3000)
npm start

# 4. Builds específicos
npm run build:netlify    # Para Netlify (PUBLIC_URL=/)
npm run build:github     # Para GitHub Pages (con subpath)
npm run build           # Build estándar

# 5. Ejecutar tests
npm test

# 6. Deploy manual a GitHub Pages (opcional)
npm run deploy
```

## 🏗️ Arquitectura del Proyecto

```
periodico-diana/
├── public/                 # Archivos estáticos
├── src/
│   ├── App.js             # Componente principal con navegación
│   ├── App.css            # Estilos del periódico
│   └── index.js           # Punto de entrada
├── .github/workflows/
│   └── deploy-netlify.yml # Pipeline de CI/CD
├── netlify.toml           # Configuración de Netlify
├── package.json           # Dependencies y scripts
└── context.md             # Contenido original del periódico
```

## 📝 Cómo Hacer Cambios

### 🔧 **Desarrollo Local**
```bash
# 1. Crear nueva rama (opcional)
git checkout -b nueva-funcionalidad

# 2. Editar código
# Archivos principales: src/App.js, src/App.css

# 3. Probar localmente
npm start
# Ve a: http://localhost:3000

# 4. Hacer commit
git add .
git commit -m "Descripción del cambio"

# 5. Subir cambios
git push origin main  # Deploy automático se ejecuta
```

### 🚀 **Deploy Automático**
- **Push a main** → **Deploy automático en 2-3 minutos**
- **Pull Request** → **Deploy Preview automático**
- **Monitoreo:** GitHub Actions tab para ver el progreso

## 📊 Contenido del Periódico

### 🎥 **PÁGINA 1: HISTORIA DEL CINE**
- El cine comenzó en 1895
- Evolución del blanco y negro al 3D
- Del cine mudo al sonido y color
- Cine actual hasta en el teléfono

### 🏫 **PÁGINA 2: INFORMACIÓN DEL COLEGIO**
- Celebración del Día de la Familia
- Actividades especiales del 3er momento
- Recordatorios importantes (pagos, cuidado de instalaciones)

### 🌱 **PÁGINA 3: AMBIENTE**
- Consejos para cuidar la Tierra
- No ensuciar la calle, cuidar plantas
- Ahorro de energía y papel

### 🕹️ **PÁGINA 4: ENTRETENIMIENTO**
- Afición por los cómics
- Juegos favoritos: Roblox y Minecraft
- La felicidad de jugar

### 🍓 **PÁGINA 5: SALUD**
- Hábitos saludables básicos
- Lavarse las manos, comer frutas
- Dormir bien y hacer ejercicio

### 🏊‍♀️ **PÁGINA 6: DEPORTES**
- Actividades favoritas: nadar y saltar
- Diversión en la piscina con amigos
- La energía que da la natación

## 🔧 Configuración Técnica

### 📦 **Scripts Disponibles**
- `npm start` - Desarrollo local
- `npm run build:netlify` - Build para Netlify
- `npm run build:github` - Build para GitHub Pages
- `npm test` - Ejecutar tests
- `npm run deploy` - Deploy manual a GitHub Pages

### 🌍 **Variables de Entorno**
- `PUBLIC_URL=/` - Para Netlify (automático)
- `homepage` en package.json - Para GitHub Pages

### 🔐 **Secrets de GitHub**
- `NETLIFY_AUTH_TOKEN` - Token personal de Netlify
- `NETLIFY_SITE_ID` - ID del sitio: `20af6782-3bd6-4579-ba63-e1090a6ea999`

## 👩‍🎓 Autora

**Diana Márquez** - Estudiante de 5to Grado  
📝 Editorial: "Ideas Brillantes del 5to Grado"  
📅 Fecha de publicación: 29 de mayo de 2025

## 📈 Estado del Proyecto

| Aspecto | Estado |
|---------|--------|
| 🌍 Sitio Web | 🟢 En vivo y funcionando |
| 🚀 Deploy Automático | 🟢 Configurado y activo |
| 📱 Responsive Design | 🟢 Móvil y escritorio |
| ⚡ Performance | 🟢 Optimizado |
| 🧪 Tests | 🟢 Pasando |
| 📊 SEO | 🟢 Configurado |

## 🆘 Soporte

- **Issues:** [GitHub Issues](https://github.com/dmarquez83/notiaventurasDiana/issues)
- **Documentación:** Este README
- **Deploy Status:** [GitHub Actions](https://github.com/dmarquez83/notiaventurasDiana/actions)

## 📄 Licencia

Este proyecto es de uso educativo y personal.

---

**🎉 ¡Proyecto completamente funcional con deploy automático!**  
*Desarrollado con ❤️ para la educación digital*
