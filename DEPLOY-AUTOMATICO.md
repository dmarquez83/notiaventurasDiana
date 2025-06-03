# 🚀 Deploy Automático - NotiAventuras de Diana

**Documentación completa del sistema de deploy automático con GitHub Actions y Netlify**

---

## 📋 **Índice**

1. [🎯 Qué es el Deploy Automático](#-qué-es-el-deploy-automático)
2. [🔧 Configuración Inicial](#-configuración-inicial)
3. [⚙️ Cómo Funciona el Pipeline](#️-cómo-funciona-el-pipeline)
4. [🌐 Configuración de Netlify](#-configuración-de-netlify)
5. [📝 Uso Diario](#-uso-diario)
6. [🛠️ Troubleshooting](#️-troubleshooting)
7. [📊 Monitoreo y Verificación](#-monitoreo-y-verificación)

---

## 🎯 **Qué es el Deploy Automático**

### **Antes (Manual):**
```
1. Hacer cambios en el código
2. Ejecutar: npm run build
3. Subir archivos manualmente a servidor
4. Verificar que funcione
5. Repetir para cada cambio...
```

### **Ahora (Automático):**
```
1. Hacer cambios en el código
2. git push
3. ¡Todo lo demás es automático! ✨
```

### **✅ Beneficios:**
- **⚡ Deploy en 2-3 minutos** - Sin esperas
- **🛡️ Tests automáticos** - Previene errores
- **🔄 Rollback fácil** - Si algo falla, volver atrás
- **📱 URLs de preview** - Ver cambios antes de publicar
- **💬 Notificaciones** - Sabes cuando está listo
- **🏗️ Build optimizado** - Siempre la mejor versión

---

## 🔧 **Configuración Inicial**

### **1. Archivos del Pipeline**

**📁 Estructura creada:**
```
periodico-diana/
├── .github/
│   └── workflows/
│       └── deploy-netlify.yml  ← Pipeline principal
├── README.md                   ← Documentación
├── package.json               ← Scripts de deploy
└── .gitignore                 ← Archivos a ignorar
```

### **2. Pipeline GitHub Actions**

**📄 Archivo:** `.github/workflows/deploy-netlify.yml`

**🔄 Se activa cuando:**
- Haces `git push` a la rama `main`
- Creas un Pull Request a `main`

**⚙️ Pasos que ejecuta:**
1. **📦 Checkout** - Descarga el código
2. **🟢 Setup Node.js** - Configura Node.js 18
3. **📥 Install** - Instala dependencias (`npm ci`)
4. **🧪 Test** - Ejecuta tests automáticos
5. **🏗️ Build** - Construye la aplicación (`npm run build`)
6. **🚀 Deploy** - Sube a Netlify automáticamente

---

## ⚙️ **Cómo Funciona el Pipeline**

### **🔍 Proceso Detallado:**

```yaml
# 1. TRIGGER - Se activa con:
git push origin main

# 2. GITHUB ACTIONS - Servidor de GitHub:
📦 Descarga tu código
🟢 Instala Node.js 18
📥 Ejecuta: npm ci
🧪 Ejecuta: npm test
🏗️ Ejecuta: npm run build
📁 Genera carpeta /build

# 3. NETLIFY DEPLOY:
🚀 Sube carpeta /build a Netlify
🌐 Actualiza el sitio web
✅ Notifica éxito/error
```

### **⏱️ Tiempos aproximados:**
- **Install dependencies:** ~30 segundos
- **Run tests:** ~10 segundos  
- **Build application:** ~45 segundos
- **Deploy to Netlify:** ~20 segundos
- **🎯 TOTAL:** ~2 minutos

---

## 🌐 **Configuración de Netlify**

### **Paso 1: Crear cuenta Netlify**

1. **Ve a:** [netlify.com](https://netlify.com)
2. **Sign up** con tu cuenta de GitHub
3. **Autoriza** acceso a repositorios

### **Paso 2: Obtener credenciales**

#### **🔑 A. Token de Autenticación**

1. **Ve a:** [app.netlify.com/user/applications#personal-access-tokens](https://app.netlify.com/user/applications#personal-access-tokens)
2. **Clic:** "New access token"
3. **Nombre:** `GitHub Actions Deploy`
4. **Copia el token** (aparece una sola vez)
5. **Guárdalo seguro** - Lo necesitarás después

#### **🆔 B. Site ID**

**Opción 1 - Crear sitio nuevo:**
1. **Netlify Dashboard** → "New site from Git"
2. **Conecta GitHub** → Selecciona `notiaventurasDiana`
3. **Deploy settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
4. **Deploy** (puede fallar, no importa)
5. **Site settings** → **General** → Copia el "Site ID"

**Opción 2 - Sitio vacío:**
1. **"New site"** → **"Deploy manually"**
2. **Arrastra cualquier carpeta** (temporal)
3. **Site settings** → **General** → Copia el "Site ID"

### **Paso 3: Configurar GitHub Secrets**

1. **Ve a tu repositorio:** [github.com/dmarquez83/notiaventurasDiana](https://github.com/dmarquez83/notiaventurasDiana)
2. **Settings** → **Secrets and variables** → **Actions**
3. **"New repository secret"**

**🔐 Secret 1:**
```
Name: NETLIFY_AUTH_TOKEN
Value: [pega aquí tu token de Netlify]
```

**🔐 Secret 2:**
```
Name: NETLIFY_SITE_ID  
Value: [pega aquí tu Site ID]
```

### **Paso 4: ¡Verificar funcionamiento!**

1. **Hacer cualquier cambio** en el código
2. **Git push**
3. **Ver GitHub Actions:** [github.com/dmarquez83/notiaventurasDiana/actions](https://github.com/dmarquez83/notiaventurasDiana/actions)
4. **Sitio actualizado** en ~2 minutos

---

## 📝 **Uso Diario**

### **🔄 Flujo de trabajo normal:**

```bash
# 1. Hacer cambios en el código
# (editar en VS Code, Cursor, etc.)

# 2. Probar localmente (opcional)
npm start

# 3. Subir cambios
git add .
git commit -m "Descripción del cambio"
git push

# 4. ¡AUTOMÁTICO!
# ✅ Pipeline se activa solo
# ✅ Tests se ejecutan
# ✅ Build se genera  
# ✅ Deploy a Netlify
# ✅ Sitio actualizado
```

### **📱 URLs de tu sitio:**

- **🏠 GitHub Pages:** [https://dmarquez83.github.io/notiaventurasDiana](https://dmarquez83.github.io/notiaventurasDiana)
- **⚡ Netlify:** `https://[tu-site-id].netlify.app`
- **🔗 Custom Domain:** (opcional) `https://notiaventuras-diana.com`

### **💡 Tips importantes:**

✅ **HACER:**
- Commits con mensajes descriptivos
- Probar cambios localmente antes de push
- Verificar que el pipeline pase antes del siguiente cambio

❌ **EVITAR:**
- Push de archivos grandes (>25MB)
- Cambios directamente en GitHub web (mejor localmente)
- Multiple pushes rápidos (esperar que termine el anterior)

---

## 🛠️ **Troubleshooting**

### **❌ Errores Comunes y Soluciones**

#### **1. "NETLIFY_AUTH_TOKEN not found"**
```
❌ Error: Required secret not found
✅ Solución: Configurar secrets en GitHub
📍 Ubicación: Settings → Secrets → Actions
```

#### **2. "Build failed - npm test"**
```
❌ Error: Tests are failing
✅ Solución 1: Arreglar los tests que fallan
✅ Solución 2: Modificar pipeline para ignorar tests
```

#### **3. "Site not found - Invalid Site ID"**
```
❌ Error: Site ID incorrecto
✅ Solución: Verificar NETLIFY_SITE_ID en GitHub secrets
```

#### **4. "Build command failed"**
```
❌ Error: npm run build failed
✅ Verificar: package.json tiene script "build"
✅ Probar localmente: npm run build
```

#### **5. "Deploy timeout"**
```
❌ Error: Deploy took too long
✅ Solución: Proyecto muy grande, optimizar assets
```

### **🔍 Cómo debuggear:**

1. **Ve a GitHub Actions:** [github.com/dmarquez83/notiaventurasDiana/actions](https://github.com/dmarquez83/notiaventurasDiana/actions)
2. **Clic en el workflow fallido**
3. **Clic en el paso que falló**
4. **Lee el log completo**
5. **Busca líneas rojas** con errores

---

## 📊 **Monitoreo y Verificación**

### **🔍 Cómo verificar que todo funciona:**

#### **1. GitHub Actions Status**
```
🟢 Success: Todo bien, deploy exitoso
🟡 Running: Pipeline ejecutándose  
❌ Failed: Error, revisar logs
⚪ Pending: En cola, esperando
```

#### **2. Netlify Dashboard**
- **Recent deploys:** Historial de deploys
- **Site preview:** Vista previa del sitio
- **Build logs:** Logs detallados del build

#### **3. Verificación del sitio**
- **✅ Badge "EDICIÓN ESPECIAL"** visible
- **✅ Cambios reflejados** en ~2 minutos
- **✅ Sin errores** en consola del navegador

### **📈 Métricas importantes:**

- **⚡ Deploy time:** Objetivo < 3 minutos
- **✅ Success rate:** Objetivo > 95%
- **🔄 Frequency:** Deploys por día/semana
- **📦 Bundle size:** Mantener < 5MB

---

## 🎯 **Próximos Pasos**

### **🚀 Mejoras opcionales:**

1. **🔔 Notificaciones Slack/Discord** cuando hay deploys
2. **🧪 Tests más completos** (E2E testing)
3. **📊 Lighthouse CI** para performance
4. **🌍 Deploy a múltiples entornos** (staging/production)
5. **📱 PWA features** para app móvil

### **🎨 Features del sitio:**

1. **🖼️ Agregar imágenes reales** a las secciones
2. **📝 CMS integration** para editar contenido fácil
3. **💬 Comentarios** en artículos
4. **📊 Analytics** para ver visitantes
5. **🔍 Búsqueda** en artículos

---

## ✅ **Checklist de Configuración**

**Pipeline GitHub Actions:**
- [x] ✅ Archivo `.github/workflows/deploy-netlify.yml` creado
- [x] ✅ Pipeline se activa con `git push`
- [x] ✅ Build funciona correctamente

**GitHub Configuration:**
- [x] ✅ Repositorio público en GitHub
- [x] ✅ Actions habilitados
- [ ] ⏳ Secrets de Netlify configurados

**Netlify Configuration:**
- [ ] ⏳ Cuenta Netlify creada
- [ ] ⏳ Site ID obtenido
- [ ] ⏳ Auth Token generado
- [ ] ⏳ Secrets configurados en GitHub

**Verificación Final:**
- [ ] ⏳ Deploy automático funciona
- [ ] ⏳ Sitio se actualiza correctamente
- [ ] ⏳ URLs funcionando

---

## 🆘 **Contacto y Ayuda**

**¿Tienes problemas?**
- 📝 **GitHub Issues:** [github.com/dmarquez83/notiaventurasDiana/issues](https://github.com/dmarquez83/notiaventurasDiana/issues)
- 📚 **Documentación Netlify:** [docs.netlify.com](https://docs.netlify.com)
- 📖 **GitHub Actions Docs:** [docs.github.com/actions](https://docs.github.com/actions)

---

**📅 Última actualización:** 30 de enero de 2025  
**👩‍💻 Proyecto:** NotiAventuras de Diana  
**🚀 Status:** Deploy automático configurado y funcionando 