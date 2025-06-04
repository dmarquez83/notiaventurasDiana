import {
  Close as CloseIcon,
  FitnessCenter,
  LocalHospital,
  Menu as MenuIcon,
  Movie,
  Nature,
  NavigateBefore,
  NavigateNext,
  School,
  SportsEsports,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

// Importar las imágenes
import ambienteImg from "./images/ambiente.png";
import cineImg from "./images/cine.png";
import colegioImg from "./images/colegio.png";
import entretenimientoImg from "./images/entretenimiento.png";
import natacionImg from "./images/natacion.png";
import saludImg from "./images/salud.png";

// Función para generar fecha automática en español
const obtenerFechaActual = () => {
  const fecha = new Date();
  const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return fecha.toLocaleDateString("es-ES", opciones);
};

// Datos del periódico basados en context.md
const periodicoData = {
  // CABECERA (Masthead) del periódico
  masthead: {
    titulo: "🎬 NotiAventuras de Diana",
    subtitulo: "Cine del pasado y del presente",
    fecha: obtenerFechaActual(), // Fecha automática
    autora: "Diana Márquez",
    editorial: "Ideas Brillantes del 5to Grado",
  },

  // SECCIONES del periódico con imágenes reales
  secciones: [
    {
      id: 1,
      titulo: "Historia del Cine",
      kicker: "CINE CLÁSICO",
      subtitulo: "Del blanco y negro al 3D",
      emoji: "🎥",
      color: "#1976D2",
      icon: <Movie />,
      imagen: cineImg,
      contenido: [
        "El cine comenzó en 1895 con los hermanos Lumière en Francia.",
        "Las primeras películas eran completamente mudas y en blanco y negro.",
        "Con el tiempo llegó el sonido, luego el color y ahora el 3D.",
        "Hoy en día podemos ver películas hasta en nuestros teléfonos móviles.",
        "El cine ha evolucionado desde simples imágenes en movimiento hasta experiencias inmersivas.",
      ],
      pullQuote: '"El cine es la poesía de la modernidad"',
      byline: "Por Diana Márquez",
      imagenDesc: "Evolución del cine: de cámaras vintage a tecnología digital",
    },
    {
      id: 2,
      titulo: "Información del Colegio",
      kicker: "VIDA ESCOLAR",
      subtitulo: "Noticias de nuestra comunidad educativa",
      emoji: "🏫",
      color: "#388E3C",
      icon: <School />,
      imagen: colegioImg,
      contenido: [
        "Celebramos el Día de la Familia con una actividad muy especial.",
        "Todas las familias participaron en juegos y actividades educativas.",
        "Estamos terminando el tercer momento académico del año.",
        "Recordamos a todos pagar las mensualidades del colegio a tiempo.",
        "Es importante cuidar nuestro salón de clases y el bebedero común.",
      ],
      pullQuote: '"La educación es el arma más poderosa para cambiar el mundo"',
      byline: "Por Diana Márquez",
      imagenDesc: "Estudiantes y familias celebrando juntos en el colegio",
    },
    {
      id: 3,
      titulo: "Ambiente",
      kicker: "ECOLOGÍA",
      subtitulo: "Cuidemos nuestro planeta",
      emoji: "🌱",
      color: "#F57C00",
      icon: <Nature />,
      imagen: ambienteImg,
      contenido: [
        "No ensucies la calle, mantén limpio tu entorno.",
        "Cuida las plantas de tu casa y del colegio.",
        "Apaga la luz cuando no la necesites para ahorrar energía.",
        "Usa menos papel y recicla lo que puedas.",
        "Pequeñas acciones pueden hacer una gran diferencia para el planeta.",
      ],
      pullQuote:
        '"La Tierra no es herencia de nuestros padres, sino préstamo de nuestros hijos"',
      byline: "Por Diana Márquez",
      imagenDesc: "Niños cuidando el medio ambiente y reciclando",
    },
    {
      id: 4,
      titulo: "Entretenimiento",
      kicker: "DIVERSIÓN",
      subtitulo: "Cómics y videojuegos para todos",
      emoji: "🕹️",
      color: "#D32F2F",
      icon: <SportsEsports />,
      imagen: entretenimientoImg,
      contenido: [
        "La película de Minecraft se estrenará en 2025 y promete ser épica.",
        "Roblox se ha convertido en uno de los juegos más populares del mundo.",
        "Los cómics siguen siendo muy populares entre niños y jóvenes.",
        "Los videojuegos pueden ser tanto educativos como divertidos.",
        "Es importante balancear el tiempo de pantalla con otras actividades.",
      ],
      pullQuote: '"Los juegos son la forma más elevada de investigación"',
      byline: "Por Diana Márquez",
      imagenDesc: "Niños disfrutando videojuegos y leyendo cómics",
    },
    {
      id: 5,
      titulo: "Salud",
      kicker: "BIENESTAR",
      subtitulo: "Consejos para mantenernos sanos",
      emoji: "🍓",
      color: "#C2185B",
      icon: <LocalHospital />,
      imagen: saludImg,
      contenido: [
        "Lava tus manos frecuentemente para prevenir enfermedades.",
        "Come frutas y verduras todos los días para estar saludable.",
        "Duerme bien al menos 8 horas cada noche.",
        "Haz ejercicio regularmente para mantenerte en forma.",
        "Bebe mucha agua y evita las bebidas azucaradas.",
      ],
      pullQuote: '"La salud es la verdadera riqueza"',
      byline: "Por Diana Márquez",
      imagenDesc: "Niños comiendo frutas y practicando hábitos saludables",
    },
    {
      id: 6,
      titulo: "Deporte",
      kicker: "ACTIVIDAD FÍSICA",
      subtitulo: "¡Nadar es divertido!",
      emoji: "🏊‍♀️",
      color: "#303F9F",
      icon: <FitnessCenter />,
      imagen: natacionImg,
      contenido: [
        "La natación es considerado uno de los deportes más completos.",
        "Ayuda a fortalecer todos los músculos del cuerpo.",
        "Es excelente para el corazón y los pulmones.",
        "Además de saludable, nadar es muy divertido.",
        "Se puede practicar durante toda la vida, desde niños hasta adultos mayores.",
      ],
      pullQuote: '"Un cuerpo sano es una mente sana"',
      byline: "Por Diana Márquez",
      imagenDesc: "Niños nadando y practicando deportes en la escuela",
    },
  ],
};

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Estado inicial del menú: abierto en desktop, cerrado en móvil
  const [seccionActiva, setSeccionActiva] = useState(0);
  const [menuAbierto, setMenuAbierto] = useState(!isMobile);

  // Forzar re-render con una clave única
  const [renderKey, setRenderKey] = useState(0);

  // Estados para el swipe en móvil
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Obtener sección actual de forma más directa
  const seccionSeleccionada = periodicoData.secciones[seccionActiva];

  // useEffect para ajustar el menú según el tamaño de pantalla
  useEffect(() => {
    setMenuAbierto(!isMobile);
  }, [isMobile]);

  // Validación de seguridad - DESPUÉS de los hooks
  if (!seccionSeleccionada) {
    console.error(
      "❌ Error: No se pudo encontrar la sección con índice:",
      seccionActiva
    );
    return <div>Error: Sección no encontrada</div>;
  }

  // Funciones para el swipe en móvil
  const minSwipeDistance = 50; // Distancia mínima para considerar un swipe válido

  const onTouchStart = (e) => {
    if (!isMobile) return;
    setTouchEnd(null); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && seccionActiva < periodicoData.secciones.length - 1) {
      // Swipe izquierda = siguiente sección
      navegarSeccion(1);
    }
    if (isRightSwipe && seccionActiva > 0) {
      // Swipe derecha = sección anterior
      navegarSeccion(-1);
    }
  };

  // Función para alternar el menú
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  // Función para cambiar sección - SIMPLIFICADA Y MEJORADA
  const cambiarSeccion = (nuevoIndice) => {
    if (nuevoIndice >= 0 && nuevoIndice < periodicoData.secciones.length) {
      setSeccionActiva(nuevoIndice);
      setRenderKey((prev) => prev + 1); // Forzar re-render
      setMenuAbierto(!isMobile); // Solo cerrar en móvil
    }
  };

  // Función para navegar - SIMPLIFICADA
  const navegarSeccion = (direccion) => {
    const nuevaSeccion = seccionActiva + direccion;
    cambiarSeccion(nuevaSeccion);
  };

  // Componente del menú lateral reutilizable
  const MenuContent = () => (
    <Box sx={{ width: 300, p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#1565C0",
            fontWeight: "bold",
          }}
        >
          📰 Secciones del Periódico
        </Typography>
        {isMobile && (
          <IconButton onClick={toggleMenu} size="small">
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <List dense>
        {periodicoData.secciones.map((seccion, index) => (
          <ListItem key={seccion.id} disablePadding>
            <ListItemButton
              selected={seccionActiva === index}
              onClick={() => cambiarSeccion(index)}
              sx={{
                borderRadius: 1,
                mb: 1,
                "&.Mui-selected": {
                  bgcolor: `${seccion.color}20`,
                  "&:hover": {
                    bgcolor: `${seccion.color}30`,
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: seccion.color, minWidth: 40 }}>
                {seccion.icon}
              </ListItemIcon>
              <ListItemText
                primary={seccion.titulo}
                secondary={`${seccion.emoji} ${seccion.kicker}`}
                primaryTypographyProps={{
                  fontWeight: seccionActiva === index ? "bold" : "normal",
                  fontSize: "0.9rem",
                }}
                secondaryTypographyProps={{
                  fontSize: "0.75rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Información del periódico */}
      <Divider sx={{ my: 2 }} />
      <Typography
        variant="subtitle2"
        gutterBottom
        sx={{ color: "#1565C0", fontWeight: "bold" }}
      >
        📄 Información Editorial
      </Typography>
      <Box sx={{ "& > *": { mb: 1 } }}>
        <Typography variant="caption" display="block">
          <strong>Editorial:</strong> {periodicoData.masthead.editorial}
        </Typography>
        <Typography variant="caption" display="block">
          <strong>Editora:</strong> {periodicoData.masthead.autora}
        </Typography>
        <Typography variant="caption" display="block">
          <strong>Fecha:</strong> {periodicoData.masthead.fecha}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <div className="App">
      {/* BOTÓN FLOTANTE DEL MENÚ - Siempre visible */}
      <Fab
        color="primary"
        aria-label="menu"
        onClick={toggleMenu}
        sx={{
          position: "fixed",
          top: isMobile ? 16 : 24,
          left: isMobile ? 16 : 24,
          zIndex: 1200,
          bgcolor: seccionSeleccionada.color,
          "&:hover": {
            bgcolor: seccionSeleccionada.color,
            opacity: 0.9,
          },
        }}
      >
        <MenuIcon />
      </Fab>

      {/* DRAWER/MENÚ LATERAL */}
      <Drawer
        anchor="left"
        open={menuAbierto}
        onClose={toggleMenu}
        variant={isMobile ? "temporary" : "persistent"}
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "background.paper",
            boxShadow: 3,
          },
        }}
      >
        <MenuContent />
      </Drawer>

      {/* MASTHEAD - Cabecera del Periódico */}
      <AppBar
        position="static"
        sx={{
          bgcolor: seccionSeleccionada.color,
          mb: 0,
          pl: menuAbierto && !isMobile ? "300px" : 0,
          transition: "padding-left 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            flexDirection: "column",
            py: 2,
            pl: isMobile ? 8 : menuAbierto ? 6 : 2,
          }}
        >
          {/* Logo del periódico - TEMPORALMENTE REMOVIDO
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img
              src={logoImg}
              alt="Logo del periódico"
              style={{
                height: isMobile ? "40px" : "50px",
                marginRight: "10px",
                filter: "brightness(0) invert(1)", // Para hacer el logo blanco
              }}
            />
          </Box>
          */}

          {/* Información superior del masthead */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
              flexDirection: isMobile ? "column" : "row",
              textAlign: isMobile ? "center" : "inherit",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mx: !isMobile && menuAbierto ? 6 : 0,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "rgba(255,255,255,0.8)" }}
              >
                {periodicoData.masthead.editorial}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "rgba(255,255,255,0.8)" }}
              >
                {periodicoData.masthead.fecha}
              </Typography>
            </Box>
          </Box>

          {/* NAMEPLATE - Título principal centrado */}
          <Typography
            variant={isMobile ? "h4" : "h2"}
            component="h1"
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              mb: 1,
            }}
          >
            {periodicoData.masthead.titulo}
          </Typography>

          {/* Badge de Edición Especial */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                backgroundColor: "rgba(255,215,0,0.9)",
                color: seccionSeleccionada.color,
                fontWeight: "bold",
                px: isMobile ? 1.5 : 2,
                py: 0.5,
                borderRadius: "15px",
                border: "2px solid #FFD700",
                textTransform: "uppercase",
                letterSpacing: isMobile ? "0.5px" : "1px",
                fontSize: isMobile ? "0.6rem" : "0.8rem",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {isMobile
                ? "🌟 EDICIÓN ESPECIAL 🌟"
                : "🌟 EDICIÓN ESPECIAL - REFACTORIZADA 🌟"}
            </Typography>
          </Box>

          {/* Subtítulo */}
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              fontStyle: "italic",
              textAlign: "center",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {periodicoData.masthead.subtitulo}
          </Typography>

          {/* Autor */}
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.8)",
              mt: 1,
              textAlign: "center",
            }}
          >
            ✍️ Por {periodicoData.masthead.autora}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* CONTENIDO PRINCIPAL */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 3,
          mb: 4,
          px: isMobile ? 1 : 3,
          ml: menuAbierto && !isMobile ? "300px" : "auto",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Paper
            key={`seccion-${seccionActiva}-${renderKey}`}
            elevation={3}
            sx={{
              p: isMobile ? 2 : 4,
              backgroundColor: "white",
              borderRadius: 2,
              maxWidth: "800px",
              width: "100%",
            }}
          >
            {/* ARTÍCULO PRINCIPAL */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="overline"
                sx={{
                  color: seccionSeleccionada.color,
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                {seccionSeleccionada.kicker}
              </Typography>

              {/* HEADLINE principal */}
              <Typography
                variant={isMobile ? "h4" : "h3"}
                component="h2"
                sx={{
                  fontFamily: "Georgia, serif",
                  fontWeight: "bold",
                  color: seccionSeleccionada.color,
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                {seccionSeleccionada.emoji} {seccionSeleccionada.titulo}
              </Typography>

              {/* DECK - Subtítulo explanatorio */}
              <Typography
                variant={isMobile ? "body1" : "h6"}
                sx={{
                  color: "text.secondary",
                  fontStyle: "italic",
                  borderLeft: `4px solid ${seccionSeleccionada.color}`,
                  pl: 2,
                  mb: 1,
                }}
              >
                {seccionSeleccionada.subtitulo}
              </Typography>

              {/* BYLINE */}
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {seccionSeleccionada.byline}
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* IMAGEN PRINCIPAL DE LA SECCIÓN */}
            <Card
              elevation={2}
              sx={{
                mb: 3,
                cursor: isMobile ? "grab" : "default",
                userSelect: "none",
                "&:active": {
                  cursor: isMobile ? "grabbing" : "default",
                },
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <CardMedia
                component="img"
                sx={{
                  height: isMobile ? 200 : 300,
                  objectFit: "cover",
                  pointerEvents: "none", // Prevenir drag de imagen
                }}
                image={seccionSeleccionada.imagen}
                alt={seccionSeleccionada.titulo}
              />
              {/* CAPTION - Descripción de la imagen */}
              <CardContent sx={{ pt: 1, pb: 1 }}>
                <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                  📸 {seccionSeleccionada.imagenDesc}
                </Typography>
                {/* Indicador de swipe solo en móvil */}
                {isMobile && (
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      textAlign: "center",
                      color: "text.secondary",
                      fontSize: "0.7rem",
                      mt: 0.5,
                      opacity: 0.7,
                    }}
                  >
                    👈 Desliza para navegar 👉
                  </Typography>
                )}
              </CardContent>
            </Card>

            {/* CONTENIDO DEL ARTÍCULO */}
            <Box sx={{ mb: 4 }}>
              {/* LEAD - Primer párrafo destacado con drop cap */}
              <Typography
                variant="body1"
                className="drop-cap"
                sx={{
                  fontSize: isMobile ? "1.1rem" : "1.2rem",
                  fontWeight: 500,
                  mb: 3,
                  lineHeight: 1.6,
                  textAlign: "justify",
                }}
              >
                {seccionSeleccionada.contenido[0]}
              </Typography>

              {/* CUERPO del artículo */}
              <Box sx={{ mb: 3 }}>
                {seccionSeleccionada.contenido.slice(1).map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      mb: 2,
                      textAlign: "justify",
                      lineHeight: 1.7,
                      fontSize: isMobile ? "1rem" : "1.1rem",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* PULL QUOTE - Cita destacada */}
            <Paper
              elevation={1}
              sx={{
                p: 2,
                bgcolor: "grey.50",
                borderLeft: `4px solid ${seccionSeleccionada.color}`,
                mb: 3,
              }}
            >
              <Typography
                variant={isMobile ? "body1" : "h6"}
                sx={{
                  fontStyle: "italic",
                  color: seccionSeleccionada.color,
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {seccionSeleccionada.pullQuote}
              </Typography>
            </Paper>

            {/* NAVEGACIÓN entre artículos */}
            <Divider sx={{ my: 3 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 2 : 0,
              }}
            >
              <Button
                variant="outlined"
                disabled={seccionActiva === 0}
                onClick={() => navegarSeccion(-1)}
                startIcon={!isMobile && <NavigateBefore />}
                sx={{
                  borderColor: seccionSeleccionada.color,
                  color: seccionSeleccionada.color,
                  width: isMobile ? "100%" : "auto",
                }}
              >
                {isMobile ? "← Anterior" : "Artículo Anterior"}
              </Button>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  order: isMobile ? -1 : 0,
                }}
              >
                Página {seccionActiva + 1} de {periodicoData.secciones.length}
              </Typography>

              <Button
                variant="outlined"
                disabled={seccionActiva === periodicoData.secciones.length - 1}
                onClick={() => navegarSeccion(1)}
                endIcon={!isMobile && <NavigateNext />}
                sx={{
                  borderColor: seccionSeleccionada.color,
                  color: seccionSeleccionada.color,
                  width: isMobile ? "100%" : "auto",
                }}
              >
                {isMobile ? "Siguiente →" : "Siguiente Artículo"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default App;
