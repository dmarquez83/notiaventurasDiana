# 📰 NotiAventuras de Diana

**Periódico Digital Escolar - "Cine al Día: Ayer y Hoy"**

Un hermoso periódico digital creado con React y Material UI que presenta las noticias y aventuras escritas por Diana Márquez del 5to Grado.

## 🌟 Características

- **6 Secciones temáticas** con colores distintivos
- **Historia del Cine** - Evolución del séptimo arte
- **Noticias del Colegio** - Actividades escolares
- **Cuidado del Ambiente** - Consejos ecológicos
- **Entretenimiento** - Videojuegos y diversión
- **Consejos de Salud** - Hábitos saludables
- **Deportes** - Actividades físicas

## 🚀 Deploy Automático

✅ **Sitio en vivo:** https://coruscating-scone-02ae73.netlify.app

Este proyecto se despliega automáticamente a Netlify cada vez que se hace push a la rama `main`.

### 🔧 Tecnologías Utilizadas

- **React** - Framework de JavaScript
- **Material UI** - Componentes de interfaz
- **GitHub Actions** - CI/CD automático
- **Netlify** - Hosting y deploy

## 🌐 Ver el Periódico

- **Sitio Principal:** [https://dmarquez83.github.io/notiaventurasDiana](https://dmarquez83.github.io/notiaventurasDiana)
- **Netlify (Backup):** [Configurar según instrucciones](#deploy-automático-a-netlify)

## 🚀 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/dmarquez83/notiaventurasDiana.git
cd notiaventurasDiana

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Construir para producción
npm run build
```

## 📦 Deploy Automático a Netlify

### Paso 1: Crear cuenta en Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Crea una cuenta gratuita
3. Conecta con tu GitHub

### Paso 2: Obtener credenciales
1. **Token de Netlify:**
   - Ve a [app.netlify.com/user/applications#personal-access-tokens](https://app.netlify.com/user/applications#personal-access-tokens)
   - Crea un nuevo token
   - Copia el token generado

2. **Site ID:**
   - Crea un nuevo sitio en Netlify (puede estar vacío)
   - Ve a Site settings → General → Site details
   - Copia el "Site ID"

### Paso 3: Configurar GitHub Secrets
1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Secrets and variables** → **Actions**
3. Agrega estos secrets:
   - `NETLIFY_AUTH_TOKEN`: Tu token de Netlify
   - `NETLIFY_SITE_ID`: Tu Site ID de Netlify

### Paso 4: ¡Listo!
Ahora cada vez que hagas `git push`, se ejecutará automáticamente:
- ✅ Instalación de dependencias
- ✅ Ejecución de tests
- ✅ Construcción de la aplicación
- ✅ Deploy automático a Netlify

## 📝 Cómo Hacer Cambios

1. **Edita el código** en tu editor favorito
2. **Prueba localmente:**
   ```bash
   npm start
   ```
3. **Sube los cambios:**
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
4. **¡El deploy es automático!** - GitHub Actions se encarga del resto

## 📊 Secciones del Periódico

1. **🎥 Historia del Cine** - Del cine mudo al digital
2. **🏫 Información del Colegio** - Noticias escolares
3. **🌱 Ambiente** - Cuidado del medio ambiente
4. **🕹️ Entretenimiento** - Videojuegos y diversión
5. **🍓 Salud** - Consejos saludables
6. **🏊‍♀️ Deportes** - Actividades físicas

## 👩‍🎓 Autora

**Diana Márquez** - Estudiante de 5to Grado  
Editorial: "Ideas Brillantes del 5to Grado"

---

*Fecha de publicación: 29 de mayo de 2025*

## 📄 Licencia

Este proyecto es de uso educativo y personal.

---

💡 **¿Necesitas ayuda?** Abre un [Issue](https://github.com/dmarquez83/notiaventurasDiana/issues) en GitHub
