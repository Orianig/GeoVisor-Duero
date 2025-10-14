# 🗺️ GeoVisor Duero

**Aplicación web moderna para la visualización y análisis de datos geoespaciales del río Duero**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://orianig.github.io/GeoVisor-Duero/)
[![GitHub](https://img.shields.io/badge/📂_Source_Code-GitHub-black?style=for-the-badge)](https://github.com/Orianig/GeoVisor-Duero)

---

## 🚀 Descripción del Proyecto

GeoVisor Duero es una aplicación web full-stack desarrollada para demostrar capacidades avanzadas en desarrollo frontend, backend y visualización de datos geoespaciales. La aplicación permite explorar interactivamente cuencas hidrográficas y pozos de agua del río Duero con estadísticas en tiempo real y controles dinámicos.

### ✨ Características Principales

- **🗺️ Visualización Interactiva**: Mapas dinámicos con Leaflet y React-Leaflet
- **📊 Estadísticas en Tiempo Real**: Datos actualizados según el área visible del mapa
- **🎛️ Control de Capas**: Toggle ON/OFF de diferentes capas geográficas
- **⚡ Rendimiento Optimizado**: Carga eficiente de datos GeoJSON
- **🎨 UI/UX Moderno**: Diseño profesional con Tailwind CSS

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Framework principal
- **Vite** - Build tool y dev server
- **React-Leaflet** - Integración de mapas
- **Tailwind CSS** - Estilos y diseño
- **React Router** - Navegación SPA
- **React Icons** - Iconografía

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Middleware personalizado** - Validación y respuestas estandarizadas

### Datos y Mapas
- **Leaflet** - Librería de mapas interactivos
- **GeoJSON** - Formato de datos geoespaciales
- **OpenStreetMap** - Tiles de mapa base
- **CartoDB** - Tiles de mapa estilizados

---

## 🏗️ Arquitectura del Proyecto

```
GeoVisor-Duero/
├── 📁 client/                 # Frontend React
│   ├── 📁 src/
│   │   ├── 📁 components/     # Componentes reutilizables
│   │   │   ├── Layout.jsx     # Layout principal con navbar
│   │   │   ├── Navbar.jsx     # Navegación
│   │   │   ├── MapView.jsx    # Componente de mapa
│   │   │   ├── Sidebar.jsx    # Panel de control y estadísticas
│   │   │   └── Details.jsx    # Panel de detalles de features
│   │   ├── 📁 pages/          # Páginas principales
│   │   │   ├── Home.jsx       # Landing page
│   │   │   └── Map.jsx        # Página del mapa
│   │   └── config.js          # Configuración de API
│   └── 📄 package.json
├── 📁 server/                 # Backend Node.js
│   ├── 📁 routes/             # Rutas de API
│   ├── 📁 middleware/         # Middleware personalizado
│   ├── 📁 data/geojson/       # Archivos GeoJSON
│   └── 📄 package.json
└── 📄 README.md
```

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Orianig/GeoVisor-Duero.git
cd GeoVisor-Duero
```

### 2️⃣ Instalar dependencias

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 3️⃣ Ejecutar la aplicación

**Iniciar el servidor (Terminal 1):**
```bash
cd server
npm start
# Servidor corriendo en http://localhost:3000
```

**Iniciar el cliente (Terminal 2):**
```bash
cd client
npm run dev
# Cliente corriendo en http://localhost:5173
```

### 4️⃣ Abrir en el navegador
Visita `http://localhost:5173` para ver la aplicación en funcionamiento.

---

## 🎯 Funcionalidades Implementadas

### 🗺️ Visualización de Mapas
- **Mapa interactivo** con zoom y pan
- **Múltiples capas** (cuencas hidrográficas y pozos)
- **Popups informativos** al hacer clic en features
- **Estilos dinámicos** según el tipo de dato

### 📊 Panel de Control Inteligente
- **Estadísticas en tiempo real** basadas en viewport
- **Control de visibilidad** de capas
- **Leyenda dinámica** con colores consistentes
- **Contadores actualizados** automáticamente

### 📱 Panel de Detalles
- **Estado vacío** cuando no hay selección
- **Información completa** de features seleccionadas
- **Datos específicos** según el tipo (pozo vs cuenca)
- **Interfaz adaptativa** que crece/decrece dinámicamente

### 🎨 Diseño y UX
- **Layout de 3 columnas** (Sidebar + Mapa + Detalles)
- **Navegación fluida** entre páginas
- **Landing page atractiva** para recruiters
- **Paleta de colores consistente** (Sky + Blue)

---

## 🔧 Características Técnicas Destacadas

### Frontend Avanzado
- **Hooks personalizados** para gestión de estado
- **Componentes reutilizables** y modulares
- **Renderizado condicional** inteligente
- **Optimización de rendimiento** con useCallback y useMemo

### Backend Robusto
- **API RESTful** bien estructurada
- **Middleware personalizado** para validación
- **Manejo de errores** estandarizado
- **Paginación** para grandes datasets

### Integración de Mapas
- **Radio dinámico** de puntos según zoom
- **Detección de viewport** para estadísticas
- **Orden de capas** optimizado
- **Eventos de mapa** personalizados

---

## 🌐 Demo en Vivo

🔗 **[Ver Demo](https://orianig.github.io/GeoVisor-Duero/)**

La aplicación está desplegada y completamente funcional. Puedes:
- Explorar el mapa interactivo
- Activar/desactivar capas
- Ver estadísticas en tiempo real
- Hacer clic en features para ver detalles
- Navegar entre diferentes vistas

---

## 👨‍💻 Sobre el Desarrollador

Este proyecto fue desarrollado como demostración de habilidades full-stack, incluyendo:

- ✅ **Desarrollo Frontend** con React y tecnologías modernas
- ✅ **Desarrollo Backend** con Node.js y Express
- ✅ **Integración de APIs** y manejo de datos
- ✅ **Visualización de datos** geoespaciales
- ✅ **Diseño UI/UX** profesional
- ✅ **Arquitectura escalable** y mantenible

---

<div align="center">


*Desarrollado con ❤️ para demostrar capacidades full-stack*

</div>
